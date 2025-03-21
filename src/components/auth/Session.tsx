import { lazy, Show, type Component } from "solid-js";
import { useSession } from "./SessionProvider";

type ProtectedRouteHOC<P extends Record<string, any>> = (c: Component<P>) => Component<P>;

const Login = lazy(() => import("@routes/login"));

export const protected$: ProtectedRouteHOC<Record<string, any>> = (RouteComponent) => (props) => {
	const session = useSession();

	return (
		<Show when={!session.isEmpty()} fallback={<Login />}>
			<Show when={session.isLive()} fallback={<div>Loading session...</div>}>
				<RouteComponent {...props} />
			</Show>
		</Show>
	);
};
