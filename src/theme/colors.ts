// src/theme/colors.ts
import { defineTokens } from "@pandacss/dev";

function lighten(hsl: string, percent: number): string {
	const match = hsl.match(/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/);
	if (!match) return hsl;

	const h = Number.parseInt(match[1], 10);
	const s = Number.parseFloat(match[2]);
	let l = Number.parseFloat(match[3]);

	l = Math.min(100, l + percent); // Ensure luminosity doesn't exceed 100%

	return `hsl(${h}, ${s}%, ${l}%)`;
}

/**
 * Color tokens
 * @example: <Button bg="primary">
 */
export const colors = defineTokens.colors({
	primary: {
		value: "hsl(210, 100%, 50%)", // (blue)
		highlight: {
			value: lighten("hsl(210, 100%, 50%)", 20)
		}
	},
	success: {
		value: "hsl(140, 60%, 40%)", // (green)
		highlight: {
			value: lighten("hsl(140, 60%, 40%)", 20)
		}
	},
	warning: {
		value: "hsl(45, 100%, 50%)", // (yellow)
		highlight: {
			value: lighten("hsl(45, 100%, 50%)", 20)
		}
	},
	danger: {
		value: "hsl(0, 70%, 50%)", // (red)
		highlight: {
			value: lighten("hsl(0, 70%, 50%)", 20)
		}
	},
	info: {
		value: "hsl(190, 70%, 50%)", // (cyan)
		highlight: {
			value: lighten("hsl(190, 70%, 50%)", 20)
		}
	}
});
