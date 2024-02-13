/// <reference types="vitest" />

import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { defineProject } from "vitest/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineProject({
	test: {
		setupFiles: resolve(__dirname, "test", "setup.ts"),
		server: {
			deps: {
				inline: ["@fastify/autoload"],
			},
		},
	},
});
