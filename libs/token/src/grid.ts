import { FLUID_CONFIG } from "./fluid.js";
import { GridColumn } from "./grid/column.js";
import { GridGutter } from "./grid/gutter.js";
import { GridWidth } from "./grid/width.js";

const { minWidth, maxWidth } = FLUID_CONFIG;

/**
 * Design tokens related to grid system.
 */
export const GRID = {
	column: new GridColumn(12),
	min: new GridWidth("min", minWidth),
	max: new GridWidth("max", maxWidth),
	gutter: new GridGutter([minWidth, maxWidth]),
} as const;
