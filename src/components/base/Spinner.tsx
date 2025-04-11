import { mergeProps, type Component } from "solid-js";
import { Box } from "@components/base";
import "./spinner-styles.css";

export interface SpinnerProps {
	size?: string | number;
	thickness?: string | number;
	color?: string;
}

const _DEFAULTS = {
	size: "1rem",
	thickness: "2px",
	color: "currentcolor"
} as SpinnerProps;

export const Spinner: Component<SpinnerProps> = (incoming) => {
	const props = mergeProps(_DEFAULTS, incoming);
	return (
		<Box
			class="spinner"
			height={props.size}
			width={props.size}
			borderWidth={props.thickness}
			borderColor={props.color}
		/>
	);
};
