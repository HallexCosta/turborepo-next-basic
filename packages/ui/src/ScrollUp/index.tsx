"use client";

import { Tooltip } from "@nextui-org/tooltip";
import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "../Icons/ArrowUp";

export function ScrollUp() {
	const ref = useRef<HTMLDivElement>(null);
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	const handleScroll = (e) => {
		console.log(e);
		setX(window.scrollX);
		setY(window.scrollY);
	};
	// useEffect(() => {
	// 	window.addEventListener("on", handleScroll);

	// 	return () => {
	// 		window.removeEventListener("scroll", handleScroll);
	// 	};
	// }, []);

	const goToTop = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	};

	return (
		<Tooltip
			content="Scroll to top"
			showArrow={true}
			className="
        bg-gradient-to-r from-purple-500 via-blue-600 to-blue-400 
        text-white p-4 rounded-lg
      "
		>
			<div
				className="absolute z-20 right-10 bottom-60 cursor-pointer scroll-smooth"
				onClick={goToTop}
				style={{ userSelect: "none", transform: `translate(${x}px, ${y}px)` }}
			>
				<div
					className={`w-14 h-14 flex items-center justify-center rounded-full 
          bg-gradient-to-r from-purple-600 via-indigo-400 to-blue-400 
          cursor-pointer pointer-events-none
        `}
				>
					<ArrowUp />
				</div>
			</div>
		</Tooltip>
	);
}
