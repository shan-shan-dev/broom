import { describe, it } from "vitest";
import { util } from "./main";

describe("main", () => {
	it("works", ({ expect }) => {
		expect(() => util()).not.toThrowError();
	});
});
