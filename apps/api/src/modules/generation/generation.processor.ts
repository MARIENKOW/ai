import { QUEUE } from "@/infrastructure/queue/queue.config";
import { isRedisConnectionError } from "@/infrastructure/queue/queue.utils";
import {
    GENERATION_CONCURRENCY,
    GENERATION_PLACEHOLDER_DURATION_MS,
} from "@/modules/generation/generation.config";
import {
    GenerationJob,
    GenerationJobResult,
} from "@/modules/generation/generation.types";
import { OnWorkerEvent, Processor, WorkerHost } from "@nestjs/bullmq";
import { Logger } from "@nestjs/common";
import { setTimeout } from "timers/promises";

/**
 * Обработчик очереди generation.
 * Сейчас работает внутри процесса API; позже переедет в отдельный worker-процесс
 * без изменений в самом классе.
 */
@Processor(QUEUE.GENERATION, { concurrency: GENERATION_CONCURRENCY })
export class GenerationProcessor extends WorkerHost {
    private readonly logger = new Logger(GenerationProcessor.name);

    async process(job: GenerationJob): Promise<GenerationJobResult> {
        // ── Заглушка: здесь будет вызов ComfyUI ──────────────────────
        await job.updateProgress(0);
        await setTimeout(GENERATION_PLACEHOLDER_DURATION_MS);
        await job.updateProgress(100);
        return { placeholder: true };
    }

    // ── Events ───────────────────────────────────────────────────────

    @OnWorkerEvent("active")
    onActive(job: GenerationJob) {
        this.logger.log(
            `Job started [jobId=${job.id}] attempt ${job.attemptsMade + 1}`,
        );
    }

    @OnWorkerEvent("completed")
    onCompleted(job: GenerationJob) {
        this.logger.log(`Job completed [jobId=${job.id}]`);
    }

    // job может быть undefined, если задача уже удалена из Redis
    @OnWorkerEvent("failed")
    onFailed(job: GenerationJob | undefined, error: Error) {
        this.logger.error(
            `Job failed [jobId=${job?.id}] attempt ${job?.attemptsMade}`,
            error.stack,
        );
    }

    // Без слушателя error BullMQ может перестать обрабатывать задачи после ошибки.
    // Потерю соединения уже логирует RedisHealthService — здесь не дублируем.
    @OnWorkerEvent("error")
    onError(error: Error) {
        if (isRedisConnectionError(error)) return;
        this.logger.error("Worker error", error.stack);
    }
}
