import { describe, it } from "vitest";

import { FontMono, FontSans, FontSerif } from "./font-family.js";

describe("FontFamily", () => {
	for (const family of [FontMono, FontSans, FontSerif]) {
		describe(family.toString(), () => {
			it("get `cssVarDef`- returns correctly the CSS variable definition", ({ expect }) => {
				const pattern = new RegExp(`${family.key}:${family.value}`);
				expect(family.cssVarDef).toMatch(pattern);
			});

			it("get `cssVar` - returns correctly the CSS variable", ({ expect }) => {
				expect(family.cssVar).toMatch(new RegExp(`var\\(--${family.key}\\)`));
			});
		});
	}
});
