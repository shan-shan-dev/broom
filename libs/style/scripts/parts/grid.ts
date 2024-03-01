import { GRID } from "@libs/token/grid";
import { compileTemplate, getOutputPath, getTemplate, saveCompiled } from "./shared.js";

const TEMPLATE = getTemplate("grid.css.hbs");

export function generateGridCSS(): void {
	const compiled = compileTemplate(TEMPLATE, {
		widthMin: GRID.width.min.cssDec,
		widthMax: GRID.width.max.cssDec,
		column: GRID.column.cssDec,
		gutter: GRID.gutter.cssDec,
	});
	const outputPath = getOutputPath("", "grid");

	saveCompiled(compiled, outputPath);
}
