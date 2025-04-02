// panda.config.ts
import { defineConfig } from "@pandacss/dev";
import { fontSizes, textStyles } from "./src/theme/typography";
import { colors } from "./src/theme/colors";

export default defineConfig({
	// Whether to use css reset
	preflight: false, // We'll use Pico CSS instead

	// Where to look for your css declarations
	// Gemini: could you change the regex to include .stories as well?
	include: ["./src/**/*.{ts,tsx,stories.ts,stories.tsx}"],

	// Files to exclude
	exclude: [],

	// JSX framework
	jsxFramework: "solid",

	// Theme customization
	theme: {
		extend: {
			tokens: {
				colors,
				fontSizes
			},
			textStyles
		}
	},

	// Output directory for `panda codegen`
	outdir: "styled-system"
});
