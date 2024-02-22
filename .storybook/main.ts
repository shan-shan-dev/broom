import { resolve } from "node:path";

import type { StorybookConfig } from "@storybook/svelte-vite";

/** @see {@link https://storybook.js.org/docs/configure/typescript#configure-storybook-with-typescript} */
const config: StorybookConfig = {
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-designs",
		"@storybook/addon-interactions",
		"@chromatic-com/storybook",
	],
	docs: {
		autodocs: "tag",
	},
	framework: {
		name: "@storybook/svelte-vite",
		options: {},
	},
	stories: [
		resolve(__dirname, "..", "apps", "client", "src", "**", "*.stories.ts"),
		resolve(__dirname, "..", "apps", "ladding", "src", "**", "*.stories.ts"),
		resolve(__dirname, "..", "libs", "token", "stories", "**", "*.mdx"),
		resolve(__dirname, "..", "libs", "ui", "src", "**", "*.stories.ts"),
		resolve(__dirname, "..", "libs", "ui", "stories", "**", "*.mdx"),
	],
	typescript: {},
};

export default config;
