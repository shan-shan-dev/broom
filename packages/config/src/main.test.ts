import { describe, it } from "vitest";
import { config } from "./main";

describe("main", () => {
	it("works", ({ expect }) => {
		expect(() => config()).not.toThrowError();
	});
});
