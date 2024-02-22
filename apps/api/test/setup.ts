import { loadConfig } from "@libs/config";
import type { FastifyInstance } from "fastify";
import { afterEach, beforeEach } from "vitest";

import { createServer } from "../src/server.js";

beforeEach(async (context) => {
	const config = await loadConfig();

	context.server = await createServer(config);

	context.server.ready();
});

afterEach(async (context) => {
	context.server.close();
});

declare module "vitest" {
	export interface TestContext {
		server: FastifyInstance;
	}
}
