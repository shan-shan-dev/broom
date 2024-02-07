/**
 * Snippets related to generating random values.
 *
 * @packageDocumentation
 */

import { getRandomValues } from "node:crypto";

export interface RandomNumberOptions {
	/** @defaultValue Number.MAX_SAFE_INTEGER */
	max?: number;
	/** @defaultValue Number.MIN_SAFE_INTEGER */
	min?: number;
}

/**
 * Get a random **integer** number from the specified range.
 * @param options - range options
 */
export function getRandomInteger(options: RandomNumberOptions = {}) {
	const { max = Number.MAX_SAFE_INTEGER, min = Number.MIN_SAFE_INTEGER } = options;

	const random = getSafeRandomNumber();
	return Math.floor(random * (max - min + 1) + min);
}

function getSafeRandomNumber() {
	const random = getRandomValues(new Uint32Array(1)).at(0) as number;
	/**
	 * NOTE: `0xff_ff_ff_ff` aka (`0xFFFFFFF`) - Uint32 max value represent in hexadecimal format
	 * NOTE:  `+1` - because Math.random is inclusive of 0, but not 1
	 * Ref: https://stackoverflow.com/a/62792582
	 */
	return random / (0xff_ff_ff_ff + 1);
}
