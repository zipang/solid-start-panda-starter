// src/components/base/Text.tsx
import { Component, type ComponentProps } from "solid-js";
import { styled } from "@styled-system/jsx";

export interface TextProps extends ComponentProps<typeof styled.p> {
	as?: "p" | "em" | "strong" | "span" | "label";
}

export const Text: Component<TextProps> = styled("p", {
	base: {
		fontWeight: 400,
		lineHeight: 1.4
	}
});
