import { describe, it } from "vitest";
import { unit } from "./main";

describe("main", () => {
	it("works", ({ expect }) => {
		expect(() => unit()).not.toThrowError();
	});
});
