import type { Component } from "solid-js";
import { Button, type ButtonProps } from "@components/base";
import { githubSignIn } from "@lib/social-login";
import { GithubLogo } from "@components/icons";

export const GithubLogin: Component<ButtonProps> = (props) => (
	<Button
		variant="outline"
		loadingText="Signing in..."
		width="100%"
		{...props}
		on:click={githubSignIn}
	>
		<GithubLogo />
		&nbsp;Sign in with Github
	</Button>
);
