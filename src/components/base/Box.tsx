// src/components/base/Box.tsx
import { Component, JSX, type ComponentProps } from "solid-js";
import { styled } from "@styled-system/jsx";

/**
 * Box props (applicable to block-like elements)
 */
export interface BoxProps extends ComponentProps<typeof styled.div> {
	as?:
		| "div"
		| "main"
		| "section"
		| "address"
		| "article"
		| "aside"
		| "blockquote"
		| "footer"
		| "header"
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
