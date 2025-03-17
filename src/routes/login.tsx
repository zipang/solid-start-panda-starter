import { Title } from "@solidjs/meta";
import { Box, Container, Heading, VStack } from "@components/base";
import { AppHeader } from "@components/app";
import { AppleLogin, GithubLogin, GoogleLogin, MicrosoftLogin } from "@components/auth";

const TITLE = "SolidJS + Panda UI Starter - LOGIN";

export default function LoginPage() {
	return (
		<main>
			<AppHeader />

			<Title>{TITLE}</Title>

			<Box as="section" height="dvh" bgColor="#eee">
				<Container>
					<Heading color="black">{TITLE}</Heading>
					<VStack
						border="2px solid #333"
						bgColor="white"
						minHeight="50vh"
						maxW="30rem"
						padding="2rem"
						gap="2rem"
					>
						<AppleLogin />
						<GithubLogin />
						<GoogleLogin />
						<MicrosoftLogin />
					</VStack>
				</Container>
			</Box>
		</main>
	);
}
