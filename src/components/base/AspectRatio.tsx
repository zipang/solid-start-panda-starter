import { mergeProps, splitProps, type Component } from "solid-js";
import { Box, type BoxProps } from "./Box";
import "./aspect-ratio-styles.scss";

export interface AspectRatioProps extends BoxProps {
	/**
	 * The rapport of the width to the height
	 * @default 4/3
	 */
	ratio?: number;
	/**
	 * Tell how an image or video should fit inside
	 */
	imageFit?: "cover" | "fill" | "contain";
}

const _DEFAULTS = {
	class: "",
	imageFit: "cover"
};

const asPercent = (ratio: number) => {
	return `${(1 / ratio) * 100}%`;
};

/**
 * Box with fixed proportions (w=100%, h=w/ratio) and overflow hidden
 */
export const AspectRatio: Component<AspectRatioProps> = (incoming) => {
	const [props, rest] = splitProps(mergeProps(_DEFAULTS, incoming), [
		"children",
		"class",
		"imageFit",
		"ratio"
	]);

	if (!props.ratio) {
		return (
			<Box class={`image-${props.imageFit} ${props.class}`} {...rest}>
				{props.children}
			</Box>
		);
	}

	return (
		<Box
			class={`aspect-ratio image-${props.imageFit} ${props.class}`}
			style={{ "padding-top": asPercent(props.ratio) }}
			{...rest}
		>
			{props.children}
		</Box>
	);
};
