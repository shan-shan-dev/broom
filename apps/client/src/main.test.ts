import { describe, it } from "vitest";
import { client } from "./main";

describe("main", () => {
	it("works", ({ expect }) => {
		expect(() => client()).not.toThrowError();
	});
});
