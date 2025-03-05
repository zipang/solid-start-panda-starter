// src/components/base/Heading.tsx
import { Component } from "solid-js";
import { styled, type HTMLStyledProps } from "@styled-system/jsx";
import { textStyles } from "@theme/typography";

export interface HeadingProps extends HTMLStyledProps<"h1"> {
	as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	size?: keyof typeof textStyles;
}

const HeadingComponent = styled("h1") as Component<HeadingProps>;

export const Heading: Component<HeadingProps> = ({ as = "h2", size = "xl", ...more }) => {
	return <HeadingComponent as={as} {...textStyles[size].value} {...more} />;
};
