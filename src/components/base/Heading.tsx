// src/components/base/Heading.tsx
import { Component } from "solid-js";
import { styled, type HTMLStyledProps } from "@styled-system/jsx";
import { defineTokens } from "@pandacss/dev";

export const fontSizes = defineTokens.fontSizes({
	xs: { value: "0.7rem" },
	sm: { value: "0.875rem" },
	md: { value: "1rem" },
	lg: { value: "1.25rem" },
	xl: { value: "1.7rem" },
	xxl: { value: "2.25rem" },
	"4xl": { value: "3rem" }
});

export interface HeadingProps extends HTMLStyledProps<"h1"> {
	as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	size?: keyof typeof fontSizes;
}

export const Heading = styled("h1", {
	base: {
		fontFamily: "Garamond, Baskerville, Georgia, 'Noto Serif', TimesNewRomanPSMT, Times, serif",
		fontWeight: 700,
		lineHeight: 1.5
	}
}) as Component<HeadingProps>;
