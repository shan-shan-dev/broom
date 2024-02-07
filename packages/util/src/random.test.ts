import { describe, it } from "vitest";

import { prettyJSON } from "./json.js";
import { getRandomInteger } from "./random.js";

describe("getRandomInteger(options?)", () => {
	it("returns integer without options", ({ expect }) => {
		const int = getRandomInteger();
		expect(int).toBeTypeOf("number");
		expect(Number.isInteger(int)).toBe(true);
	});

	it("every new generated integer number is NOT same as previous one", ({ expect }) => {
		let cached = 0;

		for (let index = 0; index < 1000; index++) {
			const int = getRandomInteger();

			expect(int).toBeTypeOf("number");
			expect(Number.isInteger(int)).toBe(true);
			expect(int).not.toEqual(cached);

			cached = int;
		}
	});

	const options = { min: 1, max: 10 } as const;

	it(`returns a random integer number in range with options - ${prettyJSON(options)}`, ({ expect }) => {
		for (let index = 0; index < 100; index++) {
			const int = getRandomInteger(options);

			expect(int).toBeGreaterThanOrEqual(options.min);
			expect(int).toBeLessThanOrEqual(options.max);
		}
	});
});
