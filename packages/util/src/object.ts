/**
 * Snippets related to using JavaScript [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object).
 *
 * @packageDocumentation
 */

/**
 * Get the typed object keys.
 * @param object - object from whose you want to return it's keys as typed array.
 */
export function typedObjectKeys<T extends object>(object: T) {
	return Object.keys(object) as (keyof T)[];
}
