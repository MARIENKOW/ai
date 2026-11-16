/**
 * Статус задачи генерации для клиента.
 * Внутренние состояния BullMQ (prioritized, waiting-children) сводятся к waiting.
 */
export type GenerationJobStatus =
    | "waiting"
    | "active"
    | "delayed"
    | "completed"
    | "failed";

export interface GenerationJobDto {
    id: string;
    status: GenerationJobStatus;
    /** 0–100 */
    progress: number;
    /** Сколько попыток уже потрачено (включая текущую) */
    attemptsMade: number;
    error: string | null;
    createdAt: string;
    finishedAt: string | null;
}
