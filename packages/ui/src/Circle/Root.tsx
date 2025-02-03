import type { ReactNode } from "react";
import { cx } from "../cx";

interface CircleSize {
	width: number;
	height: number;
}

interface CricleRootProps {
	children?: ReactNode;
	size?: "sm" | "md" | "lg" | CircleSize;
	className?: string;
}

export function Root({ children, size, className }: CricleRootProps) {
	className = className || "";
	let width, height;

	switch (size) {
		case "sm":
			width = 164;
			height = 164;
			break;
		case "md":
			width = 301;
			height = 301;
			break;
		case "lg":
			width = 532;
			height = 532;
			break;
		default:
			width = 532;
			height = 532;
			break;
	}

	if (typeof size !== "string") {
		width = size?.width;
		height = size?.height;
	}

	console.log(width, height);

	return (
		<div
			className={cx("border rounded-full border-cyan-500", className)}
			style={{ width, height }}
		>
			{children}
		</div>
	);
}
