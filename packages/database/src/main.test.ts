import { describe, it } from "vitest";
import { database } from "./main";

describe("main", () => {
	it("works", ({ expect }) => {
		expect(() => database()).not.toThrowError();
	});
});
