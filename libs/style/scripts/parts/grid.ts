import { GRID } from "@libs/token/grid";
import { compileTemplate, getOutputPath, getTemplate, saveCompiled } from "./shared.js";

const OUTPUT_DIR = "grid";
const TEMPLATE = getTemplate("grid.css.hbs");

export function generateGridCSS(): void {
	const compiled = compileTemplate(TEMPLATE, {
		widthMin: GRID.width.min.cssDec,
		widthMax: GRID.width.max.cssDec,
		column: GRID.column.cssDec,
		gutter: GRID.gutter.cssDec,
	});
	const outputPath = getOutputPath(OUTPUT_DIR, "grid");

	saveCompiled(compiled, outputPath);
}
