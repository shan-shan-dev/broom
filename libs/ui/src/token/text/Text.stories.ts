import type { Meta, StoryObj } from "@storybook/svelte";

import Text from "./Text.svelte";
import { FontSize } from "@libs/token/typography/font-size";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: "Tokens/Text",
	component: Text,
	tags: ["autodocs"],
	argTypes: {
		// backgroundColor: { control: "color" },
		size: {
			control: { type: "select" },
			options: FontSize.KEYS,
		},
	},
	parameters: {
		design: {
			type: "figma",
			url: "https://www.figma.com/file/Klm6pxIZSaJFiOMX5FpTul9F/storybook-addon-designs-sample",
		},
	},
} satisfies Meta<Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	args: {
		// family: "sans",
	},
};
