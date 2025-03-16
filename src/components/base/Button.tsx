// src/components/base/Button.tsx

import { styled, type HTMLStyledProps } from "@styled-system/jsx";
import { createSignal, Show, splitProps, type Component } from "solid-js";
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

const StyledButton = styled("button") as Component<ButtonProps>;

export const Button: Component<ButtonProps> = (props) => {
	const [localProps, rest] = splitProps(props, [
		"on:click",
		"onClick",
		"loading",
		"disabled",
		"loadingText",
		"children",
		"size",
		"variant"
	]);
	const { loading, disabled, loadingText, children, size = "md", variant = "solid" } = localProps;

	const [isLoading, setIsLoading] = createSignal(loading);

	const trulyDisabled = () => Boolean(isLoading() || disabled);

	const _clickHandler = localProps["on:click"] || localProps.onClick;

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
			class={`button ${variant} ${size}`}
			classList={{ loading: isLoading() }}
			disabled={trulyDisabled()}
			onClick={click}
			{...rest}
		>
			<Show when={isLoading()} fallback={children}>
				<Spinner />
				&nbsp;
				{loadingText}
			</Show>
		</StyledButton>
	);
};
