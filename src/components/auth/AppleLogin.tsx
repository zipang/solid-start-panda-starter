import { Button } from "@components/base";
import { authClient } from "@lib/auth-client";
import { AppleLogo } from "@components/icons";

const signIn = async () => {
	await authClient.signIn.social({
		provider: "apple",
		callbackURL: "/dashboard"
	});
};

export const AppleLogin = () => {
	return (
		<Button variant="outline" on:click={signIn} loadingText="Signing in..." width="100%">
			<AppleLogo />
			&nbsp; Sign in with Apple
		</Button>
	);
};
