import { describe, it } from "vitest";
import { ZodError } from "zod";

import { Name } from "./name.js";

describe("Name", () => {
	describe("new(string)", async () => {
		it("it fails on an empty string", ({ expect }) => {
			expect(() => new Name("")).to.throw(ZodError);
		});

		it("it success on a random name", ({ expect }) => {
			expect(() => new Name("random_name")).not.to.throw(ZodError);
		});
	});
});
