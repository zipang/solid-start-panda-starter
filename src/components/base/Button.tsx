// src/components/base/Button.tsx

import { styled, type HTMLStyledProps } from "@styled-system/jsx";
import { createSignal, mergeProps, Show, splitProps, type Component } from "solid-js";
import { Spinner } from "./Spinner";

import "./button-styles.scss";

/**
 * Button props (similar to a block element)
 */
export interface ButtonProps extends HTMLStyledProps<"div"> {
	as?: "div" | "button" | "a";
	disabled?: boolean;
	loading?: boolean;
	loadingText?: string;
	variant?: "solid" | "outline" | "link";
	size?: "md" | "lg" | "xl" | "xxl";
}

const _DEFAULTS = {
	size: "md",
	variant: "solid",
	loadingText: "Loading...",
	disabled: false,
	loading: false
};

const StyledButton = styled("button") as Component<ButtonProps>;

export const Button: Component<ButtonProps> = (incoming) => {
	const [props, rest] = splitProps(mergeProps(_DEFAULTS, incoming), [
		"on:click",
		"onClick",
		"loading",
		"disabled",
		"loadingText",
		"children",
		"size",
		"variant"
	]);

	const [isLoading, setIsLoading] = createSignal(props.loading);

	const trulyDisabled = () => Boolean(isLoading() || props.disabled);

	const _clickHandler = props["on:click"] || props.onClick;

	const click = async (evt: MouseEvent) => {
		if (trulyDisabled() || !_clickHandler) {
			return;
		}
		// Before clicking me must disable the button to prevent multiple submission
		setIsLoading(true);
		// @ts-expect-error not callable??
		const result = await _clickHandler(evt);
		setIsLoading(false);
		return result;
	};

	return (
		<StyledButton
			class={`button ${props.variant} ${props.size} ${trulyDisabled() ? "disabled" : ""} ${props.loading || props.loading ? "loading" : ""}`}
			disabled={trulyDisabled()}
			onClick={click}
			{...rest}
		>
			<Show when={isLoading()} fallback={props.children}>
				<Spinner />
				&nbsp;
				{props.loadingText}
			</Show>
		</StyledButton>
	);
};
