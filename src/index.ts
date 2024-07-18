import cors from "@elysiajs/cors";
import { Elysia } from "elysia";
import { healthService } from "./services/health";
import { logService } from "./services/logs";

const app = new Elysia()
  .use(cors())
  .get("/v1/api", () => "Welcome to Monibot API!")
  .get("/v1/health", async () => healthService.check())
  .get("/v1/logs", async ({ query }) => logService.findAll(query))
  .get("/v1/logs/:id", async ({ params: { id }, query }) => logService.findByHostOrId(id, query))
  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
