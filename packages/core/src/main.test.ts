import { describe, it } from "vitest";
import { core } from "./main";

describe("main", () => {
	it("works", ({ expect }) => {
		expect(() => core()).not.toThrowError();
	});
});
