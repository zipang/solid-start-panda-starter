import { Box, type BoxProps } from "./Box";

export const defaultHstackProps = {
	display: "flex",
	flexDirection: "row",
	gap: 10,
	alignItems: "center",
	justifyContent: "center"
};

/**
 * Horizontally stack child elements
 * @param props
 */
export const HStack = (props: BoxProps) => {
	return <Box {...defaultHstackProps} {...props} />;
};
