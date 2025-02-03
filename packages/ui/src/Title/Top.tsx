"use client";
// import { Poppins } from "next/font/google";
import { TypeAnimation } from "react-type-animation";

import { useEffect, useState } from "react";
import { Circle } from "../Circle";
import { cx } from "../cx";

// const poppins = Poppins({
//   weight: "600",
//   subsets: ["latin"],
// });
interface Props {
	messages: any;
}

export function Top({ messages, children }: Props) {
	const [initAnimation, setInitAnimation] = useState(false);
	const [animationComplete, setAnimationComplete] = useState(false);

	useEffect(() => {
		setTimeout(() => setAnimationComplete(true), 2000);
	}, []);

	useEffect(() => {
		// setTimeout(() => {
		// 	setAnimationComplete(!animationComplete);
		// 	setInitAnimation(true);
		// }, 2000);
	}, [animationComplete]);

	return (
		<div className={"flex items-center justify-start gap-8"}>
			<TypeAnimation
				className={`max-h-[62px] w-fit inline-block text-4xl lg:text-6xl font-semibold
      text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-400 to-blue-400`}
				sequence={messages}
			/>

			{animationComplete && (
				<Circle.Root size={{ width: 72, height: 72 }} className="lg:hidden">
					<Circle.BackgroundImage url="https://github.com/hallexcosta.png" />
				</Circle.Root>
			)}
			{/* <h1
      className={`${poppins.className} max-h-[62px] w-fit inline-block text-4xl lg:text-6xl font-semibold ${initAnimation ? 'animate-typewriter' : ''}
      text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-400 to-blue-400
    `}
      style={{
        borderRight: animationComplete ? "none" : "5px solid whitesmoke",
      }}
    >
      Hello, I{"'"}m {name},
    </h1> */}
		</div>
	);
}
