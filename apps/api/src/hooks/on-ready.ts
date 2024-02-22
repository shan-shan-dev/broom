import { log } from "@libs/logger";
import type { onReadyAsyncHookHandler } from "fastify";

export const handleReady: onReadyAsyncHookHandler = async function ready() {
	log.info("API server app is ready");
	// TODO: Add actions when server app is ready
};
