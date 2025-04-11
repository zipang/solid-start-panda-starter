// src/components/base/Heading.stories.tsx
import type { Meta, StoryObj } from "storybook-solidjs";
import { Heading } from "./Heading";

const meta: Meta<typeof Heading> = {
	title: "Components/Heading",
	component: Heading,
	tags: ["autodocs"],
	argTypes: {
		as: {
			control: "select",
			options: ["h1", "h2", "h3", "h4", "h5", "h6"]
		},
		size: {
			control: "radio",
			options: ["sm", "md", "lg", "xl", "xxl"]
		},
		children: {
			control: "text"
		}
	}
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const AllSizes: Story = {
	// Add this parameter to disable controls for this story
	parameters: {
		controls: { disable: true }
	},
	render: () => (
		<>
			<Heading size="xxl">XXL</Heading>
			<Heading size="xl">XL</Heading>
			<Heading size="lg">LARGE</Heading>
			<Heading size="md">MEDIUM</Heading>
			<Heading size="sm">SMALL</Heading>
		</>
	)
};

export const DefaultHeadingSizes: Story = {
	// Add this parameter to disable controls for this story
	parameters: {
		controls: { disable: true }
	},
	render: () => (
		<>
			<Heading as="h1">I. Heading</Heading>
			<Heading as="h2">II. Heading</Heading>
			<Heading as="h3">III. Heading</Heading>
			<Heading as="h4">IV. Heading</Heading>
			<Heading as="h5">V. Heading</Heading>
		</>
	)
};

export const VariableHeading: Story = {
	args: {
		as: "h2",
		size: "xl",
		children: "Some Title"
	}
};
