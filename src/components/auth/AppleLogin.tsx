import type { Component } from "solid-js";
import { Button, type ButtonProps } from "@components/base";
import { appleSignIn } from "@lib/social-login";
import { AppleLogo } from "@components/icons";

export const AppleLogin: Component<ButtonProps> = (props) => (
	<Button
		variant="outline"
		loadingText="Signing in..."
		width="100%"
		{...props}
		on:click={appleSignIn}
	>
		<AppleLogo />
		&nbsp;Sign in with Apple
	</Button>
);
