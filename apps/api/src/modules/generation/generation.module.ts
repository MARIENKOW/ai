import { QUEUE } from "@/infrastructure/queue/queue.config";
import { GenerationController } from "@/modules/generation/generation.controller";
import { GenerationProcessor } from "@/modules/generation/generation.processor";
import { GenerationService } from "@/modules/generation/generation.service";
import { BullModule } from "@nestjs/bullmq";
import { Module } from "@nestjs/common";

@Module({
    imports: [BullModule.registerQueue({ name: QUEUE.GENERATION })],
    providers: [GenerationService, GenerationProcessor],
    controllers: [GenerationController],
})
export class GenerationModule {}
