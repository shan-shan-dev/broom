/// <reference types="vitest" />

import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { defineWorkspace } from "vitest/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/** @see {@link https://vitest.dev/guide/workspace} */

const config = defineWorkspace([
	// Apps
	{
		extends: resolve(__dirname, "apps", "api", "vitest.config.ts"),
		test: {
			include: [resolve(__dirname, "apps", "api", "src", "**", "*.test.ts")],
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
		extends: resolve(__dirname, "apps", "landing", "vitest.config.ts"),
		test: {
			include: [resolve(__dirname, "apps", "landing", "src", "**", "*.test.ts")],
			name: "@apps/landing",
		},
	},
	// Libraries
	{
		extends: resolve(__dirname, "packages", "config", "vitest.config.ts"),
		test: {
			include: [resolve(__dirname, "packages", "config", "src", "**", "*.test.ts")],
			name: "@packages/config",
		},
	},
	{
		extends: resolve(__dirname, "packages", "core", "vitest.config.ts"),
		test: {
			include: [resolve(__dirname, "packages", "core", "src", "**", "*.test.ts")],
			name: "@packages/core",
		},
	},
	{
		extends: resolve(__dirname, "packages", "database", "vitest.config.ts"),
		test: {
			include: [resolve(__dirname, "packages", "database", "src", "**", "*.test.ts")],
			name: "@packages/database",
		},
	},
	{
		extends: resolve(__dirname, "packages", "logger", "vitest.config.ts"),
		test: {
			include: [resolve(__dirname, "packages", "logger", "src", "**", "*.test.ts")],
			name: "@packages/logger",
		},
	},
	{
		extends: resolve(__dirname, "packages", "path", "vitest.config.ts"),
		test: {
			include: [resolve(__dirname, "packages", "path", "src", "**", "*.test.ts")],
			name: "@packages/path",
		},
	},
	{
		extends: resolve(__dirname, "packages", "i18n", "vitest.config.ts"),
		test: {
			include: [resolve(__dirname, "packages", "i18n", "src", "**", "*.test.ts")],
			name: "@packages/i18n",
		},
	},
	// {
	// 	extends: resolve(__dirname, "packages", "ui", "vitest.config.ts"),
	// 	test: {
	// 		include: [resolve(__dirname, "packages", "ui", "src", "**", "*.test.ts")],
	// 		name: "@packages/path",
	// 	},
	// },
	{
		extends: resolve(__dirname, "packages", "unit", "vitest.config.ts"),
		test: {
			include: [resolve(__dirname, "packages", "unit", "src", "**", "*.test.ts")],
			name: "@packages/unit",
		},
	},
	{
		extends: resolve(__dirname, "packages", "util", "vitest.config.ts"),
		test: {
			include: [resolve(__dirname, "packages", "util", "src", "**", "*.test.ts")],
			name: "@packages/util",
		},
	},
]);

export default config;
