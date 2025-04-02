import { type Component, createMemo, mergeProps, Show } from "solid-js";
import { Box, type BoxProps, VStack } from "@components/base";
import { BackgroundImage } from "@components/ui";

import "./avatar-styles.scss";

export interface AvatarProps extends BoxProps {
	name?: string;
	image?: string;
	size?: "sm" | "md" | "lg" | "xl" | "xxl";
	variant?: "rounded" | "square";
}

const _DEFAULTS = {
	name: "?",
	size: "md",
	variant: "rounded"
};

export const Avatar: Component<AvatarProps> = (incoming) => {
	const props = mergeProps(_DEFAULTS, incoming);

	return (
		<Box
			role="button"
			class={`avatar ${props.variant} ${props.size}`}
			tabIndex={0}
			title={`${props.name}`}
		>
			<Show when={props.image} fallback={<Initials name={props.name} />}>
				<BackgroundImage crossOrigin="anonymous" src={props.image} alt={props.name} />
			</Show>
		</Box>
	);
};

export const Initials: Component<{ name: string }> = (props) => {
	const initials = createMemo(() => extractInitials(props.name));
	return <VStack class="initials">{initials()}</VStack>;
};

/**
 * Extract initials from a user's name
 */
function extractInitials(name: string) {
	return name
		.split(" ")
		.filter(Boolean) // Handle empty words
		.map((word) => word[0].toUpperCase())
		.join("");
}
