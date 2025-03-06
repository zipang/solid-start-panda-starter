import { Component, JSX, ParentComponent } from "solid-js";
import { Box } from "@components/base";
import "./background-image-styles.scss";

export interface BackgroundImageProps {
	src: string;
	mode: "repeat" | "cover";
	fixed?: boolean;
}

export type WithBackgroundImageProps<P> = P & {
	backgroundImage?: BackgroundImageProps;
};

const mergeAllProps: (p: WithBackgroundImageProps<Record<string, any>>) => Record<string, any> = ({
	backgroundImage,
	...initialProps
}) => {
	const classList = {
		"w-background-image": true,
		fixed: Boolean(backgroundImage.fixed),
		repeat: backgroundImage.mode === "repeat",
		...initialProps.classList
	};
	initialProps.style = {
		...initialProps.style,
		"background-image": `url(${backgroundImage.src})`
	};

	return {
		...initialProps,
		classList
	};
};

/**
 * HOC to decorate an existing component with the additional `backgroundImage` prop behaviour
 * @param WrappedComponent
 * @returns
 */
export function withBackgroundImage<P extends Record<string, any>>(
	WrappedComponent: Component<P>
): Component<WithBackgroundImageProps<P>> {
	return (props: WithBackgroundImageProps<P>) => {
		const withBackgroundImageProps = mergeAllProps(props);

		return <WrappedComponent {...(withBackgroundImageProps as P)} />;
	};
}

/**
 * Adds an image child inside a container that will render as a background image
 * The parent must have a `position: relative` and `overflow: hidden` style preset
 */
export const BackgroundImage: Component<BackgroundImageProps> = ({
	src,
	mode = "cover",
	fixed = false
}) => {
	if (mode === "cover") {
		return <img src={src} class="background-image-cover" alt="background image" />;
	}

	// Use a div with a repeating background
	const backgroundImageProps = mergeAllProps({ backgroundImage: { src, mode, fixed } });
	return <Box {...backgroundImageProps} />;
};
