import { describe, it } from "vitest";
import { path } from "./main";

describe("main", () => {
	it("works", ({ expect }) => {
		expect(() => path()).not.toThrowError();
	});
});
