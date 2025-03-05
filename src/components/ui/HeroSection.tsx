import { Show, type Component } from "solid-js";
import { Box, Heading, VStack } from "@components/base";
import { BackgroundImage, type BackgroundImageProps } from "./BackgroundImage";

export interface HeroSectionProps {
	title?: string;
	subtitle?: string;
	textColor?: string;
	backgroundImage?: BackgroundImageProps;
}

export const HeroSection: Component<HeroSectionProps> = ({
	title,
	subtitle,
	textColor = "inherit",
	backgroundImage
}) => (
	<VStack as="section" class="hero-section" minHeight="90vh">
		<Box as="hgroup" ml="30%">
			<Heading as="h1" fontSize="4xl" color={textColor} class="hero-title">
				{title}
			</Heading>
			<Heading as="h2" size="xl" color={textColor} class="hero-subtitle">
				{subtitle}
			</Heading>
		</Box>

		<Show when={backgroundImage}>
			{backgroundImage && <BackgroundImage {...backgroundImage} />}
		</Show>
	</VStack>
);
