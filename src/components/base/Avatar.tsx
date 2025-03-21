import { Show, type Component } from "solid-js";
import { Box, VStack } from "@components/base";
import { BackgroundImage } from "@components/ui";

import "./avatar-styles.scss";

export interface AvatarProps {
	name?: string;
	image?: string;
	size?: string | number;
	variant?: "rounded" | "square";
}

export const Avatar: Component<AvatarProps> = ({
	name = "?",
	image,
	size = "3rem",
	variant = "rounded"
}) => (
	<Box
		role="button"
		class={`avatar ${variant}`}
		height={size}
		width={size}
		tabIndex={0}
		title={`Logged in as ${name}`}
	>
		<Show when={image} fallback={<Initials name={name} />}>
			<BackgroundImage crossOrigin="anonymous" src={image} alt={name} />
		</Show>
	</Box>
);

export const Initials = ({ name = "?" }) => (
	<VStack class="initials">{extractInitials(name)}</VStack>
);

/**
 * Extract initials from a user's name
 */
function extractInitials(name: string) {
	return name
		.split(" ")
		.map((word) => word[0].toUpperCase())
		.join(" ");
}
