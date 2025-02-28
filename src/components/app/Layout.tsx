import { MetaProvider, Title } from "@solidjs/meta";
import { Component, JSX, Suspense } from "solid-js";

export interface AppLayoutProps {
	title: string;
	lang?: string;
	children: JSX.Element;
}

export const AppLayout: Component<AppLayoutProps> = ({ title, lang = "en", children }) => (
	<MetaProvider>
		<Title>{title}</Title>

		<Suspense>{children}</Suspense>
	</MetaProvider>
);
