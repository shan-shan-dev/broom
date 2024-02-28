import { describe, it } from "vitest";

import { FontSize } from "./font-size.js";

describe(FontSize.name, () => {
	const size = "xl";
	const fontSize = new FontSize(size, [18, 20]);

	it("get `key` - returns correctly the design token key", ({ expect }) => {
		expect(fontSize.key).toBe(`font-size-${size}`);
	});

	it("get `cssCustomProperty` - returns correctly the CSS custom property", ({ expect }) => {
		expect(fontSize.cssCustomProperty).toBe(`--font-size-${size}`);
	});

	it("get `clamp` - returns correctly the CSS function", ({ expect }) => {
		const pattern = /^clamp\(\d+(\.\d+)?rem, \d+(\.\d+)?rem \+ \d+(\.\d+)?cqi, \d+(\.\d+)?rem\)$/;

		expect(fontSize.clamp).toMatch(pattern);
	});

	it("get `cssDec` - returns correctly the CSS custom property declaration", ({ expect }) => {
		expect(fontSize.cssDec.startsWith(fontSize.cssCustomProperty)).toBe(true);
		expect(fontSize.cssDec.endsWith(fontSize.clamp)).toBe(true);
	});

	it("get `cssVar` - returns correctly the CSS variable", ({ expect }) => {
		expect(fontSize.cssVar).toMatch(new RegExp(`var\\(${fontSize.cssCustomProperty}\\)`));
	});
});
