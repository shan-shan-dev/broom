import { describe, it } from "vitest";
import { api } from "./main";

describe("main", () => {
	it("works", ({ expect }) => {
		expect(() => api()).not.toThrowError();
	});
});
