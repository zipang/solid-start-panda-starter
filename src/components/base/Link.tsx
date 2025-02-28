import { styled } from "@styled-system/jsx";
import { Component, ComponentProps, JSX } from "solid-js";

const StyledLink = styled.a;

export interface LinkProps extends ComponentProps<typeof StyledLink> {}

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
	const finalHref = href || "#";

	const target = isExternal(finalHref) ? "_blank" : undefined;

	return StyledLink({ href: finalHref, target, ...props });
};
