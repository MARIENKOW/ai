import { REDIS_HEALTH_TIMEOUT_MS } from "@/infrastructure/queue/queue.config";
import { redisConnectionOptions } from "@/infrastructure/queue/queue.utils";
import {
    Injectable,
    Logger,
    OnModuleDestroy,
    OnModuleInit,
} from "@nestjs/common";
import { Redis } from "ioredis";
import { setTimeout } from "timers/promises";

/**
 * Отдельное лёгкое подключение к Redis для двух задач:
 *   1. Логировать состояние соединения ОДИН раз: «недоступен» при первой ошибке
 *      и «восстановлен» при переподключении — вместо строки на каждую попытку.
 *   2. Отвечать на health-check (PING).
 */
@Injectable()
export class RedisHealthService implements OnModuleInit, OnModuleDestroy {
    private readonly logger = new Logger("Redis");
    private client!: Redis;
    /** Уже сообщили о потере соединения — молчим до восстановления */
    private outageReported = false;

    onModuleInit() {
        this.client = new Redis({
            ...redisConnectionOptions(),
            // Health-check должен отвечать сразу, а не ждать в очереди команд, пока Redis вернётся
            enableOfflineQueue: false,
            maxRetriesPerRequest: 1,
        });

        this.client.on("ready", () => {
            this.logger.log(
                this.outageReported ? "Redis reconnected" : "Redis connect",
            );
            this.outageReported = false;
        });

        this.client.on("error", (error: Error) => {
            if (this.outageReported) return;
            this.outageReported = true;
            this.logger.error(
                `Redis unavailable, reconnecting: ${error.message}`,
            );
        });
    }

    async onModuleDestroy() {
        await this.client.quit().then(
            () => this.logger.log("Redis disconnect"),
            () => this.client.disconnect(),
        );
    }

    /** true — Redis ответил PONG за REDIS_HEALTH_TIMEOUT_MS */
    async ping(): Promise<boolean> {
        try {
            const result = await Promise.race([
                this.client.ping(),
                // ref: false — таймер не держит процесс живым при завершении
                setTimeout(REDIS_HEALTH_TIMEOUT_MS, null, { ref: false }),
            ]);
            return result === "PONG";
        } catch {
            return false;
        }
    }
}
