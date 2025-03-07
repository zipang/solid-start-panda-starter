import { Component } from "solid-js";
import { Box, type BoxProps } from "./Box";
import "./grid-styles.scss";

// These classes have responsive props in the scss file
const cols = ["", "", "two-columns", "three-columns", "four-columns"];

export interface GridProps extends BoxProps {
	columns: 1 | 2 | 3 | 4;
	gap?: number | string;
	// Tell how an image fit into a grid item
	imageFit?: "cover" | "fit";
}

export const Grid: Component<GridProps> = ({
	columns = 3,
	gap = "2rem",
	imageFit = "fit",
	children,
	...more
}) => {
	const gridItems = Array.isArray(children) ? children : [children];
	return (
		<Box class={`grid ${cols[columns]}`} gap={gap} {...more}>
			{gridItems.map((child) => (
				<div class={`grid-item image-${imageFit}`}>{child}</div>
			))}
		</Box>
	);
};
