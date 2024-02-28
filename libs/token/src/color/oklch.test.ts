import { describe, it } from "vitest";

import { Oklch, OklchValue } from "./oklch.js";

describe(OklchValue.name, () => {
	const value = 10;
	const unit = "%";
	const oklchValue = new OklchValue(value, unit);

	it("get `css` - returns correctly the string representation for CSS with unit", ({ expect }) => {
		expect(oklchValue.css).toBe(`${value}${unit}`);
	});
});

describe(Oklch.name, () => {
	const oklch = new Oklch({ l: 1, c: 2, h: 3, a: 1 });

	it("get `css` - returns correctly the CSS `oklch()` function", ({ expect }) => {
		const pattern = /^oklch\(\d+(\.\d+)?% \d+(\.\d+)?% \d+(\.\d+)?deg \/ \d+(\.\d+)?%\)$/;

		expect(oklch.css).toMatch(pattern);
	});
});
