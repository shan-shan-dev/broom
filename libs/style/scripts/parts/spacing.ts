import { SPACE } from "@libs/token/space";
import { compileTemplate, getOutputPath, getTemplate, saveCompiled } from "./shared.js";

const TEMPLATE = getTemplate("spacing.css.hbs");

export function generateSpacingCSS(): void {
	const compiled = compileTemplate(TEMPLATE, { spaces: formatted() });
	const outputPath = getOutputPath("", "spacing");

	saveCompiled(compiled, outputPath);
}

function formatted(): string {
	return Object.values(SPACE)
		.map((space) => space.cssDec)
		.join(";\n\t");
}
