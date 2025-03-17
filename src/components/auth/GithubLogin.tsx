import { Button } from "@components/base";
import { authClient } from "@lib/auth-client";
import { GithubLogo } from "@components/icons";

const signIn = async () => {
	await authClient.signIn.social({
		provider: "github",
		callbackURL: "/dashboard"
	});
};

export const GithubLogin = () => {
	return (
		<Button variant="outline" on:click={signIn} loadingText="Signing in..." width="100%">
			<GithubLogo />
			&nbsp; Sign in with Github
		</Button>
	);
};
