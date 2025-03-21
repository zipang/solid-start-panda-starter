import { createAuthClient } from "better-auth/client";

export const authClient = createAuthClient({
	baseURL: process.env.NODE_ENV === "development" ? "http://localhost:3000" : undefined,
	basePath: "/api/auth"
});
