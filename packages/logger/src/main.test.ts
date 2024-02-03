import { describe, it } from "vitest";
import { logger } from "./main";

describe("main", () => {
	it("works", ({ expect }) => {
		expect(() => logger()).not.toThrowError();
	});
});
