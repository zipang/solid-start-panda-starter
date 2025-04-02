import type { Meta, StoryObj } from "storybook-solidjs";
import { Grid, type GridProps } from "./Grid";
import { Box } from "./Box";

const meta: Meta<typeof Grid> = {
	title: "Layout/Grid",
	component: Grid,
	tags: ["autodocs"],
	argTypes: {
		columns: {
			control: { type: "radio" },
			options: [1, 2, 3, 4]
		},
		imageFit: {
			control: { type: "radio" },
			options: ["cover", "fill", "contain"]
		},
		gap: {
			control: { type: "range", min: 0, max: 20, step: 1 }
		}
	},
	args: {
		columns: 3,
		gap: 10,
		imageFit: "cover"
	}
};

export default meta;

type Story = StoryObj<typeof Grid>;

export const SimpleGrid: Story = {
	args: {
		columns: 3,
		gap: 10,
		imageFit: "cover"
	},

	render: (args: GridProps) => (
		<Grid columns={args.columns} gap={args.gap} imageFit={args.imageFit}>
			<Box bg="primary.highlight">Item 1</Box>
			<Box bg="success.highlight">Item 2</Box>
			<Box bg="warning.highlight">Item 3</Box>
			<Box bg="danger.highlight">Item 4</Box>
			<Box bg="info.highlight">Item 5</Box>
			<img src="https://i.pravatar.cc/150?img=29" alt="Avatar" />
		</Grid>
	)
};
