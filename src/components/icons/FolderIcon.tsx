import type { Component } from "solid-js";
import type { IconProps } from ".";

export const FolderIcon: Component<IconProps> = (props) => (
	<svg width={props.size || 32} height={props.size || 32} viewBox="0 0 512 512">
		<title>Folder</title>
		<g fill={props.color || "white"} style="stroke-width:5;stroke-linejoin:round">
			<path d="M 107,105 h 297 v210 H 105 Z M 127,105 v -18 h 160 v 18 M 346,315 404,257" />
		</g>
	</svg>
);
