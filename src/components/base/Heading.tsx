// src/components/base/Heading.tsx
import { Component, type ComponentProps } from "solid-js";
import { styled } from "@styled-system/jsx";

export interface HeadingProps extends ComponentProps<typeof styled.h1> {
	as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Heading = styled("h1", {
	base: {
		fontWeight: "bold",
		lineHeight: "shorter"
	}
}) as Component<HeadingProps>;
