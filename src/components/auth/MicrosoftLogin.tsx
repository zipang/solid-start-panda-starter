import { Button } from "@components/base";
import { authClient } from "@lib/auth-client";
import { MicrosoftLogo } from "@components/icons";

const signIn = async () => {
	await authClient.signIn.social({
		provider: "microsoft",
		callbackURL: "/dashboard"
	});
};

export const MicrosoftLogin = () => {
	return (
		<Button variant="outline" on:click={signIn} loadingText="Signing in..." width="100%">
			<MicrosoftLogo />
			&nbsp; Sign in with Microsoft
		</Button>
	);
};
