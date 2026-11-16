/** Имена задач внутри очереди generation */
export const GENERATION_JOB = {
    GENERATE: "generate",
} as const;

/**
 * Сколько задач один процесс обрабатывает параллельно.
 * 1 — потому что генерация упирается в одну GPU: параллельные задачи
 * только толкаются за видеопамять. Масштабируем количеством воркеров, а не concurrency.
 */
export const GENERATION_CONCURRENCY = 1;

/** Временная заглушка вместо ComfyUI — сколько «генерируется» задача */
export const GENERATION_PLACEHOLDER_DURATION_MS = 2_000;
