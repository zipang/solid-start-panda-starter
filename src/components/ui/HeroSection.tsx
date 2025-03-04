import { type Component } from "solid-js";
import { Box, Heading } from "@components/base";

export interface HeroSectionProps {
	title?: string;
	subtitle?: string;
	backgroundImage?: string;
}

export const HeroSection: Component<HeroSectionProps> = ({ title, subtitle, backgroundImage }) => (
	<Box as="section" class="hero-section" minHeight="90vh">
		<Heading as="h1" size="4xl" class="hero-title">
			{title}
		</Heading>
		<Heading as="h2" size="xl" class="hero-subtitle">
			{subtitle}
		</Heading>
	</Box>
);
