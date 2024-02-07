/**
 * Inspired from Rust,
 * it's called _"newtype"_ because it allows to create a new type that is distinct from its underlying type,
 * providing type safety or compatibility.
 */
export interface NewType<T> {
	/**
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString#overriding_tostring_for_custom_objects}
	 */
	toString: () => string;
	/**
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf#overriding_valueof_for_custom_objects}
	 */
	valueOf: () => T;
}
