import { Button } from "@components/base";
import { authClient } from "@lib/auth-client";
import { GoogleLogo } from "@components/icons";

const signIn = async () => {
	const { data = null } = authClient.useSession();

	await authClient.signIn.social({
		provider: "google",
		callbackURL: "/dashboard"
	});

	if (error) {
		throw new Error(`Google authentication error: [${error.code}] ${error.message}`);
	}
	if (!data.user) {
		throw new Error(`Google authentication returned:`, data);
	}

	console.log(`Received login user data`, data);
	// const user = {
	// 	userName: data.user.name,
	// 	email: data.user.email,
	// 	avatarUrl: data.user.image
	// };
	// setUser(user);
};

export const GoogleLogin = () => {
	return (
		<Button on:click={signIn} loadingText="Signing in..." width="100%">
			<GoogleLogo />
			&nbsp; Sign in with Google
		</Button>
	);
};
