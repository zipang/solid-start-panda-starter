import { Suspense } from "solid-js";
import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { SessionProvider } from "@components/auth/SessionProvider";
import "./app.css";

export default function App() {
	return (
		<Router
			root={(props) => (
				<SessionProvider>
					<MetaProvider>
						<Suspense>{props.children}</Suspense>
					</MetaProvider>
				</SessionProvider>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
