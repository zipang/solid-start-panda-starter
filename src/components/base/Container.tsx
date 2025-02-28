// src/components/base/Container.tsx
import { Box, type BoxProps } from "./Box";
import "./container-styles.css";

/**
 * Center content horizontally in a size-restricted container
 * @param props
 */
export const Container = (props: BoxProps) => {
	return <Box class="container" {...props} />;
};
