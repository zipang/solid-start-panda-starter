import { createContext } from "solid-js";
import { createStore } from "solid-js/store";
import { authClient } from "./auth-client";

export interface Session {
	state: "alive";
	user: {
		name: string;
		email: string;
		image: string;
	};
	token: string;
	created: string;
	expires: string;
}
export interface PendingSession {
	state: "pending" | "empty";
	user: null;
	token: null;
	created: null;
	expires: null;
}
const PENDING_SESSION = {
	state: "pending",
	user: null,
	token: null,
	created: null,
	expires: null
} as PendingSession;

export type SocialProviderKey = "apple" | "google" | "github" | "microsoft";

export const [session, setSession] = createStore<Session | PendingSession>(PENDING_SESSION);

export const useSession: () => Session | PendingSession | null = () => {
	authClient.getSession().then((resp) => {
		console.log("session retrieval", resp, session);
		const { error, data } = resp;

		if (error) {
			console.error("Received error while retrieving session", error);
			setSession({ state: "empty", user: null, token: null, created: null, expires: null });
		} else if (data) {
			const { user, session } = data;
			console.log("Received User data from session", user);
			setSession({
				user,
				token: session.token,
				created: session.createdAt.toISOString(),
				expires: session.expiresAt.toISOString(),
				state: "alive"
			} as Session);
		}
	});

	return session.state === "empty" ? null : session;
};

/**
 * Extract the `?redirect` parameter from the current window URL
 */
function extractRedirectURL() {
	const currentLocation = new URL(window.location.href);
	const redirect = new URLSearchParams(currentLocation.search).get("redirect");

	if (redirect) {
		return new URL(redirect, currentLocation).href;
	}

	// Take the current URL as the redirect target
	return currentLocation.origin;
}

const makeSocialSignIn = (provider: SocialProviderKey) => async (props) => {
	setSession({ ...PENDING_SESSION, state: "pending" });
	const resp = await authClient.signIn.social({
		...props,
		provider,
		callbackURL: extractRedirectURL()
	});

	console.log("makeSocialSignIn response", JSON.stringify(resp, null, "\t"));
	console.log("makeSocialSignIn session", JSON.stringify(session, null, "\t"));
};

export const googleSignIn = makeSocialSignIn("google");
export const appleSignIn = makeSocialSignIn("apple");
export const githubSignIn = makeSocialSignIn("github");
export const microsoftSignIn = makeSocialSignIn("microsoft");
