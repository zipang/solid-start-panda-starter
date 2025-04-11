import { authClient } from "@lib/auth-client";
import { useContext, type ParentComponent } from "solid-js";
import { createStore } from "solid-js/store";
import { isServer } from "solid-js/web";
import {
	SESSION_CONTEXT,
	type EmptySession,
	type SessionState,
	type SessionUser
} from "./SessionContext";

const EMPTY_SESSION = {
	state: "empty",
	user: null,
	token: null,
	created: null,
	expires: null
} satisfies EmptySession;

export const useSession = () => {
	const sessionContext = useContext(SESSION_CONTEXT);

	if (!sessionContext) {
		throw new Error("`useSession()` must be wrapped in a <SessionProvider />");
	}

	return sessionContext;
};

export const SessionProvider: ParentComponent = (props) => {
	const [observableSession, setObservableSession] = createStore<SessionState>(EMPTY_SESSION);

	const isEmpty = () => observableSession.state === "empty";
	const isPending = () => observableSession.state === "pending";
	const isLive = () => observableSession.state === "alive";
	const user = () => observableSession.user;

	const signOut = async () => {
		authClient.signOut();
		setObservableSession(EMPTY_SESSION);
	};

	const data = () => {
		return observableSession.state === "empty" ? null : observableSession;
	};

	const refresh = async () => {
		if (isServer) {
			return;
		}

		if (observableSession.state !== "alive") {
			setObservableSession({ state: "pending" });
		}

		authClient
			.getSession()
			.then(({ data, error }) => {
				console.log("Session retrieval", data, error);
				if (data?.user) {
					const user = data.user as SessionUser;
					setObservableSession({
						state: "alive",
						user,
						token: data.session.token,
						created: data.session.createdAt.toISOString(),
						expires: data.session.expiresAt.toISOString()
					});

					return;
				}
				if (error) {
					throw error;
				}
				setObservableSession({ state: "empty" });
				console.log("Set session to empty", observableSession.state);
			})
			.catch((error) => {
				console.error(`Session retrieval failed with error : ${error.message}`, error);
				setObservableSession(EMPTY_SESSION);
			});
	};

	const update = (session: Partial<SessionState> | null) => {
		if (session === null) {
			setObservableSession(EMPTY_SESSION);
			return;
		}

		setObservableSession(session);
	};

	console.log("Creating SessionContext", observableSession.state);

	return (
		<SESSION_CONTEXT.Provider
			value={{
				data,
				isEmpty,
				isPending,
				isLive,
				user,
				refresh,
				signOut,
				update
			}}
		>
			{props.children}
		</SESSION_CONTEXT.Provider>
	);
};
