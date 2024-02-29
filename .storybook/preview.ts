// @ts-ignore - Intentional. To avoid overhead of including all of the apps & libs at the root.
import "../libs/asset/src/font/mono";
// @ts-ignore - Intentional. To avoid overhead of including all of the apps & libs at the root.
import "../libs/asset/src/font/sans";
// @ts-ignore - Intentional. To avoid overhead of including all of the apps & libs at the root.
import "../libs/asset/src/font/serif";

import type { Preview } from "@storybook/svelte";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
