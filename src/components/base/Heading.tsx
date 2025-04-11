// src/components/base/Heading.tsx
import { mergeProps, splitProps, type Component } from "solid-js";
import { styled, type HTMLStyledProps } from "@styled-system/jsx";

const headingStyles = {
	sm: { fontSize: "sm", lineHeight: "1rem" },
	md: { fontSize: "md", lineHeight: "1.25rem" },
	lg: { fontSize: "lg", lineHeight: "1.75rem" },
	xl: { fontSize: "xl", lineHeight: "2rem" },
	xxl: { fontSize: "xxl", lineHeight: "2.4rem" }
};

export interface HeadingProps extends HTMLStyledProps<"h1"> {
	as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	size?: keyof typeof headingStyles;
}

const _DEFAULTS = {
	as: "h2",
	size: "xl"
} as HeadingProps;

const HeadingComponent = styled("h1") as Component<HeadingProps>;

export const Heading: Component<HeadingProps> = (incoming) => {
	const props = mergeProps(_DEFAULTS, incoming);
	const [, rest] = splitProps(props, ["as", "size"]);
	return (
		<HeadingComponent
			as={props.as}
			{...headingStyles[props.size as keyof typeof headingStyles]}
			{...rest}
		/>
	);
};
