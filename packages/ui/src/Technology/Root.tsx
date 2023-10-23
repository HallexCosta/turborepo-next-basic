import { ReactNode } from "react";
// import { Poppins } from "next/font/google";

// const poppins = Poppins({
//   weight: "600",
//   subsets: ["latin"],
//   display: "swap",
// });

interface Props {
  children: ReactNode;
}

export function Root({ children }: Props) {
  return <div className="flex w-full gap-4 items-center">{children}</div>;
}
