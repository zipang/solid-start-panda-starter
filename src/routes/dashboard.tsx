import { Title } from "@solidjs/meta";
import { Box, Button, Container, Heading, Text, VStack } from "@components/base";
import { AppHeader } from "@components/app";
import { protected$, useSession } from "@components/auth";

const TITLE = "SolidJS + Panda UI Starter - DASHBOARD";

const DashboardPage = protected$(() => {
	const session = useSession();

	return (
		<main>
			<AppHeader />

			<Title>{TITLE}</Title>

			<Box as="section" height="dvh" border="1px solid #ccc">
				<Container>
					<Heading color="black">{TITLE}</Heading>
					<VStack>
						<Text>
							This is a protected route. Try login out to be automatically redirect to
							the login page.
						</Text>
						<Button variant="outline" size="xl" onClick={() => session.signOut()}>
							Logout
						</Button>
						<Text>
							Try clicking the button below to set the logged user to John DOE.
						</Text>
						<Button
							variant="outline"
							size="xl"
							onClick={() =>
								session.update({
									user: {
										id: "1",
										email: "john.doe@johns.com",
										name: "John DOE",
										image: "https://avatars.githubusercontent.com/u/149215215?v=4"
									}
								})
							}
						>
							Log John Doe
						</Button>
					</VStack>
				</Container>
			</Box>
		</main>
	);
}, "/dashboard");

export default DashboardPage;
