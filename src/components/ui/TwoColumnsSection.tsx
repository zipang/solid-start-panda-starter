import type { Component } from "solid-js";
import { Container, Grid, VStack, type BoxProps } from "@components/base";

export interface TwoColumnsSectionProps extends BoxProps {
	gap?: number | string;
	imageFit?: "cover" | "fit";
}

export const TwoColumnsSection: Component<TwoColumnsSectionProps> = ({
	gap = "2rem",
	imageFit = "fit",
	children,
	...more
}) => (
	<VStack as="section" class="two-columns-section" {...more}>
		<Grid columns={2} gap={gap} imageFit={imageFit} my={gap}>
			{children}
		</Grid>
	</VStack>
);
