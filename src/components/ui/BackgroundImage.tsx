import { Component } from "solid-js";
import { Box } from "@components/base";
import "./background-image-styles.css";

export interface BackgroundImageProps {
	src: string;
	mode: "repeat" | "cover";
	position?: "fixed" | "scroll";
}

/**
 * Render a background image inside a container
 * The parent must have a `position: relative` and `overflow: hidden` style preset
 * There is two modes : repeat and cover
 */
export const BackgroundImage: Component<BackgroundImageProps> = ({
	src,
	mode = "cover",
	position
}) => {
	if (mode === "cover") {
		return <img src={src} class="background-image-cover" alt="background image" />;
	}

	// Use a div with a repeating background
	return (
		<Box
			class="background-image-repeat"
			backgroundAttachment={position}
			style={{
				"background-image": `url(${src})`
			}}
		/>
	);
};
