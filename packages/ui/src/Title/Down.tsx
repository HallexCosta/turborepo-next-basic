'use client'
import { Poppins } from "next/font/google";
import { TypeAnimation } from "react-type-animation";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
});

interface TitleDownProps {
  content: string;
}

export function Down({ content }: TitleDownProps) {
  return (
    <>
    <TypeAnimation
      className={`${poppins.className} text-white text-5xl lg:text-7xl font-semibold`}
      sequence={[
        1300,
        'Backend developer',
        1300,
        'Fullstack BE-heavy developer on focus backend'
      ]}
    />
    {/* <h1 className={`${poppins.className} text-white text-5xl lg:text-7xl font-semibold`}>
      {content}
    </h1> */}
    </>
  );
}
