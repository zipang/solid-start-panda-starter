import { type Component, For } from "solid-js";
import { Button, VStack } from "@components/base";

// Define the type for the login providers
type LoginProvider = "github" | "google" | "apple";

export interface SocialLoginDialogProps {
	providers: LoginProvider[];
}

export const SocialLoginDialog: Component<SocialLoginDialogProps> = (props) => {
	const getButtonStyle = (provider: LoginProvider) => {
		switch (provider) {
			case "github":
				return {
					backgroundColor: "#333",
					color: "#FFF",
					borderColor: "#333",
					text: "Login with GitHub"
				};
			case "google":
				return {
					backgroundColor: "#4285F4",
					color: "#FFF",
					borderColor: "#4285F4",
					text: "Login with Google"
				};
			case "apple":
				return {
					backgroundColor: "#000",
					color: "#FFF",
					borderColor: "#000",
					text: "Login with Apple"
				};
			default:
				return {};
		}
	};

	return (
		<VStack padding="16px" backgroundColor="white" border="1px solid #ccc">
			<For each={props.providers}>
				{(provider) => {
					const style = getButtonStyle(provider);
					return (
						<Button
							backgroundColor={style.backgroundColor}
							color={style.color}
							border={style.borderColor}
							padding="12px 24px"
							fontSize="16px"
							width="100%"
						>
							{style.text}
						</Button>
					);
				}}
			</For>
		</VStack>
	);
};
