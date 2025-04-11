import { createContext } from "solid-js";

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
	 * Access the internal session object or NULL if the session is not live
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

const EMPTY_SESSION_CONTEXT = {
	data: () => null,
	user: () => null,
	refresh: async () => {},
	signOut: async () => {},
	isEmpty: () => true,
	isPending: () => false,
	isLive: () => false,
	update: () => null
} satisfies SessionContext;

export const SESSION_CONTEXT = createContext<SessionContext>(EMPTY_SESSION_CONTEXT);
