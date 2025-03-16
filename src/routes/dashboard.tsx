import { Title } from "@solidjs/meta";
import { Box, Button, Container, Heading, Text, VStack } from "@components/base";
import { AppHeader } from "@components/app";
import { protectedRoute } from "@components/auth/Session";

const TITLE = "SolidJS + Panda UI Starter - DASHBOARD";

const LoginPage = protectedRoute(() => {
	return (
		<main>
			<AppHeader />

			<Title>{TITLE}</Title>

			<Box as="section" height="dvh" border="1px solid #ccc">
				<Container>
					<Heading color="black">{TITLE}</Heading>
					<Text>
						This is a protected route. Try login out to be automatically redirect to the
						login page.
					</Text>
					<VStack>
						<Button variant="outline" size="xl">
							Logout
						</Button>
					</VStack>
				</Container>
			</Box>
		</main>
	);
});

export default LoginPage;
