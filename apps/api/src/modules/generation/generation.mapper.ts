import { GenerationJob } from "@/modules/generation/generation.types";
import { GenerationJobDto, GenerationJobStatus } from "@myorg/shared/dto";
import { JobState } from "bullmq";

const STATUS_MAP: Record<JobState | "unknown", GenerationJobStatus> = {
    waiting: "waiting",
    prioritized: "waiting",
    "waiting-children": "waiting",
    delayed: "delayed",
    active: "active",
    completed: "completed",
    failed: "failed",
    // unknown — задача уже удалена из Redis между getJob и getState
    unknown: "failed",
};

export const mapGenerationJob = (
    job: GenerationJob,
    state: JobState | "unknown",
): GenerationJobDto => ({
    id: job.id!,
    status: STATUS_MAP[state],
    progress: typeof job.progress === "number" ? job.progress : 0,
    attemptsMade: job.attemptsMade,
    error: state === "failed" ? job.failedReason || null : null,
    createdAt: new Date(job.timestamp).toISOString(),
    finishedAt: job.finishedOn ? new Date(job.finishedOn).toISOString() : null,
});
