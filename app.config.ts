import { defineConfig } from "@solidjs/start/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	ssr: true,
	server: { baseURL: process.env.BASE_PATH, preset: "static" },

	vite: {
		plugins: [tsconfigPaths()]
	}
});
