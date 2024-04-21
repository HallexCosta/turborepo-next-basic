'use client'
// import { Poppins } from "next/font/google";
import { TypeAnimation } from 'react-type-animation'

// const poppins = Poppins({
//   weight: "600",
//   subsets: ["latin"],
// });

interface TitleDownProps {
  messages: any
}

export function Down({ messages }: TitleDownProps) {
  return (
    <>
      <TypeAnimation
        className={`text-white text-5xl lg:text-7xl font-semibold`}
        sequence={messages}
      />
      {/* <h1 className={`${poppins.className} text-white text-5xl lg:text-7xl font-semibold`}>
      {content}
    </h1> */}
    </>
  )
}
