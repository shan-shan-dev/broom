import type { Entries } from "type-fest";

/**
 * Snippets related to using JavaScript [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object).
 * @packageDocumentation
 */

/**
 * Get the typed object keys.
 * @param object - object from whose you want to return it's keys as typed array.
 */
export function typedObjectKeys<T extends object>(object: T) {
	return Object.keys(object) as (keyof T)[];
}

/**
 * Get the typed object entries.
 * @param object - object from whose you want to return it's entries as typed array.
 */
export function typedObjectEntries<T extends object>(obj: T): Entries<T> {
	return Object.entries(obj) as Entries<T>;
}
