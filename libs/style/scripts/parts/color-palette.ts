import { COLOR, Color, type ColorName } from "@libs/token/color/palette";
import { compileTemplate, getOutputPath, getTemplate, saveCompiled } from "./shared.js";

const OUTPUT_DIR = "color-palette";
const TEMPLATE = getTemplate("color-swatch.css.hbs");

export function generateColorPaletteCSS(): void {
	for (const name of Color.NAMES) {
		compileSwatch(name, formatted(name));
	}
}

function compileSwatch(name: ColorName, formatted: string): void {
	const compiled = compileTemplate(TEMPLATE, { name, colors: formatted });
	const outputPath = getOutputPath(OUTPUT_DIR, name);

	saveCompiled(compiled, outputPath);
}

function formatted(name: ColorName): string {
	return Object.values(COLOR[name])
		.map((swatch) => swatch.cssDec)
		.join(";\n\t");
}
