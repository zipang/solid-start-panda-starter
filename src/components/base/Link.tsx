import type { Component } from "solid-js";
import { styled, type HTMLStyledProps } from "@styled-system/jsx";

export interface LinkProps extends HTMLStyledProps<"a"> {
	href: string;
}

/**
 * Checks if a given URL is external.
 *
 * @param {string} url - The URL to check.
 * @returns {boolean} - True if the URL is external, false otherwise.
 */
const isExternal = (url: string): boolean => {
	try {
		const parsedUrl = new URL(url);
		return parsedUrl.hostname !== window.location.hostname;
	} catch (error) {
		// If parsing fails, it's likely not a valid URL, so treat it as internal.
		return false;
	}
};

export const Link: Component<LinkProps> = ({ href, ...props }) => {
	let targetProps = {};

	if (isExternal(href)) {
		targetProps = {
			target: "_blank",
			rel: "noopener noreferrer"
		};
	}

	return <styled.a href={href} {...targetProps} {...props} />;
};
