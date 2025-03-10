import { Title } from "@solidjs/meta";
import { Box, Container, Heading, Link, Text } from "@components/base";
import { AppHeader } from "@components/app";
import { BackgroundImage, HeroSection, TwoColumnsSection } from "@components/ui";

const HomePage = () => {
	return (
		<main>
			<AppHeader />
			<Title>{HomePage.title}</Title>

			<HeroSection
				title={HomePage.title}
				subtitle="Create something great"
				backgroundImage={{
					src: "/wintery-sunburst.svg",
					mode: "cover"
				}}
			/>

			<TwoColumnsSection columns={2}>
				<BackgroundImage src="/panda-logo.svg" />

				<>
					<Heading size="xxl">Panda CSS</Heading>
					<Text>
						Panda CSS is an incredible CSS-in-JS solution with no javascript in the
						final build page. Panda CSS rely on a pre-compilation stage to generate only
						the needed CSS class names in the final bundle.
					</Text>
				</>
			</TwoColumnsSection>

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
