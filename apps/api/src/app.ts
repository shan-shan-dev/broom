import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import AutoLoad from "@fastify/autoload";
import { type Config } from "@libs/config";
import type { FastifyPluginAsync } from "fastify";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export function createApp(config: Config): FastifyPluginAsync {
	return async (fastify, options) => {
		// TODO: Add custom code here...

		// WARN: Do not touch the following lines!

		// NOTE:
		// This loads all plugins defined in `./plugins/` directory,
		// those should be support plugins that are reused through the application
		void fastify.register(AutoLoad, {
			dir: join(__dirname, "plugins"),
			ignorePattern: /^.*(?:test|spec).ts$/,
			forceESM: true,
			options,
		});

		// NOTE:
		// This loads all plugins defined in `./routes/` directory
		void fastify.register(AutoLoad, {
			dir: join(__dirname, "routes"),
			ignorePattern: /.test.ts/,
			forceESM: true,
			options,
		});
	};
}
