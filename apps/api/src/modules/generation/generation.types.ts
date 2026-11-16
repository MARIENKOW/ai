import { ActorType } from "@/modules/auth/auth.type";
import { GENERATION_JOB } from "@/modules/generation/generation.config";
import { Job, Queue } from "bullmq";

export type GenerationJobName =
    (typeof GENERATION_JOB)[keyof typeof GENERATION_JOB];

/** Данные задачи. Владелец нужен, чтобы чужой актор не мог читать статус по id */
export interface GenerationJobData {
    ownerType: ActorType;
    ownerId: string;
}

/** Результат задачи. Пока заглушка — заменится данными сгенерированного изображения */
export interface GenerationJobResult {
    placeholder: true;
}

export type GenerationJob = Job<
    GenerationJobData,
    GenerationJobResult,
    GenerationJobName
>;

export type GenerationQueue = Queue<
    GenerationJobData,
    GenerationJobResult,
    GenerationJobName
>;
