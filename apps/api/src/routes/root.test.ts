import { describe, it } from "vitest";

describe("", () => {
	it("default root route", async (context) => {
		const { server, expect } = context;
		const response = await server.inject({
			url: "/",
		});

		expect(JSON.parse(response.payload)).toStrictEqual({ root: true });
	});
});
