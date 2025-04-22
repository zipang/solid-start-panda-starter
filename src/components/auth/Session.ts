import { authClient } from "@lib/auth-client";
import { Store, useStore } from "@tanstack/solid-store";
import { isServer } from "solid-js/web";

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

export type SessionState = EmptySession | PendingSession | LiveSession;

export interface SessionContext {
	/**
	 * Access the internal session object or _NULL_ if the session is not live
	 */
	data: () => LiveSession | PendingSession | null;
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
} as SessionState;

const PENDING_SESSION = {
	state: "pending",
	user: null,
	token: null,
	created: null,
	expires: null
} as SessionState;

const store = new Store(EMPTY_SESSION);

/**
 * A reactive hook to access the current session data and manipulate it
 */
export const useSession: () => SessionContext = () => {
	const getSession = useStore(store);

	const isEmpty = () => getSession().state === "empty";
	const isPending = () => getSession().state === "pending";
	const isLive = () => getSession().state === "alive";
	const user = () => getSession().user;

	const signOut = async () => {
		authClient.signOut();
		store.setState(() => EMPTY_SESSION);
	};

	const data = () => {
		return getSession().state === "empty" ? null : getSession;
	};

	const refresh = async () => {
		if (isServer) {
			return;
		}

		if (getSession().state !== "alive") {
			store.setState(() => PENDING_SESSION);
		}

		authClient
			.getSession()
			.then(({ data, error }) => {
				console.log("Session retrieval", data, error);
				if (data?.user) {
					const user = data.user as SessionUser;
					store.setState(() => ({
						state: "alive",
						user,
						token: data.session.token,
						created: data.session.createdAt.toISOString(),
						expires: data.session.expiresAt.toISOString()
					}));

					return;
				}
				if (error) {
					throw error;
				}
				store.setState(() => EMPTY_SESSION);
				console.log("Set session to empty", getSession().state);
			})
			.catch((error) => {
				console.error(
					`Session retrieval failed with error : ${error.message}`,
					error
				);
				store.setState(() => EMPTY_SESSION);
			});
	};

	const update = (session: Partial<SessionState> | null) => {
		if (session === null) {
			store.setState(() => EMPTY_SESSION);
			return;
		}

		store.setState((prev) => ({ ...prev, session }));
	};

	return {
		data,
		isEmpty,
		isPending,
		isLive,
		user,
		refresh,
		signOut,
		update
	} as SessionContext;
};
