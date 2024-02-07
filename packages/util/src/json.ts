/**
 * Snippets related to using [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON).
 *
 * @packageDocumentation
 */

/**
 * Print JSON data with an indentation for better readability.
 * @param data - a valid JSON-compatible data.
 */
export function prettyJSON(data: unknown) {
	if (data === undefined) {
		throw new TypeError("Data must be a valid JSON syntax.");
	}

	return JSON.stringify(data, undefined, 2);
}
