import { Heading, HStack, Link, Spacer, Text } from "@components/base";

export const AppHeader = () => (
	<HStack
		id="main-header"
		as="header"
		justifyContent="space-between"
		bgColor="white"
		px="2rem"
		position="sticky"
		top="0"
		right="0"
		left="0"
		zIndex="100"
	>
		<HStack role="banner" alignItems="baseline">
			<Link href="/" aria-label="home">
				<Heading>My App</Heading>
			</Link>
			<Text as="em">Create something great</Text>
		</HStack>
		<Spacer />
		<Link href="/login" preload={true} fontWeight="bolder" textDecoration="none">
			LOGIN
		</Link>
	</HStack>
);
