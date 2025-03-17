import { Show, type Component } from "solid-js";
import { Avatar, Link } from "@components/base";
import { useSession } from "@lib/SessionContext";

export const LoginButton: Component = () => (
	<Link href="/login" preload={true} fontWeight="bolder" textDecoration="none">
		LOGIN
	</Link>
);

export const UserActions: Component = () => {
	const session = useSession();
	return (
		<Show when={session.user} fallback={<LoginButton />}>
			{/* @ts-expect-error session.user is possibly null */}
			<Avatar image={session.user.image} name={session.user.name} />
		</Show>
	);
};
