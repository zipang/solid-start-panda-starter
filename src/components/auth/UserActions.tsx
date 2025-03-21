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

export const UserActions: Component = () => {
	const session = useSession();

	createEffect(() => {
		if (session.isEmpty()) {
			console.log("Call session refresh");
			session.refresh();
		}
	});

	return (
		<Show when={!session.isEmpty()} fallback={<LoginButton />}>
			<Show when={session.isLive()} fallback={<div>Loading...</div>}>
				<Avatar
					image={
						/* @ts-expect-error session().user is possibly null */
						session.user().image
					}
					name={
						/* @ts-expect-error session().user is possibly null */
						session.user().name
					}
				/>
			</Show>
		</Show>
	);
};

export default UserActions;
