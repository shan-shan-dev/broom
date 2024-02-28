import { FONT } from "@libs/token/typography/font";
import { compileTemplate, getOutputPath, getTemplate, saveCompiled } from "./shared.js";

const FONTS = [FONT.mono, FONT.sans, FONT.serif] as const;
const OUTPUT_EXT = ".gen.css";
const OUTPUT_DIR = "typography";

export function generateTypographyCSS(): void {
	compileFont("family", formattedFontFamilies());
	compileFont("weight", formattedFontWeights());
	compileFont("size", formattedFontSizes());
}

type Target = "family" | "weight" | "size";

export function compileFont(target: Target, formatted: string): void {
	const template = getTemplate(`font-${target}.css.hbs`);
	const compiled = compileTemplate(template, { [target]: formatted });
	const outputPath = getOutputPath(OUTPUT_DIR, `font-${target}${OUTPUT_EXT}`);

	saveCompiled(compiled, outputPath);
}

function formattedFontFamilies(): string {
	return `${FONTS.map((font) => font.family.cssDec).join(";\n\t")};`;
}

function formattedFontWeights(): string {
	return `${FONTS.flatMap((font) => Object.values(font.weight).map((weight) => weight.cssDec)).join(";\n\t")};`;
}

function formattedFontSizes(): string {
	return `${Object.values(FONT.size)
		.map((size) => size.cssDec)
		.join(";\n\t")};`;
}
