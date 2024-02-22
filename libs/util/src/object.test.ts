import { describe, expectTypeOf, test } from "vitest";

import { typedObjectKeys } from "./object.js";

describe("typedObjectKeys(object)", () => {
	test("returns an array of object keys and matches the expected type", ({ expect }) => {
		const input = {
			key1: 1337,
			key2: 2023,
		} as const;

		expect(typedObjectKeys(input)).toEqual(Object.keys(input));
		expectTypeOf(typedObjectKeys(input)).toEqualTypeOf<Array<"key1" | "key2">>();
	});
});
