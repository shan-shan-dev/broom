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
		extends: resolve(__dirname, "libs", "config", "vitest.config.ts"),
		test: {
			include: [resolve(__dirname, "libs", "config", "src", "**", "*.test.ts")],
			name: "@libs/config",
		},
	},
	{
		extends: resolve(__dirname, "libs", "core", "vitest.config.ts"),
		test: {
			include: [resolve(__dirname, "libs", "core", "src", "**", "*.test.ts")],
			name: "@libs/core",
		},
	},
	{
		extends: resolve(__dirname, "libs", "database", "vitest.config.ts"),
		test: {
			include: [resolve(__dirname, "libs", "database", "src", "**", "*.test.ts")],
			name: "@libs/database",
		},
	},
	{
		extends: resolve(__dirname, "libs", "logger", "vitest.config.ts"),
		test: {
			include: [resolve(__dirname, "libs", "logger", "src", "**", "*.test.ts")],
			name: "@libs/logger",
		},
	},
	{
		extends: resolve(__dirname, "libs", "i18n", "vitest.config.ts"),
		test: {
			include: [resolve(__dirname, "libs", "i18n", "src", "**", "*.test.ts")],
			name: "@libs/i18n",
		},
	},
	{
		extends: resolve(__dirname, "libs", "path", "vitest.config.ts"),
		test: {
			include: [resolve(__dirname, "libs", "path", "src", "**", "*.test.ts")],
			name: "@libs/path",
		},
	},
	{
		extends: resolve(__dirname, "libs", "token", "vitest.config.ts"),
		test: {
			include: [resolve(__dirname, "libs", "token", "src", "**", "*.test.ts")],
			name: "@libs/token",
		},
	},
	{
		extends: resolve(__dirname, "libs", "ui", "vitest.config.ts"),
		test: {
			include: [resolve(__dirname, "libs", "ui", "src", "**", "*.test.ts")],
			name: "@libs/ui",
		},
	},
	{
		extends: resolve(__dirname, "libs", "unit", "vitest.config.ts"),
		test: {
			include: [resolve(__dirname, "libs", "unit", "src", "**", "*.test.ts")],
			name: "@libs/unit",
		},
	},
	{
		extends: resolve(__dirname, "libs", "util", "vitest.config.ts"),
		test: {
			include: [resolve(__dirname, "libs", "util", "src", "**", "*.test.ts")],
			name: "@libs/util",
		},
	},
]);

export default config;
