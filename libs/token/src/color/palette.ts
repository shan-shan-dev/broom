import type { CSSVar, CSSVarDef, DesignToken } from "../main.js";
import { Oklch, type OklchData } from "./oklch.js";

export type ColorName = (typeof Color.NAMES)[number];
export type ColorSchade = (typeof Color.SCHADES)[number];
export type ColorKey<N extends ColorName, S extends ColorSchade> = `${N}-${S}`;

export class Color<
	N extends ColorName,
	S extends ColorSchade,
	L extends number,
	C extends number,
	H extends number,
	A extends number,
> implements DesignToken<ColorKey<N, S>, Oklch<L, C, H, A>>
{
	public static NAMES = ["primary", "secondary", "info", "success", "warning", "error", "surface"] as const;
	public static SCHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

	public key: ColorKey<N, S>;
	public value: Oklch<L, C, H, A>;

	constructor(name: N, shade: S, value: OklchData<L, C, H, A>) {
		this.key = `${name}-${shade}`;
		this.value = new Oklch(value);
	}

	public get cssCustomProperty() {
		return `--${this.key}` as const;
	}

	public get cssVar(): CSSVar<ColorKey<N, S>> {
		return `var(${this.cssCustomProperty})`;
	}

	public get cssVarDef(): CSSVarDef<ColorKey<N, S>, Oklch<L, C, H, A>["css"]> {
		return `${this.cssCustomProperty}:${this.value.css}`;
	}

	public toString() {
		return this.key;
	}

	public valueOf() {
		return this.value;
	}
}

