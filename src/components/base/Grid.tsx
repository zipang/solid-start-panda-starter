import { Component } from "solid-js";
import { Box, type BoxProps } from "./Box";

export interface GridProps extends BoxProps {
	columns: number;
	gap?: number | string;
}

export const Grid: Component<GridProps> = ({ columns = 3, gap = "2rem", ...more }) => (
	<Box display="grid" gridTemplateColumns={new Array(columns).fill("1fr").join(" ")} {...more} />
);
