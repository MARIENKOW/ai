import { Actor } from "@/modules/auth/auth.type";
import { Auth, CurrentActor } from "@/modules/auth/decorators/auth.decorator";
import { GenerationService } from "@/modules/generation/generation.service";
import { GenerationJobDto } from "@myorg/shared/dto";
import { FULL_PATH_ENDPOINT } from "@myorg/shared/endpoints";
import { Controller, Get, Param, ParseUUIDPipe, Post } from "@nestjs/common";

const { path } = FULL_PATH_ENDPOINT.generation;

@Controller(path)
export class GenerationController {
    constructor(private generation: GenerationService) {}

    @Post()
    @Auth("USER", "ADMIN")
    async create(@CurrentActor() actor: Actor): Promise<GenerationJobDto> {
        return this.generation.create(actor);
    }

    @Get(":id")
    @Auth("USER", "ADMIN")
    async get(
        @CurrentActor() actor: Actor,
        @Param("id", ParseUUIDPipe) id: string,
    ): Promise<GenerationJobDto> {
        return this.generation.get(actor, id);
    }
}
