import { lazy, type ParentComponent, Show, type Component, type ComponentProps } from "solid-js";
import { useSession, setSession, type Session } from "@lib/SessionContext";

type ProtectedRouteHOC = (c: Component) => Component;

const LoginPage = lazy(() => import("@routes/login"));

export const protectedRoute: ProtectedRouteHOC =
	(RouteComponent) => (props: ComponentProps<typeof RouteComponent>) => {
		const session = useSession();

		return (
			<Show when={session} fallback={<LoginPage />}>
				<Show when={session.user} fallback={<div>Loading session...</div>}>
					<RouteComponent {...props} />
				</Show>
			</Show>
		);
	};

// export const SessionProvider: ParentComponent = ({ children }) => (
// 	<SessionContext.Provider value={{ setSession, useSession }}>{children}</SessionContext.Provider>
// );
