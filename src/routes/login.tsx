import { Title } from "@solidjs/meta";
import { Container, Heading } from "@/components/base";
import { AppHeader } from "@/components/app";

const TITLE = "SolidJS + Panda UI Starter - LOGIN";

export default function About() {
	return (
		<main>
			<AppHeader />

			<Title>{TITLE}</Title>

			<Container>
				<Heading color="black">{TITLE}</Heading>
			</Container>
		</main>
	);
}
