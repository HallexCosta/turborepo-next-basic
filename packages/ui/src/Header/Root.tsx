import type { ReactNode } from "react";
import { cx } from "../cx";

interface HeaderRootProps {
	children: ReactNode;
	className: string;
}
export function Root({ children, className }: HeaderRootProps) {
	return (
		<header
			className={cx(
				"max-w-screen-xl mt-4 p-10 lg:p-0 h-28 flex items-center justify-between",
				className,
			)}
		>
			{children}
		</header>
	);
}
