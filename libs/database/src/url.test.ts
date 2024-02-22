import { loadConfig } from "@libs/config";
import { describe, test } from "vitest";

import { DB_PROTOCOL, getDatabaseURL } from "./url.js";

describe("getDatabaseURL(config)", async () => {
	const config = await loadConfig();

	test("building database URL from the project config works", ({ expect }) => {
		expect(() => getDatabaseURL(config)).not.toThrowError();
	});

	const url = getDatabaseURL(config);

	test(`url uses the chosen database engine protocol (${DB_PROTOCOL})`, ({ expect }) => {
		expect(url.protocol).toBe(`${DB_PROTOCOL}:`);
	});
});
