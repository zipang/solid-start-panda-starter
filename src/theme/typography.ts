import { defineTextStyles, defineTokens } from "@pandacss/dev";

export const fontSizes = defineTokens.fontSizes({
	xs: { value: "0.7rem" },
	sm: { value: "0.875rem" },
	md: { value: "1rem" },
	lg: { value: "1.25rem" },
	xl: { value: "1.75rem" },
	xxl: { value: "2.25rem" },
	"4xl": { value: "3rem" },
	"6xl": { value: "5rem" }
});

export const textStyles = defineTextStyles({
	xs: { value: { fontSize: "xs", lineHeight: "0.9rem" } },
	sm: { value: { fontSize: "sm", lineHeight: "1rem" } },
	md: { value: { fontSize: "md", lineHeight: "1.25rem" } },
	lg: { value: { fontSize: "lg", lineHeight: "1.75rem" } },
	xl: { value: { fontSize: "xl", lineHeight: "2rem" } },
	xxl: { value: { fontSize: "xxl", lineHeight: "2.4rem" } },
	"4xl": { value: { fontSize: "4xl", lineHeight: "3.2rem", letterSpacing: "-0.02em" } },
	"6xl": { value: { fontSize: "6xl", lineHeight: "5.2rem", letterSpacing: "-0.02em" } }
});
