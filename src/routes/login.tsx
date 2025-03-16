import { Title } from "@solidjs/meta";
import { Box, Container, Heading, VStack } from "@components/base";
import { AppHeader } from "@components/app";
import { GoogleLogin } from "@components/auth";

const TITLE = "SolidJS + Panda UI Starter - LOGIN";

export default function LoginPage() {
	return (
		<main>
			<AppHeader />

			<Title>{TITLE}</Title>

			<Box as="section" height="dvh">
				<Container>
					<Heading color="black">{TITLE}</Heading>
					<VStack minHeight="50vh">
						<GoogleLogin />
					</VStack>
				</Container>
			</Box>
		</main>
	);
}
