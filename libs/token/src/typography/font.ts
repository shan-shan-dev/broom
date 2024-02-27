import { FontFamily } from "./font-family.js";
import { FontSize } from "./font-size.js";
import { FontWeight } from "./font-weight.js";

/**
 * Design tokens related to font scope from the typography.
 */
export const FONT = {
	mono: {
		family: new FontFamily("mono", "Noto Sans Mono"),
		weight: {
			regular: new FontWeight("mono", "regular", 400),
			bold: new FontWeight("mono", "bold", 700),
		},
	},

	sans: {
		family: new FontFamily("sans", "Noto Sans TC"),
		weight: {
			light: new FontWeight("sans", "light", 300),
			medium: new FontWeight("sans", "medium", 500),
			bold: new FontWeight("sans", "bold", 700),
			black: new FontWeight("sans", "black", 900),
		},
	},

	serif: {
		family: new FontFamily("serif", "Noto Serif TC"),
		weight: {
			light: new FontWeight("serif", "light", 300),
			medium: new FontWeight("serif", "medium", 500),
			bold: new FontWeight("serif", "bold", 700),
			black: new FontWeight("serif", "black", 900),
		},
	},

	size: {
		"5xl": new FontSize("5xl", [53.75, 76.29]),
		"4xl": new FontSize("4xl", [44.79, 61.04]),
		"3xl": new FontSize("3xl", [37.32, 48.83]),
		"2xl": new FontSize("2xl", [31.1, 39.06]),
		xl: new FontSize("xl", [25.92, 31.25]),
		l: new FontSize("l", [21.6, 25.0]),
		m: new FontSize("m", [18.0, 20.0]),
		s: new FontSize("s", [15.0, 16.0]),
	},
} as const;
