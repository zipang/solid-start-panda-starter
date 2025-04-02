import type { Meta, StoryObj } from "storybook-solidjs";

import { Button } from "./Button";
import { load } from "../../../packages/cm-markdown-editor/public/chunk-rwbfn6jj";

const asyncAction = async () => new Promise((resolve) => setTimeout(() => resolve("Done"), 1000));

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta = {
	title: "Components/Button",
	component: Button,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered"
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		size: { control: "radio", options: ["md", "lg", "xl", "xxl"] },
		variant: { control: "radio", options: ["solid", "outline", "link"] },
		bg: {
			control: "radio",
			options: ["primary", "danger", "warning", "success"]
		},
		loading: { control: "boolean" },
		loadingText: { control: "text" },
		disabled: { control: "boolean" },
		onClick: { action: "clicked", control: false }
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: { onClick: asyncAction }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/solid/writing-stories/args
export const Solid: Story = {
	args: {
		variant: "solid",
		children: "Button",
		bg: "danger"
	}
};

export const Outline: Story = {
	args: {
		variant: "outline",
		children: "Button"
	}
};

export const Link: Story = {
	args: {
		variant: "link",
		children: "Button"
	}
};

export const Loading: Story = {
	args: {
		loading: true,
		loadingText: "Loading...",
		children: "Button"
	}
};

export const Disabled: Story = {
	args: {
		disabled: true,
		children: "Button"
	}
};
