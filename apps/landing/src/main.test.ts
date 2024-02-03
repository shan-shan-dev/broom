import { describe, it } from "vitest";
import { landing } from "./main";

describe("main", () => {
	it("works", ({ expect }) => {
		expect(() => landing()).not.toThrowError();
	});
});
