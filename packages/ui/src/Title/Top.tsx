"use client";
import { Poppins } from "next/font/google";

import { useEffect, useState } from "react";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
});
interface Props {
  name: string;
}

export function Top({ name }: Props) {
  const [initAnimation, setInitAnimation] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimationComplete(true), 2000);
  }, []);


  useEffect(() => {
    console.log('fui chamado 2')
    setTimeout(() => {
      setAnimationComplete(!animationComplete)
      setInitAnimation(!animationComplete)
    }, 2000);
  }, [animationComplete]);


  return (
    <h1
      className={`${poppins.className} max-h-[62px] w-fit inline-block text-4xl lg:text-6xl font-semibold ${initAnimation ? 'animate-typewriter' : ''}
      text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-400 to-blue-400
    `}
      style={{
        borderRight: animationComplete ? "none" : "5px solid whitesmoke",
      }}
    >
      Hello, I{"'"}m {name},
    </h1>
  );
}
