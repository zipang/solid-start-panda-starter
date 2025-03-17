import { Show, type Component } from "solid-js";
import { Box } from "@components/base";
import { BackgroundImage } from "@components/ui";

export interface AvatarProps {
	name: string;
	image?: string;
	size?: string | number;
}

export const Avatar: Component<AvatarProps> = ({ name = "?", image, size = "3rem" }) => (
	<Box class="avatar" height={size} width={size}>
		<Show when={image} fallback={extractInitials(name)}>
			<BackgroundImage crossOrigin="anonymous" src={image} alt={name} />
		</Show>
	</Box>
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
