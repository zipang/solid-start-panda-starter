import { authClient } from "./auth-client";
import { useSession } from "@components/auth/Session";

export type SocialProviderKey = "google" | "apple" | "github" | "microsoft";

/**
 * Extract the `?redirect` parameter from the current window URL
 */
function extractRedirectURL() {
	const currentLocation = new URL(window.location.href);
	const redirect = new URLSearchParams(currentLocation.search).get("redirect");

	if (redirect) {
		return new URL(redirect, currentLocation).href;
	}

	// No redirect : take the current URL as the redirect target
	return currentLocation.origin;
}

type SignInProps = typeof authClient.signIn.social;

const makeSocialSignIn = (provider: SocialProviderKey) => async (props: SignInProps) => {
	const session = useSession();
	session.update({
		state: "pending"
	});

	const resp = await authClient.signIn.social({
		...props,
		provider,
		callbackURL: extractRedirectURL()
	});

	console.log("makeSocialSignIn response", JSON.stringify(resp, null, "\t"));
};

export const googleSignIn = makeSocialSignIn("google");
export const appleSignIn = makeSocialSignIn("apple");
export const githubSignIn = makeSocialSignIn("github");
export const microsoftSignIn = makeSocialSignIn("microsoft");
