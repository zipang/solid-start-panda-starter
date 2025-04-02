import { type Component, For, mergeProps, splitProps } from "solid-js";
import type { SystemProperties } from "@styled-system/types";
import { makeArray } from "@utils/array-utils";
import { AspectRatio } from "./AspectRatio";
import { Box, type BoxProps } from "./Box";
import "./grid-styles.scss";

// These classes have responsive props in the scss file
const cols = ["", "", "two-columns", "three-columns", "four-columns"];

export interface GridProps extends BoxProps {
	columns: 1 | 2 | 3 | 4;
	gap?: SystemProperties["gap"];
	/**
	 * Define the grid items proportions
	 * @default 4/3
	 */
	aspectRatio?: number;
	/**
	 * Tell how an image or video fits into a grid item
	 */
	imageFit?: "cover" | "fill" | "contain";
}

const _DEFAULTS = {
	columns: 3,
	gap: "2rem",
	aspectRatio: 4 / 3,
	imageFit: "cover"
} as GridProps;

export const Grid: Component<GridProps> = (incoming) => {
	const props = mergeProps(_DEFAULTS, incoming);

	const [, rest] = splitProps(props, ["children", "columns", "gap", "aspectRatio", "imageFit"]);

	return (
		<Box class={`container grid ${cols[props.columns]}`} gap={props.gap} {...rest}>
			<For each={makeArray(props.children)}>
				{(item) => (
					<AspectRatio
						class="grid-item"
						imageFit={props.imageFit}
						ratio={props.aspectRatio}
					>
						{item}
					</AspectRatio>
				)}
			</For>
		</Box>
	);
};
