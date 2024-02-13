import { describe, it } from "vitest";

describe("example", () => {
	it("example is loaded", async (context) => {
		const { server, expect } = context;
		const response = await server.inject({
			url: "/example",
		});

		expect(response.payload).toEqual("this is an example");
	});
});
