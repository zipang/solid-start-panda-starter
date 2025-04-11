import type { Component } from "solid-js";
import type { IconProps } from ".";

export const FileIcon: Component<IconProps> = (props) => (
	<svg width={props.size || 32} height={props.size || 32} viewBox="0 0 512 512">
		<title>Folder</title>
		<g fill={props.color || "white"} style="stroke-width:5;stroke-linejoin:round">
			<path d="M 151,75 h 190 l20,20 v297 H 151 Z M 182,150 h 150 M 182,175 h 150 M 182,200 h 150 M 182,225 h 150 M 340,75 v 20 h 20" />
		</g>
	</svg>
);
