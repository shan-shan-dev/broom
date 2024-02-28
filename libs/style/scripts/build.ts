import { generateColorPaletteCSS } from "./parts/color-palette.js";
import { generateTypographyCSS } from "./parts/typography.js";

export async function build() {
	generateColorPaletteCSS();
	generateTypographyCSS();
}

build();
