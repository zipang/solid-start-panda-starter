// src/components/base/Heading.tsx
import type { Component } from "solid-js";
import { styled, type HTMLStyledProps } from "@styled-system/jsx";

const headingStyles = {
	xs: { fontSize: "xs", lineHeight: "0.9rem" },
	sm: { fontSize: "sm", lineHeight: "1rem" },
	md: { fontSize: "md", lineHeight: "1.25rem" },
	lg: { fontSize: "lg", lineHeight: "1.75rem" },
	xl: { fontSize: "xl", lineHeight: "2rem" },
	xxl: { fontSize: "xxl", lineHeight: "2.4rem" },
	"4xl": { fontSize: "4xl", lineHeight: "3.2rem", letterSpacing: "-0.02em" },
	"6xl": { fontSize: "6xl", lineHeight: "5.2rem", letterSpacing: "-0.02em" }
};

export interface HeadingProps extends HTMLStyledProps<"h1"> {
	as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	size?: keyof typeof headingStyles;
}

const HeadingComponent = styled("h1") as Component<HeadingProps>;

export const Heading: Component<HeadingProps> = ({ as = "h2", size = "xl", ...more }) => {
	return <HeadingComponent as={as} {...headingStyles[size]} {...more} />;
};
