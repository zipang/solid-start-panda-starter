// panda.config.ts
import { defineConfig } from "@pandacss/dev";

export default defineConfig({
	// Whether to use css reset
	preflight: false, // We'll use Pico CSS instead

	// Where to look for your css declarations
	include: ["./src/**/*.{js,jsx,ts,tsx}"],

	// Files to exclude
	exclude: [],

	// Generate CSS props for JSX framework
	jsxFramework: "solid",

	// Useful for theme customization
	theme: {
		extend: {}
	},

	// The output directory for your css system
	outdir: "styled-system"
});
