import { type Config } from "@libs/config";
import { log } from "@libs/logger";
import Fastify from "fastify";

import { createApp } from "./app.js";
import { handleClose } from "./hooks/on-close.js";
import { handleReady } from "./hooks/on-ready.js";

export interface APIServerConfig {
	closeGraceDelay: number;
	hostname: string;
	port: number;
	protocol: "http" | "https";
}

export async function createServer(config: Config) {
	const { API_CLOSE_GRACE_DELAY, API_HOSTNAME, API_PORT } = config;
	const app = createApp(config);
	const fastify = Fastify({
		logger: log as import("fastify/types/logger.js").PinoLoggerOptions,
	});

	fastify.config = {
		closeGraceDelay: API_CLOSE_GRACE_DELAY,
		hostname: API_HOSTNAME,
		port: API_PORT,
		// TODO: Setup secure HTTPS on localhost
		protocol: "http",
	};

	fastify.register(app);

	fastify.addHook("onClose", handleClose);
	fastify.addHook("onReady", handleReady);

	console.log("Fastify ready");

	return fastify;
}

/** Determine the API server URL based on the project config. */
export function getAPIServerURL(config: APIServerConfig): URL {
	const { hostname, port, protocol } = config;
	const url = new URL(`${protocol}://@${hostname}:${port}`);

	log.debug(`API server URL is: ${url}`);
	return url;
}

declare module "fastify" {
	interface FastifyInstance {
		config: APIServerConfig;
	}
}
