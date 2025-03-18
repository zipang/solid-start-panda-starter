import type { Component } from "solid-js";
import { Button, type ButtonProps } from "@components/base";
import { googleSignIn } from "@lib/Session";
import { GoogleLogo } from "@components/icons";

export const GoogleLogin: Component<ButtonProps> = (props) => (
	<Button
		variant="outline"
		loadingText="Signing in..."
		width="100%"
		{...props}
		on:click={googleSignIn}
	>
		<GoogleLogo />
		&nbsp; Sign in with Google
	</Button>
);
