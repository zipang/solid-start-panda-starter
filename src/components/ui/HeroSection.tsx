import type { Component } from "solid-js";
import { Box, type BoxProps, Heading, VStack } from "@components/base";
import { withBackgroundImage, type BackgroundImageProps } from "./BackgroundImage";

export interface HeroSectionProps extends Omit<BoxProps, "backgroundImage"> {
	title?: string;
	subtitle?: string;
	textColor?: string;
	backgroundImage?: BackgroundImageProps;
}

export const HeroSection: Component<HeroSectionProps> = withBackgroundImage(
	({ title, subtitle, textColor = "inherit", ...more }) => (
		// @ts-ignore
		<VStack as="section" class="hero-section" minHeight="90vh" {...more}>
			<Box as="hgroup" ml="30%">
				<Heading as="h1" fontSize="4xl" color={textColor} class="hero-title">
					{title}
				</Heading>
				<Heading as="h2" fontSize="xl" color={textColor} class="hero-subtitle">
					{subtitle}
				</Heading>
			</Box>
		</VStack>
	)
);
