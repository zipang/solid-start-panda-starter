import type { Component } from "solid-js";
import { Button, type ButtonProps } from "@components/base";
import { microsoftSignIn } from "@lib/social-login";
import { MicrosoftLogo } from "@components/icons";

export const MicrosoftLogin: Component<ButtonProps> = (props) => (
	<Button
		variant="outline"
		loadingText="Signing in..."
		width="100%"
		{...props}
		on:click={microsoftSignIn}
	>
		<MicrosoftLogo />
		&nbsp;Sign in with Microsoft
	</Button>
);
