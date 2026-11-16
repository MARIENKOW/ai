import { env } from "@/config";
import {
    REDIS_CONNECTION_ERROR_CODES,
    REDIS_RETRY_MAX_DELAY_MS,
    REDIS_RETRY_STEP_MS,
} from "@/infrastructure/queue/queue.config";
// Тип из BullMQ, а не из ioredis: bullmq 6 описывает подключение своим интерфейсом,
// и RedisOptions из ioredis ему не присваивается. Объект при этом подходит обоим.
import { RedisOptions } from "bullmq";

/** Единые параметры подключения к Redis — для BullMQ и для health-check */
export const redisConnectionOptions = (): RedisOptions => ({
    host: env.REDIS_HOST,
    port: env.REDIS_PORT,
    password: env.REDIS_PASSWORD,
    retryStrategy: (times) =>
        Math.min(times * REDIS_RETRY_STEP_MS, REDIS_RETRY_MAX_DELAY_MS),
});

/**
 * Ошибка соединения с Redis (сеть / авторизация), а не ошибка обработки задачи.
 * Такие ошибки один раз логирует RedisHealthService, остальным слушателям их дублировать не нужно.
 */
export const isRedisConnectionError = (error: Error): boolean => {
    const { code } = error as NodeJS.ErrnoException;
    if (code && REDIS_CONNECTION_ERROR_CODES.has(code)) return true;
    return /WRONGPASS|NOAUTH|Connection is closed/.test(error.message);
};
