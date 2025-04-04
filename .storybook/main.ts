import { dirname, join } from "node:path";
import type { StorybookConfig } from "storybook-solidjs-vite";
import { mergeConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const config: StorybookConfig = {
	stories: ["../src/**/*.stories.@(ts|tsx)"],
	addons: [getAbsolutePath("@storybook/addon-essentials")],
	framework: {
		name: getAbsolutePath("storybook-solidjs-vite"),
		options: {}
	},
	async viteFinal(config) {
		return mergeConfig(config, {
			plugins: [tsconfigPaths()]
		});
	}
};
export default config;

function getAbsolutePath(value: string): any {
	return dirname(require.resolve(join(value, "package.json")));
}
