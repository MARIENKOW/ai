import { DefaultJobOptions } from "bullmq";

/** Имена очередей — единственный источник правды. Используются в registerQueue / @Processor / @InjectQueue */
export const QUEUE = {
    GENERATION: "generation",
} as const;

export type QueueName = (typeof QUEUE)[keyof typeof QUEUE];

/**
 * Опции задач по умолчанию для всех очередей.
 * Очередь может переопределить их в registerQueue, задача — при add().
 *
 * attempts / backoff  — 3 попытки с экспоненциальной паузой 5с → 10с → 20с.
 * removeOnComplete    — держим успешные задачи сутки (не больше 1000),
 *                       чтобы клиент успел забрать статус, а Redis не рос бесконечно.
 * removeOnFail        — упавшие держим неделю: нужны для разбора ошибок.
 */
export const DEFAULT_JOB_OPTIONS: DefaultJobOptions = {
    attempts: 3,
    backoff: { type: "exponential", delay: 5_000 },
    removeOnComplete: { age: 24 * 60 * 60, count: 1_000 },
    removeOnFail: { age: 7 * 24 * 60 * 60 },
};

// ── Redis connection ─────────────────────────────────────────────────

/**
 * Переподключение к Redis: пауза растёт на шаг с каждой попыткой, но не больше максимума.
 * 500 мс → 1 с → 1.5 с … → 10 с. Не долбим упавший Redis и не забиваем лог.
 */
export const REDIS_RETRY_STEP_MS = 500;
export const REDIS_RETRY_MAX_DELAY_MS = 10_000;

/** Сколько ждём ответа на PING в health-check, прежде чем считать Redis недоступным */
export const REDIS_HEALTH_TIMEOUT_MS = 2_000;

/** Сетевые коды ошибок, которые означают «нет соединения с Redis», а не ошибку в задаче */
export const REDIS_CONNECTION_ERROR_CODES: ReadonlySet<string> = new Set([
    "ECONNREFUSED",
    "ECONNRESET",
    "ETIMEDOUT",
    "ENOTFOUND",
    "EAI_AGAIN",
    "EHOSTUNREACH",
    "EPIPE",
]);
