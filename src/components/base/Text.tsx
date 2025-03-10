// src/components/base/Text.tsx
import type { Component } from "solid-js";
import { styled, type HTMLStyledProps } from "@styled-system/jsx";

export interface TextProps extends HTMLStyledProps<"p"> {
	as?: "p" | "em" | "strong" | "span" | "label";
}

export const Text: Component<TextProps> = styled("p", {
	base: {
		fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif`,
		fontWeight: 400,
		lineHeight: 1.7,
		color: "#333"
	}
});
