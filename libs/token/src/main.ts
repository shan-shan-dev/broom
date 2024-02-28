type Key = string;
type Val = unknown;

/**
 * A key-value pair used in theming and styling.
 * @see {@link https://css-tricks.com/what-are-design-tokens/}
 */
export interface DesignToken<K extends Key, V extends Val> {
	/**
	 * The unique key that identifies the design token.
	 */
	key: K;
	/**
	 * The value associated with the design token.
	 */
	value: V;

	/**
	 * CSS custom property
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties}
	 */
	cssCustomProperty: `--${K}`;

	/** @see {@link CSSDec} */
	cssDec: CSSDec<K, string>;

	/** @see {@link CSSVar} */
	cssVar: CSSVar<K>;

	/**
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString#overriding_tostring_for_custom_objects}
	 * @returns The key of the design token.
	 */
	toString: () => K;
	/**
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf#overriding_valueof_for_custom_objects}
	 * @returns The value of the design token.
	 */
	valueOf: () => V;
}

/**
 * CSS custom property declaration.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties#declaring_custom_properties}
 */
export type CSSDec<K extends Key, V extends number | string> = `--${K}:${V}`;

/**
 * The CSS `var()` function  _(reference to custom property)_ associated with the design token.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties#declaring_custom_properties}
 */
export type CSSVar<K extends Key> = `var(--${K})`;
