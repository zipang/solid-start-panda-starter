// src/components/base/Box.tsx
import type { Component } from "solid-js";
import { styled, type HTMLStyledProps } from "@styled-system/jsx";

/**
 * Box props (applicable to block-like elements)
 */
export interface BoxProps extends HTMLStyledProps<"div"> {
	as?:
		| "div"
		| "main"
		| "section"
		| "address"
		| "article"
		| "aside"
		| "blockquote"
		| "button"
		| "footer"
		| "header"
		| "hgroup"
		| "menu"
		| "nav"
		| "figure"
		| "figcaption"
		| "canvas"
		| "video";
}

export const Box: Component<BoxProps> = (props) => {
	return <styled.div {...props} />;
};
