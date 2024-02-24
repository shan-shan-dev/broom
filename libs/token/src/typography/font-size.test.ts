import { describe, it } from "vitest";

import {
	FontSize2XL,
	FontSize3XL,
	FontSize4XL,
	FontSize5XL,
	FontSizeL,
	FontSizeM,
	FontSizeS,
	FontSizeXL,
} from "./font-size.js";

describe("FontSize", () => {
	for (const size of [
		FontSize5XL,
		FontSize4XL,
		FontSize3XL,
		FontSize2XL,
		FontSizeXL,
		FontSizeL,
		FontSizeM,
		FontSizeS,
	]) {
		describe(size.toString(), () => {
			it("get `clamp`- returns correctly the CSS clamp function", ({ expect }) => {
				const pattern = /^clamp\(\d+(\.\d+)?rem, \d+(\.\d+)?rem \+ \d+(\.\d+)?cqi, \d+(\.\d+)?rem\)$/;

				expect(size.clamp).toMatch(pattern);
			});
			it("get `cssVarDef`- returns correctly the CSS variable definition", ({ expect }) => {
				expect(size.cssVarDef.startsWith(`--${size.key}`)).toBe(true);
				expect(size.cssVarDef.endsWith(size.clamp)).toBe(true);
			});

			it("get `cssVar` - returns correctly the CSS variable", ({ expect }) => {
				expect(size.cssVar).toMatch(new RegExp(`var\\(--${size.key}\\)`));
			});
		});
	}
});
