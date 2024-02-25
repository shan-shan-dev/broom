import type { ObjectEntries } from "type-fest/source/entries.js";
import { describe, expectTypeOf, test } from "vitest";

import { typedObjectEntries, typedObjectKeys } from "./object.js";

describe(`${typedObjectKeys.name}(object)`, () => {
	test("returns an array of object keys and matches the expected type", ({ expect }) => {
		const input = {
			key1: 1337,
			key2: 2023,
		} as const;

		expect(typedObjectKeys(input)).toEqual(Object.keys(input));
		expectTypeOf(typedObjectKeys(input)).toEqualTypeOf<Array<"key1" | "key2">>();
	});
});

describe(`${typedObjectEntries.name}(object)`, () => {
	test("returns an array of object entries and matches the expected type", ({ expect }) => {
		const input = {
			key1: 1337,
			key2: 2023,
		} as const;

		expect(typedObjectEntries(input)).toEqual(Object.entries(input));
		expectTypeOf(typedObjectEntries(input)).toEqualTypeOf<ObjectEntries<typeof input>>();
	});
});
