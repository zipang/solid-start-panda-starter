import { defineConfig } from "@solidjs/start/config";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
console.log(`Project root`, __dirname);

export default defineConfig({
	ssr: true,
	server: {
		baseURL: process.env.BASE_PATH,
		preset: "static"
	},

	vite: {
		resolve: {
			alias: {
				"@": resolve(__dirname, "./src"),
				"@components": resolve(__dirname, "./src/components"),
				"@styled-system": resolve(__dirname, "./styled-system")
			}
		}
	}
});
