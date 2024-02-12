import { type Config } from "@packages/config";
import { log } from "@packages/logger";
import Fastify from "fastify";

import { createApp } from "./app.js";

export interface APIServerConfig {
	port: number;
	closeWithGraceDelay: number;
}

export async function createServer(config: Config) {
	const fastify = Fastify({
		logger: log as import("fastify/types/logger.js").PinoLoggerOptions,
	});
	const app = createApp(config);

	fastify.config = {
		closeWithGraceDelay: config.API_CLOSE_GRACE_DELAY,
		port: config.API_PORT,
	};

	fastify.register(app);

	return fastify;
}

declare module "fastify" {
	interface FastifyInstance {
		config: APIServerConfig;
	}
}
