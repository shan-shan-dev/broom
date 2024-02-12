/// <reference types="vitest" />

import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { defineWorkspace } from "vitest/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @see {@link https://vitest.dev/guide/workspace} */

const config = defineWorkspace([
	// Binaries
	{
		extends: resolve(__dirname, "apps", "api", "vite.config.ts"),
		test: {
			setupFiles: resolve(__dirname, "apps", "api", "test", "setup.ts"),
			name: "@apps/api",
		},
	},
	{
		extends: resolve(__dirname, "apps", "client", "vite.config.ts"),
		test: {
			include: [resolve(__dirname, "apps", "client", "src", "**", "*.test.ts")],
			name: "@apps/client",
		},
	},
	{
		test: {
			include: [resolve(__dirname, "apps", "landing", "src", "**", "*.test.ts")],
			name: "@apps/landing",
		},
	},
	// Libraries
	{
		test: {
			include: [resolve(__dirname, "packages", "config", "src", "**", "*.test.ts")],
			name: "@packages/config",
		},
	},
	{
		test: {
			include: [resolve(__dirname, "packages", "core", "src", "**", "*.test.ts")],
			name: "@packages/core",
		},
	},
	{
		test: {
			include: [resolve(__dirname, "packages", "database", "src", "**", "*.test.ts")],
			name: "@packages/database",
		},
	},
	{
		test: {
			include: [resolve(__dirname, "packages", "logger", "src", "**", "*.test.ts")],
			name: "@packages/logger",
		},
	},
	{
		test: {
			include: [resolve(__dirname, "packages", "path", "src", "**", "*.test.ts")],
			name: "@packages/path",
		},
	},
	{
		test: {
			include: [resolve(__dirname, "packages", "unit", "src", "**", "*.test.ts")],
			name: "@packages/unit",
		},
	},
	{
		test: {
			include: [resolve(__dirname, "packages", "util", "src", "**", "*.test.ts")],
			name: "@packages/util",
		},
	},
]);

export default config;
