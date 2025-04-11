import { Match, Switch, type Component } from "solid-js";
import { useLocation, useNavigate } from "@solidjs/router";
import { useSession } from "./SessionProvider";
import { isServer } from "solid-js/web";

export interface ProtectedRouteProps extends Record<string, any> {
	loading?: boolean;
}

type ProtectedRouteHOC<P extends ProtectedRouteProps> = (c: Component<P>) => Component<P>;

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
	session.refresh();

	return (
		<Switch fallback={<RedirectToLogin />}>
			<Match when={isServer || session.isPending()}>
				<RouteComponent {...props} loading />
			</Match>
			<Match when={session.isLive()}>
				<RouteComponent {...props} />
			</Match>
		</Switch>
	);
};
