import type { ReactNode } from "react";
import { cx } from "../cx";

interface SectionProps {
	children?: ReactNode;
	className?: string;
}

export function Section({ children, className }: SectionProps) {
	return (
		<section
			className={cx("xl:p-10 lg:w-full lg:px-2 flex flex-row", className)}
		>
			{children}
		</section>
	);
}
