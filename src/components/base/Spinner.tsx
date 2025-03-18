import type { Component } from "solid-js";
import { Box } from "@components/base";
import "./spinner-styles.css";

export interface SpinnerProps {
	size?: string | number;
	thickness?: string | number;
	color?: string;
}

export const Spinner: Component<SpinnerProps> = ({
	size = "1rem",
	thickness = "2px",
	color = "currentcolor"
}) => (
	<Box class="spinner" height={size} width={size} borderWidth={thickness} borderColor={color} />
);
