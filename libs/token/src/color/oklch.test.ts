import { describe, it } from "vitest";

import { Oklch } from "./oklch.js";

describe(Oklch.name, () => {
	const oklch = new Oklch({ l: 1, c: 2, h: 3, a: 1 });

	it("get `css` - returns correctly the CSS `oklch()` function", ({ expect }) => {
		const pattern = /^oklch\(\d+(\.\d+)?% \d+(\.\d+)?% \d+(\.\d+)?deg \/ \d+(\.\d+)?%\)$/;

		expect(oklch.css).toMatch(pattern);
	});
});
