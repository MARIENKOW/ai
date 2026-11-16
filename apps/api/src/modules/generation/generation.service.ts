import { QUEUE } from "@/infrastructure/queue/queue.config";
import { isRedisConnectionError } from "@/infrastructure/queue/queue.utils";
import { AdminActor } from "@/modules/auth/auth.type";
import { GENERATION_JOB } from "@/modules/generation/generation.config";
import { mapGenerationJob } from "@/modules/generation/generation.mapper";
import { GenerationQueue } from "@/modules/generation/generation.types";
import { GenerationJobDto } from "@myorg/shared/dto";
import { InjectQueue } from "@nestjs/bullmq";
import {
    Injectable,
    Logger,
    NotFoundException,
    OnModuleInit,
} from "@nestjs/common";
import { randomUUID } from "crypto";

@Injectable()
export class GenerationService implements OnModuleInit {
    constructor(
        @InjectQueue(QUEUE.GENERATION)
        private readonly queue: GenerationQueue,
    ) {}
    private readonly logger = new Logger(GenerationService.name);

    onModuleInit() {
        // Потерю соединения логирует RedisHealthService — здесь только прочие ошибки очереди
        this.queue.on("error", (error: Error) => {
            if (isRedisConnectionError(error)) return;
            this.logger.error("Queue error", error.stack);
        });
    }

    // ── API ──────────────────────────────────────────────────────────

    async create(actor: AdminActor): Promise<GenerationJobDto> {
        // jobId = UUID, а не автоинкремент BullMQ: id нельзя угадать перебором
        const job = await this.queue.add(
            GENERATION_JOB.GENERATE,
            { adminId: actor.admin.id },
            { jobId: randomUUID() },
        );
        return mapGenerationJob(job, "waiting");
    }

    async get(actor: AdminActor, id: string): Promise<GenerationJobDto> {
        const job = await this.queue.getJob(id);

        // Чужая задача отдаёт тот же 404, что и несуществующая — не раскрываем, что id есть
        if (!job || job.data.adminId !== actor.admin.id)
            throw new NotFoundException();

        return mapGenerationJob(job, await job.getState());
    }
}
