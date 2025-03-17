import { betterAuth } from "better-auth";

const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } =
	process.env;

if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET || !GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) {
	throw new Error(`Missing environnement variables. Add the required variables to your env.`);
}

export const auth = betterAuth({
	basePath: "/api/auth",
	session: {
		// @see https://www.better-auth.com/docs/guides/optimizing-for-performance#cookie-cache
		cookieCache: {
			enabled: true,
			maxAge: 5 * 60, // Cache duration in seconds
		}
	},
	socialProviders: {
		github: {
			clientId: GITHUB_CLIENT_ID,
			clientSecret: GITHUB_CLIENT_SECRET
		},
		google: {
			clientId: GOOGLE_CLIENT_ID,
			clientSecret: GOOGLE_CLIENT_SECRET
		}
	}
});
