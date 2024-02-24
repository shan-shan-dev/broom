/**
 * The unique key that identifies the design token.
 */
export type DesignTokenKey = string;

/**
 * The value associated with the design token.
 */
export type DesignTokenVal = number | string;

/**
 * The CSS `var()` function  _(reference to custom property)_ associated with the design token.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties#referencing_custom_properties_with_var}
 */
export type CSSVarDef = `--${DesignTokenKey}:${DesignTokenVal}`;

/**
 * The CSS custom property definition _(custom property)_ associated with the design token.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties#declaring_custom_properties}
 */
export type CSSVar = `var(--${DesignTokenKey})`;

/**
 * Interface for a Design Token, representing a key-value pair used in theming and styling.
 */
export interface DesignToken<K extends string, V> {
	/** @see {@link DesignTokenKey} */
	key: K;
	/** @see {@link DesignTokenVal} */
	value: V;
	/** @see {@link CssVarDef} */
	cssVarDef: CSSVarDef;
	/** @see {@link CssVar} */
	cssVar: CSSVar;

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
