import { authClient } from "@lib/auth-client";
import { createContext, createSignal, useContext, type ParentComponent } from "solid-js";
import { createStore } from "solid-js/store";
import { isServer } from "solid-js/web";

export type SessionState = "empty" | "pending" | "alive";
export interface SessionUser {
	id: string;
	name: string;
	email: string;
	image?: string;
}
export interface EmptySession {
	state: "empty";
	user: null;
	token: null;
	created: null;
	expires: null;
}
export interface PendingSession {
	state: "pending";
	user: null;
	token: null;
	created: null;
	expires: null;
}
export interface LiveSession {
	state: "alive";
	user: SessionUser;
	token: string;
	created: string;
	expires: string;
}

export interface SessionContext {
	/**
	 * Retrieves the _current_ session state while optionally forcing a refresh
	 */
	session: (prop: { forceRefresh?: boolean }) => LiveSession | PendingSession | null;
	/**
	 * Currently TRUE when nothing is known about the session or when there is NO logged user
	 */
	isEmpty: () => boolean;
	/**
	 * Shortly TRUE after a new signIn() before we retrieve the session data
	 */
	isPending: () => boolean;
	/**
	 * TRUE when the session is active with a logged user
	 */
	isLive: () => boolean;
	/**
	 * Retrieves the _current_ user (not null only when session is alive)
	 */
	user: () => SessionUser | null;
	/**
	 * Force refreshing the current session state
	 */
	refresh: () => Promise<void>;
	/**
	 * Close the current session and force the user to log in again
	 */
	signOut: () => Promise<void>;
	/**
	 * Update the session state
	 */
	update: (session: Partial<LiveSession | PendingSession> | null) => void;
}

const EMPTY_SESSION = {
	state: "empty",
	user: null,
	token: null,
	created: null,
	expires: null
} satisfies EmptySession;

const EMPTY_SESSION_CONTEXT = {
	session: () => null,
	user: () => null,
	refresh: async () => {},
	signOut: async () => {},
	isEmpty: () => true,
	isPending: () => false,
	isLive: () => false,
	update: () => null
} satisfies SessionContext;

const SESSION_CONTEXT = createContext<SessionContext>(EMPTY_SESSION_CONTEXT);

export const useSession = () => {
	if (isServer) {
		console.log("Returning EMPTY_SESSION for server");
		return EMPTY_SESSION_CONTEXT;
	}

	const sessionContext = useContext(SESSION_CONTEXT);

	if (!sessionContext) {
		throw new Error("`useSession()` must be wrapped in a <SessionProvider />");
	}

	return sessionContext;
};

export const SessionProvider: ParentComponent = (props) => {
	const [observableSession, setObservableSession] = createStore<
		LiveSession | PendingSession | EmptySession
	>(EMPTY_SESSION);

	const isEmpty = () => observableSession.state === "empty";
	const isPending = () => observableSession.state === "pending";
	const isLive = () => observableSession.state === "alive";
	const user = () => observableSession.user;

	const signOut = async () => {
		setObservableSession(EMPTY_SESSION);
		authClient.signOut();
	};

	const session = ({ forceRefresh = false }) => {
		if (forceRefresh) {
			refresh();
		}
		return observableSession.state === "empty" ? null : observableSession;
	};

	const refresh = async () => {
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
				setObservableSession(EMPTY_SESSION);
			})
			.catch((error) => {
				console.error(`Session retrieval failed with error : ${error.message}`, error);
				setObservableSession(EMPTY_SESSION);
			});
	};

	const update = (session: Partial<LiveSession | PendingSession> | null) => {
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
				session,
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
