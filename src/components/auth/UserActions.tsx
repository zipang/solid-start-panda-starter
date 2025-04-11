import { createEffect, Show, type Component } from "solid-js";
import { Avatar, Link } from "@components/base";
import { useSession } from "@components/auth";

export const LoginButton: Component = () => (
	<Link
		href="/login?redirect=/dashboard"
		preload={true}
		fontWeight="bolder"
		textDecoration="none"
	>
		LOGIN
	</Link>
);

/**
 * Display an Avatar for the currently logged User
 * or the LOGIN button
 */
export const UserActions: Component = () => {
	const session = useSession();

	return (
		<Show when={!session.isEmpty()} fallback={<LoginButton />}>
			<Show when={session.isLive()} fallback={<div>Loading...</div>}>
				<Avatar image={session.user()?.image} name={session.user()?.name} />
			</Show>
		</Show>
	);
};

export default UserActions;
