import { createI18n } from "@inlang/paraglide-js-adapter-sveltekit";
import * as runtime from "@libs/i18n/runtime";

// FIXME: There's a typing issue
export const i18n: ReturnType<typeof createI18n> = createI18n(runtime as Parameters<typeof createI18n>[0]);
