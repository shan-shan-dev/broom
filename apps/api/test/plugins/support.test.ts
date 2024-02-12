import fastify from "fastify";
import { describe, it } from "vitest";

import Support from "../../src/plugins/support.js";

describe("support", () => {
	it("support works standalone", async ({ expect }) => {
		const app = fastify();

		void app.register(Support);
		await app.ready();

		expect(app.someSupport()).toEqual("hugs");
	});
});
