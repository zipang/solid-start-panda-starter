// src/components/base/Text.tsx
import { Component } from "solid-js";
import { styled, type HTMLStyledProps } from "@styled-system/jsx";

export interface TextProps extends HTMLStyledProps<"p"> {
	as?: "p" | "em" | "strong" | "span" | "label";
}

export const Text: Component<TextProps> = styled("p", {
	base: {
		fontWeight: 400,
		lineHeight: 1.4
	}
});
