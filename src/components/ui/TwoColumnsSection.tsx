import { Component } from "solid-js";
import { Container, Grid, VStack, type BoxProps } from "@components/base";

export interface TwoColumnsSectionProps extends BoxProps {
	columns: number;
	gap?: number | string;
}

export const TwoColumnsSection: Component<TwoColumnsSectionProps> = ({
	columns,
	gap = "2rem",
	children,
	...more
}) => (
	<VStack as="section" class="two-columns-section" {...more}>
		<Container>
			<Grid columns={columns} gap={gap}>
				{children}
			</Grid>
		</Container>
	</VStack>
);
