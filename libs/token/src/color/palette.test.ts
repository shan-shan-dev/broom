import { describe, it } from "vitest";

import { Color } from "./palette.js";

describe(Color.name, () => {
	const name = "primary";
	const swatch = 500;
	const color = new Color(name, swatch, { l: 1, c: 2, h: 3, a: 1 });

	it("get `key` - returns correctly the design token key", ({ expect }) => {
		expect(color.key).toBe(`color-${name}-${swatch}`);
	});

	it("get `cssCustomProperty` - returns correctly the CSS custom property", ({ expect }) => {
		expect(color.cssCustomProperty).toBe(`--color-${name}-${swatch}`);
	});

	it("get `oklch` - returns correctly the CSS `oklch()` function", ({ expect }) => {
		const pattern = /^oklch\(\d+(\.\d+)?% \d+(\.\d+)?% \d+(\.\d+)?deg \/ \d+(\.\d+)?%\)$/;

		expect(color.value.css).toMatch(pattern);
	});

	it("get `cssVar` - returns correctly the CSS variable", ({ expect }) => {
		expect(color.cssVar).toMatch(new RegExp(`var\\(${color.cssCustomProperty}\\)`));
	});

	it("get `cssDec` - returns correctly the CSS custom property declaration", ({ expect }) => {
		expect(color.cssDec.startsWith(color.cssCustomProperty)).toBe(true);
		expect(color.cssDec.endsWith(color.value.css)).toBe(true);
	});
});
