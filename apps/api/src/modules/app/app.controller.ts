import { Controller, Get, ServiceUnavailableException } from "@nestjs/common";
import { Public } from "@/modules/auth/decorators/public.decorator";
import { RedisHealthService } from "@/infrastructure/queue/redis-health.service";

@Controller()
export class AppController {
    constructor(private readonly redis: RedisHealthService) {}

    /** Liveness: процесс жив. Использует healthcheck Docker — не зависит от Redis/БД */
    @Get("health")
    @Public()
    health() {
        return { status: "ok" };
    }

    /** Readiness очереди: 200 — Redis отвечает, 503 — нет. Для Uptime Kuma */
    @Get("health/redis")
    @Public()
    async redisHealth() {
        if (!(await this.redis.ping())) throw new ServiceUnavailableException();
        return { status: "ok" };
    }
}
