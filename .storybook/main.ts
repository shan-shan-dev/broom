import { resolve } from "node:path";

import { getAppRootPathURL } from "@packages/path/app";
import { getPackageRootPathURL } from "@packages/path/package";
import type { StorybookConfig } from "@storybook/svelte-vite";

/**
 * FIXME: I need it to be async, because I can't use top-level await.
 */
async function createConfig(): Promise<StorybookConfig> {
	/** @see {@link https://storybook.js.org/docs/configure/typescript#configure-storybook-with-typescript} */
	return {
		addons: [
			"@storybook/addon-links",
			"@storybook/addon-essentials",
			"@chromatic-com/storybook",
			"@storybook/addon-interactions",
		],
		docs: {
			autodocs: "tag",
		},
		framework: {
			name: "@storybook/svelte-vite",
			options: {},
		},
		stories: await getStoriesPathPatterns(),
		typescript: {},
	};
}

async function getStoriesPathPatterns(): Promise<string[]> {
	const urls = await Promise.all([
		getPackageRootPathURL("ui"),
		getAppRootPathURL("client"),
		getAppRootPathURL("landing"),
	]);

	return urls.flatMap((url) => {
		return [
			resolve(url.pathname, "src", "**", "*.stories.ts"),
			//
			resolve(url.pathname, "stories", "**", "*.mdx"),
		];
	});
}

/** FIXME: Ugly workaround, the promise will be resolved anyway, somehow. */
const config = createConfig();

export default config;
