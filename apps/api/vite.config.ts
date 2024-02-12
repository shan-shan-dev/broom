/// <reference types="vitest" />
/// <reference types="vite/client" />

import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, "src", "main.ts"),
			formats: ["es"],
		},
		outDir: resolve(__dirname, "bin"),
		target: ["esnext"],
	},

	plugins: [
		process.env.VITEST !== "true" &&
			VitePluginNode({
				adapter: "fastify",
				appPath: resolve(__dirname, "src", "main.ts"),
				appName: "api",
				initAppOnBoot: true,
				exportName: "API",
			}),
	],

	optimizeDeps: {
		include: ["find-up"],
	},

	test: {
		setupFiles: [resolve(__dirname, "test", "setup.ts")],
		server: {
			deps: {
				inline: ["@fastify/autoload"],
			},
		},
	},
});
