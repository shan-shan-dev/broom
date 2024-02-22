import { LOG_LEVELS } from "@libs/logger";
import { describe, test } from "vitest";

import { Name } from "@libs/unit/struct/name";
import { DatabasePassword } from "@libs/unit/struct/password/database";
import { ENVIRONMENTS } from "./environment.js";
import { loadConfig } from "./main.js";

describe("loadConfig()", async () => {
	test("it succeed when the project workspace is set up correctly", async ({ expect }) => {
		expect(async () => await loadConfig()).not.toThrow();
	});

	const config = await loadConfig();

	describe("general:", async () => {
		test("- 'DEBUG' is boolean", ({ expect }) => {
			expect(config.DEBUG).toBeTypeOf("boolean");
		});

		test(`- 'NODE_ENV' is string from enum: [${ENVIRONMENTS}]`, ({ expect }) => {
			const env = config.NODE_ENV;

			expect(env).toBeTypeOf("string");
			expect(ENVIRONMENTS).toContain(env);
		});

		test(`- 'LOG' is string from enum: [${LOG_LEVELS}]`, ({ expect }) => {
			const level = config.LOG;

			expect(level).toBeTypeOf("string");
			expect(LOG_LEVELS).toContain(level);
		});
	});

	describe("API:", () => {
		const { API_CLOSE_GRACE_DELAY, API_HOSTNAME, API_PORT } = config;

		test("- 'API_CLOSE_GRACE_DELAY' is number", ({ expect }) => {
			expect(API_CLOSE_GRACE_DELAY).toBeTypeOf("number");
		});

		test("- 'API_PORT' is a number from allowed range", ({ expect }) => {
			expect(API_PORT).toBeTypeOf("number");
		});

		test("- 'API_HOSTNAME' is string", ({ expect }) => {
			expect(API_HOSTNAME).toBeTypeOf("string");
		});
	});

	describe("database:", () => {
		const { DB_USER, DB_PASSWORD, DB_HOSTNAME, DB_PORT, DB_NAME } = config;

		test("- 'DB_USER' is Name", ({ expect }) => {
			expect(DB_USER).toBeInstanceOf(Name);
		});

		test("- 'DB_PASSWORD' is Password", ({ expect }) => {
			expect(DB_PASSWORD).toBeInstanceOf(DatabasePassword);
		});

		test("- 'DB_HOSTNAME' is string", ({ expect }) => {
			expect(DB_HOSTNAME).toBeTypeOf("string");
		});

		test("- 'DB_PORT' is number", ({ expect }) => {
			expect(DB_PORT).toBeTypeOf("number");
		});

		test("- 'DB_NAME' is Name", ({ expect }) => {
			expect(DB_NAME).toBeInstanceOf(Name);
		});
	});
});
