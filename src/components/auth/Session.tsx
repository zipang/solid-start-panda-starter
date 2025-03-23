import { lazy, Show, type Component } from "solid-js";
import { useSession } from "./SessionProvider";
import { useLocation, useNavigate } from "@solidjs/router";

type ProtectedRouteHOC<P extends Record<string, any>> = (c: Component<P>) => Component<P>;

/**
 * When the session is not live, we must redirect to the login page
 * with the parameter telling which route was asked to return to it
 * after a successful login
 */
const RedirectToLogin = () => {
	const location = useLocation();
	const navigate = useNavigate();

	throw navigate(`/login?redirect=${location.pathname}`, { replace: true });
};

export const protected$: ProtectedRouteHOC<Record<string, any>> = (RouteComponent) => (props) => {
	const session = useSession();

	return (
		<Show when={!session.isEmpty()} fallback={<RedirectToLogin />}>
			<Show when={session.isLive()} fallback={<div>Loading session...</div>}>
				<RouteComponent {...props} />
			</Show>
		</Show>
	);
};