export const COLOR = {
	/**
	 * @see {@link https://www.figma.com/file/ytEIsjZoaeRlY4f6IxxEps/Broom?type=design&node-id=538-21&mode=design&t=N2wwFF2gK4WZBqKP-11}
	 */
	primary: {
		50: new Color("primary", 50, { l: 95, c: 2.7, h: 69.3, a: 100 }),
		100: new Color("primary", 100, { l: 94, c: 3.6, h: 70, a: 100 }),
		200: new Color("primary", 200, { l: 92, c: 4.5, h: 69.4, a: 100 }),
		300: new Color("primary", 300, { l: 88, c: 7.3, h: 69.3, a: 100 }),
		400: new Color("primary", 400, { l: 79, c: 12.3, h: 66.2, a: 100 }),
		500: new Color("primary", 500, { l: 71, c: 16.1, h: 59.7, a: 100 }),
		600: new Color("primary", 600, { l: 66, c: 14.9, h: 60, a: 100 }),
		700: new Color("primary", 700, { l: 58, c: 12.9, h: 60.3, a: 100 }),
		800: new Color("primary", 800, { l: 49, c: 10.8, h: 60.6, a: 100 }),
		900: new Color("primary", 900, { l: 43, c: 9.2, h: 61.5, a: 100 }),
	},

	/**
	 * @see {@link https://www.figma.com/file/ytEIsjZoaeRlY4f6IxxEps/Broom?type=design&node-id=539-52&mode=design&t=N2wwFF2gK4WZBqKP-11}
	 */
	secondary: {
		50: new Color("secondary", 50, { l: 97, c: 1.2, h: 157, a: 100 }),
		100: new Color("secondary", 100, { l: 96, c: 1.6, h: 154.5, a: 100 }),
		200: new Color("secondary", 200, { l: 95, c: 2, h: 154.9, a: 100 }),
		300: new Color("secondary", 300, { l: 92, c: 3.2, h: 154.1, a: 100 }),
		400: new Color("secondary", 400, { l: 86, c: 5.7, h: 152.9, a: 100 }),
		500: new Color("secondary", 500, { l: 80, c: 8.1, h: 152.2, a: 100 }),
		600: new Color("secondary", 600, { l: 74, c: 7.3, h: 152.6, a: 100 }),
		700: new Color("secondary", 700, { l: 65, c: 6.5, h: 152.4, a: 100 }),
		800: new Color("secondary", 800, { l: 55, c: 5.4, h: 151.8, a: 100 }),
		900: new Color("secondary", 900, { l: 48, c: 4.5, h: 152.5, a: 100 }),
	},

	/**
	 * @see {@link https://www.figma.com/file/ytEIsjZoaeRlY4f6IxxEps/Broom?type=design&node-id=539-87&mode=design&t=N2wwFF2gK4WZBqKP-11}
	 */
	info: {
		50: new Color("info", 50, { l: 95, c: 2.8, h: 210.5, a: 100 }),
		100: new Color("info", 100, { l: 93, c: 3.7, h: 209.1, a: 100 }),
		200: new Color("info", 200, { l: 92, c: 4.6, h: 208.2, a: 100 }),
		300: new Color("info", 300, { l: 87, c: 7.2, h: 209.2, a: 100 }),
		400: new Color("info", 400, { l: 78, c: 11.1, h: 210.8, a: 100 }),
		500: new Color("info", 500, { l: 71, c: 12.6, h: 215.2, a: 100 }),
		600: new Color("info", 600, { l: 66, c: 11.6, h: 215.1, a: 100 }),
		700: new Color("info", 700, { l: 58, c: 10.1, h: 214.4, a: 100 }),
		800: new Color("info", 800, { l: 49, c: 8.6, h: 214.5, a: 100 }),
		900: new Color("info", 900, { l: 43, c: 7.4, h: 214.4, a: 100 }),
	},

	/**
	 * @see {@link https://www.figma.com/file/ytEIsjZoaeRlY4f6IxxEps/Broom?type=design&node-id=539-118&mode=design&t=N2wwFF2gK4WZBqKP-11}
	 */
	success: {
		50: new Color("success", 50, { l: 96, c: 2.4, h: 133.5, a: 100 }),
		100: new Color("success", 100, { l: 95, c: 3.3, h: 133.5, a: 100 }),
		200: new Color("success", 200, { l: 94, c: 4.1, h: 133.1, a: 100 }),
		300: new Color("success", 300, { l: 91, c: 6.6, h: 134.2, a: 100 }),
		400: new Color("success", 400, { l: 84, c: 11.5, h: 135.1, a: 100 }),
		500: new Color("success", 500, { l: 77, c: 16.1, h: 135.7, a: 100 }),
		600: new Color("success", 600, { l: 71, c: 14.8, h: 135.8, a: 100 }),
		700: new Color("success", 700, { l: 62, c: 12.7, h: 135.7, a: 100 }),
		800: new Color("success", 800, { l: 53, c: 10.7, h: 135.8, a: 100 }),
		900: new Color("success", 900, { l: 46, c: 8.9, h: 135.4, a: 100 }),
	},

	/**
	 * @see {@link https://www.figma.com/file/ytEIsjZoaeRlY4f6IxxEps/Broom?type=design&node-id=539-151&mode=design&t=N2wwFF2gK4WZBqKP-11}
	 */
	warning: {
		50: new Color("warning", 50, { l: 97, c: 3, h: 85.6, a: 100 }),
		100: new Color("warning", 100, { l: 97, c: 3.9, h: 83.8, a: 100 }),
		200: new Color("warning", 200, { l: 94, c: 4.9, h: 83.4, a: 100 }),
		300: new Color("warning", 300, { l: 91, c: 7.7, h: 84, a: 100 }),
		400: new Color("warning", 400, { l: 85, c: 12.7, h: 82.4, a: 100 }),
		500: new Color("warning", 500, { l: 79, c: 15.7, h: 77.6, a: 100 }),
		600: new Color("warning", 600, { l: 73, c: 14.5, h: 77.7, a: 100 }),
		700: new Color("warning", 700, { l: 64, c: 12.6, h: 77.8, a: 100 }),
		800: new Color("warning", 800, { l: 54, c: 10.6, h: 78.3, a: 100 }),
		900: new Color("warning", 900, { l: 47, c: 9.1, h: 78.2, a: 100 }),
	},

	/**
	 * @see {@link https://www.figma.com/file/ytEIsjZoaeRlY4f6IxxEps/Broom?type=design&node-id=539-184&mode=design&t=N2wwFF2gK4WZBqKP-11}
	 */
	error: {
		50: new Color("error", 50, { l: 95, c: 1.4, h: 22.8, a: 100 }),
		100: new Color("error", 100, { l: 94, c: 2, h: 21.4, a: 100 }),
		200: new Color("error", 200, { l: 92, c: 2.4, h: 23.9, a: 100 }),
		300: new Color("error", 300, { l: 87, c: 4, h: 21.8, a: 100 }),
		400: new Color("error", 400, { l: 78, c: 7.3, h: 23.1, a: 100 }),
		500: new Color("error", 500, { l: 69, c: 10.9, h: 24.5, a: 100 }),
		600: new Color("error", 600, { l: 63, c: 10.1, h: 24.2, a: 100 }),
		700: new Color("error", 700, { l: 56, c: 8.6, h: 24.9, a: 100 }),
		800: new Color("error", 800, { l: 48, c: 7.1, h: 24.8, a: 100 }),
		900: new Color("error", 900, { l: 41, c: 6, h: 24.4, a: 100 }),
	},

	/**
	 * @see {@link https://www.figma.com/file/ytEIsjZoaeRlY4f6IxxEps/Broom?type=design&node-id=539-219&mode=design&t=N2wwFF2gK4WZBqKP-11}
	 */
	surface: {
		50: new Color("surface", 50, { l: 91, c: 2, h: 67.8, a: 100 }),
		100: new Color("surface", 100, { l: 88, c: 3, h: 48.7, a: 100 }),
		200: new Color("surface", 200, { l: 85, c: 3, h: 48.7, a: 100 }),
		300: new Color("surface", 300, { l: 76, c: 4, h: 56.4, a: 100 }),
		400: new Color("surface", 400, { l: 56, c: 1, h: 56.2, a: 100 }),
		500: new Color("surface", 500, { l: 34, c: 1.5, h: 59.1, a: 100 }),
		600: new Color("surface", 600, { l: 32, c: 1.4, h: 62.9, a: 100 }),
		700: new Color("surface", 700, { l: 29, c: 1.1, h: 55.9, a: 100 }),
		800: new Color("surface", 800, { l: 25, c: 1.1, h: 61, a: 100 }),
		900: new Color("surface", 900, { l: 23, c: 0.8, h: 59.2, a: 100 }),
	},
} as const;
