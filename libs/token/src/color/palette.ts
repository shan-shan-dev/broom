import type { CSSDec, CSSVar, DesignToken } from "../main.js";
import { Oklch, type OklchData } from "./oklch.js";

export type ColorName = (typeof Color.NAMES)[number];
export type ColorSwatch = (typeof Color.SWATCHES)[number];
export type ColorKey<N extends ColorName, S extends ColorSwatch> = `${N}-${S}`;
type PrefixedKey<N extends ColorName, S extends ColorSwatch> = `color-${ColorKey<N, S>}`;

/**
 * Design token key instance dedicated to the individual color swatch from palette.
 * NOTE: **In our project, we use `oklch` color model**.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value}
 */
export class Color<
	N extends ColorName,
	S extends ColorSwatch,
	L extends number,
	C extends number,
	H extends number,
	A extends number,
> implements DesignToken<PrefixedKey<N, S>, Oklch<L, C, H, A>>
{
	/**
	 * Enum of available color names.
	 */
	public static NAMES = ["primary", "secondary", "info", "success", "warning", "error", "surface"] as const;
	/**
	 * Enum of available color swatches.
	 */
	public static SWATCHES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

	/**
	 * Name of the color.
	 */
	public name: N;
	/**
	 * Name of the color swatch.
	 */
	public swatch: S;
	/**
	 * Color value represented in **oklch** color model.
	 */
	public value: Oklch<L, C, H, A>;

	constructor(name: N, swatch: S, value: OklchData<L, C, H, A>) {
		this.name = name;
		this.swatch = swatch;
		this.value = new Oklch(value);
	}

	public get key(): PrefixedKey<N, S> {
		return `color-${this.name}-${this.swatch}`;
	}

	public get cssCustomProperty() {
		return `--${this.key}` as const;
	}

	public get cssVar(): CSSVar<PrefixedKey<N, S>> {
		return `var(${this.cssCustomProperty})`;
	}

	public get cssDec(): CSSDec<PrefixedKey<N, S>, Oklch<L, C, H, A>["css"]> {
		return `${this.cssCustomProperty}:${this.value.css}`;
	}

	public toString() {
		return this.key;
	}

	public valueOf() {
		return this.value;
	}
}

/**
 * Design tokens related to color palette scope.
 */
