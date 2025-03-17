import { Show, type Component } from "solid-js";
import { Box } from "@components/base";
import { BackgroundImage } from "@components/ui";

export interface AvatarProps {
	image?: string;
	title: string;
	size?: string | number;
}

export const Avatar: Component<AvatarProps> = ({ image, title = "?", size = "3rem" }) => (
	<Box class="avatar" height={size} width={size}>
		<Show when={image} fallback={extractInitials(title)}>
			<BackgroundImage crossOrigin="anonymous" src={image} alt={title} />
		</Show>
	</Box>
);

function extractInitials(title: string) {
	return title
		.split(" ")
		.map((word) => word[0].toUpperCase())
		.join(" ");
}
