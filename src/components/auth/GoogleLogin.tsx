import { Button } from "@components/base";
import { authClient } from "@lib/auth-client";
import { GoogleLogo } from "@components/icons";

const signIn = async () => {
	await authClient.signIn.social({
		provider: "google",
		callbackURL: "/dashboard"
	});
};

export const GoogleLogin = () => {
	return (
		<Button variant="outline" on:click={signIn} loadingText="Signing in..." width="100%">
			<GoogleLogo />
			&nbsp; Sign in with Google
		</Button>
	);
};
