import { Title } from "@solidjs/meta";
import { Container, Heading, Link, Text } from "@components/base";
import { AppHeader } from "@components/app";

const HomePage = () => {
	return (
		<main>
			<AppHeader />
			<Title>{HomePage.title}</Title>

			<Container marginTop="100px">
				<Heading color="black">{HomePage.title}</Heading>
				<Text color="#333">
					Visit&nbsp;
					<Link href="https://start.solidjs.com">start.solidjs.com</Link>&nbsp; to learn
					how to build SolidStart apps.
				</Text>
			</Container>
		</main>
	);
};

HomePage.title = "SolidJS + Panda UI Starter";

export default HomePage;