export const COLOR = {
	/**
	 * @see {@link https://www.figma.com/file/ytEIsjZoaeRlY4f6IxxEps/Broom?type=design&node-id=538-21&mode=design&t=N2wwFF2gK4WZBqKP-11}
	 */
	primary: {
		50: new Color("primary", 50, { l: 95, c: 6.75, h: 69.3, a: 100 }),
		100: new Color("primary", 100, { l: 94, c: 9, h: 70, a: 100 }),
		200: new Color("primary", 200, { l: 92, c: 11.25, h: 69.4, a: 100 }),
		300: new Color("primary", 300, { l: 88, c: 18.25, h: 69.3, a: 100 }),
		400: new Color("primary", 400, { l: 79, c: 30.75, h: 66.2, a: 100 }),
		500: new Color("primary", 500, { l: 71, c: 40.25, h: 59.7, a: 100 }),
		600: new Color("primary", 600, { l: 66, c: 37.25, h: 60, a: 100 }),
		700: new Color("primary", 700, { l: 58, c: 32.25, h: 60.3, a: 100 }),
		800: new Color("primary", 800, { l: 49, c: 27, h: 60.6, a: 100 }),
		900: new Color("primary", 900, { l: 43, c: 23, h: 61.5, a: 100 }),
	},

	/**
	 * @see {@link https://www.figma.com/file/ytEIsjZoaeRlY4f6IxxEps/Broom?type=design&node-id=539-52&mode=design&t=N2wwFF2gK4WZBqKP-11}
	 */
	secondary: {
		50: new Color("secondary", 50, { l: 97, c: 3, h: 157, a: 100 }),
		100: new Color("secondary", 100, { l: 96, c: 4, h: 154.5, a: 100 }),
		200: new Color("secondary", 200, { l: 95, c: 5, h: 154.9, a: 100 }),
		300: new Color("secondary", 300, { l: 92, c: 8, h: 154.1, a: 100 }),
		400: new Color("secondary", 400, { l: 86, c: 14.25, h: 152.9, a: 100 }),
		500: new Color("secondary", 500, { l: 80, c: 20.25, h: 152.2, a: 100 }),
		600: new Color("secondary", 600, { l: 74, c: 18.25, h: 152.6, a: 100 }),
		700: new Color("secondary", 700, { l: 65, c: 16.25, h: 152.4, a: 100 }),
		800: new Color("secondary", 800, { l: 55, c: 13.5, h: 151.8, a: 100 }),
		900: new Color("secondary", 900, { l: 48, c: 11.25, h: 152.5, a: 100 }),
	},

	/**
	 * @see {@link https://www.figma.com/file/ytEIsjZoaeRlY4f6IxxEps/Broom?type=design&node-id=539-87&mode=design&t=N2wwFF2gK4WZBqKP-11}
	 */
	info: {
		50: new Color("info", 50, { l: 95, c: 7, h: 210.5, a: 100 }),
		100: new Color("info", 100, { l: 93, c: 9.25, h: 209.1, a: 100 }),
		200: new Color("info", 200, { l: 92, c: 11.5, h: 208.2, a: 100 }),
		300: new Color("info", 300, { l: 87, c: 18, h: 209.2, a: 100 }),
		400: new Color("info", 400, { l: 78, c: 27.75, h: 210.8, a: 100 }),
		500: new Color("info", 500, { l: 71, c: 31.5, h: 215.2, a: 100 }),
		600: new Color("info", 600, { l: 66, c: 29, h: 215.1, a: 100 }),
		700: new Color("info", 700, { l: 58, c: 25.25, h: 214.4, a: 100 }),
		800: new Color("info", 800, { l: 49, c: 21.5, h: 214.5, a: 100 }),
		900: new Color("info", 900, { l: 43, c: 18.5, h: 214.4, a: 100 }),
	},

	/**
	 * @see {@link https://www.figma.com/file/ytEIsjZoaeRlY4f6IxxEps/Broom?type=design&node-id=539-151&mode=design&t=N2wwFF2gK4WZBqKP-11}
	 */
	success: {
		50: new Color("success", 50, { l: 96, c: 6, h: 133.5, a: 100 }),
		100: new Color("success", 100, { l: 95, c: 8.25, h: 133.5, a: 100 }),
		200: new Color("success", 200, { l: 94, c: 10.25, h: 133.1, a: 100 }),
		300: new Color("success", 300, { l: 91, c: 16.5, h: 134.2, a: 100 }),
		400: new Color("success", 400, { l: 84, c: 28.75, h: 135.1, a: 100 }),
		500: new Color("success", 500, { l: 77, c: 40.25, h: 135.7, a: 100 }),
		600: new Color("success", 600, { l: 71, c: 37, h: 135.8, a: 100 }),
		700: new Color("success", 700, { l: 62, c: 31.75, h: 135.7, a: 100 }),
		800: new Color("success", 800, { l: 53, c: 26.75, h: 135.8, a: 100 }),
		900: new Color("success", 900, { l: 46, c: 22.25, h: 135.4, a: 100 }),
	},

	/**
	 * @see {@link https://www.figma.com/file/ytEIsjZoaeRlY4f6IxxEps/Broom?type=design&node-id=539-184&mode=design&t=N2wwFF2gK4WZBqKP-11}
	 */
	warning: {
		50: new Color("warning", 50, { l: 97, c: 7.5, h: 85.6, a: 100 }),
		100: new Color("warning", 100, { l: 97, c: 9.75, h: 83.8, a: 100 }),
		200: new Color("warning", 200, { l: 94, c: 12.25, h: 83.4, a: 100 }),
		300: new Color("warning", 300, { l: 91, c: 19.25, h: 84, a: 100 }),
		400: new Color("warning", 400, { l: 85, c: 31.75, h: 82.4, a: 100 }),
		500: new Color("warning", 500, { l: 79, c: 39.25, h: 77.6, a: 100 }),
		600: new Color("warning", 600, { l: 73, c: 36.25, h: 77.7, a: 100 }),
		700: new Color("warning", 700, { l: 64, c: 31.25, h: 77.8, a: 100 }),
		800: new Color("warning", 800, { l: 54, c: 26.5, h: 78.3, a: 100 }),
		900: new Color("warning", 900, { l: 47, c: 22.75, h: 78.2, a: 100 }),
	},

	/**
	 * @see {@link https://www.figma.com/file/ytEIsjZoaeRlY4f6IxxEps/Broom?type=design&node-id=539-184&mode=design&t=N2wwFF2gK4WZBqKP-11}
	 */
	error: {
		50: new Color("error", 50, { l: 95, c: 3.5, h: 22.8, a: 100 }),
		100: new Color("error", 100, { l: 94, c: 5, h: 21.4, a: 100 }),
		200: new Color("error", 200, { l: 92, c: 6, h: 23.9, a: 100 }),
		300: new Color("error", 300, { l: 87, c: 10, h: 21.8, a: 100 }),
		400: new Color("error", 400, { l: 78, c: 18.25, h: 23.1, a: 100 }),
		500: new Color("error", 500, { l: 69, c: 27.25, h: 24.5, a: 100 }),
		600: new Color("error", 600, { l: 63, c: 25.25, h: 24.2, a: 100 }),
		700: new Color("error", 700, { l: 56, c: 21.5, h: 24.9, a: 100 }),
		800: new Color("error", 800, { l: 48, c: 17.75, h: 24.8, a: 100 }),
		900: new Color("error", 900, { l: 41, c: 15, h: 24.4, a: 100 }),
	},

	/**
	 * @see {@link https://www.figma.com/file/ytEIsjZoaeRlY4f6IxxEps/Broom?type=design&node-id=539-219&mode=design&t=N2wwFF2gK4WZBqKP-11}
	 */
	surface: {
		50: new Color("surface", 50, { l: 91, c: 0.5, h: 67.8, a: 100 }),
		100: new Color("surface", 100, { l: 88, c: 0.75, h: 48.7, a: 100 }),
		200: new Color("surface", 200, { l: 85, c: 0.75, h: 48.7, a: 100 }),
		300: new Color("surface", 300, { l: 76, c: 1, h: 56.4, a: 100 }),
		400: new Color("surface", 400, { l: 56, c: 0.25, h: 56.2, a: 100 }),
		500: new Color("surface", 500, { l: 34, c: 0.375, h: 59.1, a: 100 }),
		600: new Color("surface", 600, { l: 32, c: 0.35, h: 62.9, a: 100 }),
		700: new Color("surface", 700, { l: 29, c: 0.275, h: 55.9, a: 100 }),
		800: new Color("surface", 800, { l: 25, c: 0.275, h: 61, a: 100 }),
		900: new Color("surface", 900, { l: 23, c: 0.2, h: 59.2, a: 100 }),
	},
} as const;
