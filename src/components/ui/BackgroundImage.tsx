import { type Component, mergeProps, splitProps } from "solid-js";
import { Box } from "@components/base";
import "./background-image-styles.scss";

export interface BackgroundImageProps {
	src: string;
	mode?: "repeat" | "cover";
	fixed?: boolean;
	classList?: Record<string, boolean | (() => boolean)>;
	alt?: string;
}

/**
 * This interface extends any interface with the `backgroundImage` prop
 */
export interface WithBackgroundImageProps extends Record<string, any> {
	backgroundImage?: BackgroundImageProps;
}

const mergeAllProps = (props: BackgroundImageProps) => {
	const [image, rest] = splitProps(props, ["src", "mode", "fixed"]);

	return mergeProps({
		classList: {
			"w-background-image": true,
			fixed: Boolean(image.fixed),
			repeat: image.mode === "repeat"
		},
		style: {
			"background-image": `url(${image.src})`
		},
		rest
	});
};

type BackgroundImageHOC = (WrappedComponent: Component<WithBackgroundImageProps>) => Component;

/**
 * HOC to decorate an existing component to automatically handle the `backgroundImage` prop
 */
export const withBackgroundImage: BackgroundImageHOC =
	(WrappedComponent) => (props: WithBackgroundImageProps) => {
		if (props.backgroundImage) {
			const [, rest] = splitProps(props, ["backgroundImage"]);
			return <WrappedComponent {...mergeAllProps(props.backgroundImage)} {...rest} />;
		}

		return <WrappedComponent {...props} />;
	};

const _DEFAULTS = {
	mode: "cover",
	fixed: false,
	alt: "cover"
};

/**
 * Adds an image child inside a container that will render as a background image
 * The parent must have a `position: relative` and `overflow: hidden` style preset
 */
export const BackgroundImage: Component<BackgroundImageProps> = (incoming) => {
	const props = mergeProps(_DEFAULTS, incoming) as BackgroundImageProps;
	const [backgroundImage, rest] = splitProps(props, ["src", "mode", "fixed", "classList", "alt"]);

	if (backgroundImage.mode === "cover") {
		// Simply use the object-fit CSS prop
		return (
			<img
				class="background-image-cover"
				src={backgroundImage.src}
				alt={backgroundImage.alt}
			/>
		);
	}

	// Use the background-image CSS prop
	return <Box {...mergeAllProps(backgroundImage)} {...rest} />;
};
