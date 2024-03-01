import { generateColorPaletteCSS } from "./parts/color-palette.js";
import { generateGridCSS } from "./parts/grid.js";
import { generateTypographyCSS } from "./parts/typography.js";

export async function build() {
	generateColorPaletteCSS();
	generateGridCSS();
	generateTypographyCSS();
}

build();
