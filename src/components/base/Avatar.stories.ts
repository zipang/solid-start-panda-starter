import type { Meta, StoryObj } from "storybook-solidjs";

import { fn } from "@storybook/test";

import { Avatar } from "./Avatar";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/solid/writing-stories/introduction
const meta = {
	title: "Components/Avatar",
	component: Avatar,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered"
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		size: { control: "radio", options: ["sm", "md", "lg", "xl", "xxl"] },
		variant: { control: "radio", options: ["rounded", "square"] },
		backgroundColor: { control: "color" },
		onClick: { action: "clicked" }
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: { onClick: fn() }
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/solid/writing-stories/args
export const Rounded: Story = {
	args: {
		variant: "rounded",
		name: "Jane Doe",
		image: "https://i.pravatar.cc/150?img=29"
	}
};

export const Square: Story = {
	args: {
		variant: "square",
		name: "John Doe",
		image: "https://i.pravatar.cc/150?img=11"
	}
};

export const Initials: Story = {
	args: {
		variant: "rounded",
		name: "John Doe"
	}
};
