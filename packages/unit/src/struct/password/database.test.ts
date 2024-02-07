import { describe, it } from "vitest";
import { ZodError } from "zod";

import { DatabasePassword } from "./database.js";

describe("DatabasePassword", () => {
	describe("static new(value)", () => {
		it("throws error when value has invalid special characters", ({ expect }) => {
			for (const special of ["@", '"', "/"]) {
				const value = `randomPassword2024${special}`;

				expect(() => new DatabasePassword(value)).toThrowError(ZodError);
			}
		});

		it("success when value is valid", ({ expect }) => {
			expect(() => new DatabasePassword("ThisP4ssw0rdIsFine0k$")).not.toThrowError(ZodError);
		});
	});
});
