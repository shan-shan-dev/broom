import { typedObjectEntries } from "@libs/util/object";
import { describe, it } from "vitest";

import { FONT } from "./font.js";

describe("FontSize", () => {
	for (const [_size, instance] of typedObjectEntries(FONT.size)) {
		describe(instance.toString(), () => {
			it("get `clamp`- returns correctly the CSS clamp function", ({ expect }) => {
				const pattern = /^clamp\(\d+(\.\d+)?rem, \d+(\.\d+)?rem \+ \d+(\.\d+)?cqi, \d+(\.\d+)?rem\)$/;

				expect(instance.clamp).toMatch(pattern);
			});
			it("get `cssVarDef`- returns correctly the CSS variable definition", ({ expect }) => {
				expect(instance.cssVarDef.startsWith(`--${instance.key}`)).toBe(true);
				expect(instance.cssVarDef.endsWith(instance.clamp)).toBe(true);
			});

			it("get `cssVar` - returns correctly the CSS variable", ({ expect }) => {
				expect(instance.cssVar).toMatch(new RegExp(`var\\(--${instance.key}\\)`));
			});
		});
	}
});
