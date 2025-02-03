import type { ReactNode } from "react";
import { cx } from "../cx";

interface ContainerProps {
	children?: ReactNode;
	className?: string;
}

export function Container({ children, className }: ContainerProps) {
	return (
		<div
			className={cx(
				`mx-auto xl:max-w-7xl w-full flex flex-col xl:flex-row xl:px-4`,
				className,
			)}
		>
			{children}
		</div>
	);
}
