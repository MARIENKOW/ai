import { BullModule } from "@nestjs/bullmq";
import { Module } from "@nestjs/common";
import { DEFAULT_JOB_OPTIONS } from "@/infrastructure/queue/queue.config";
import { redisConnectionOptions } from "@/infrastructure/queue/queue.utils";
import { RedisHealthService } from "@/infrastructure/queue/redis-health.service";

/**
 * Подключение BullMQ к Redis — один раз на всё приложение.
 * Конкретные очереди регистрируются в своих модулях через BullModule.registerQueue().
 */
@Module({
    imports: [
        BullModule.forRoot({
            connection: redisConnectionOptions(),
            defaultJobOptions: DEFAULT_JOB_OPTIONS,
        }),
    ],
    providers: [RedisHealthService],
    exports: [RedisHealthService],
})
export class QueueModule {}
