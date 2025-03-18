import type { Component } from "solid-js";
import type { IconProps } from ".";

export const MicrosoftLogo: Component<IconProps> = ({ size = "1rem" }) => (
	<svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
		<title>Microsoft Logo</title>
		<path d="M4,4v58h58v-58Z" fill="#F25022" />
		<path d="M66,4v58h58v-58Z" fill="#7FBA00" />
		<path d="M4,66v58h58v-58Z" fill="#00A4EF" />
		<path d="M66,66v58h58v-58Z" fill="#FFB900" />
	</svg>
);
