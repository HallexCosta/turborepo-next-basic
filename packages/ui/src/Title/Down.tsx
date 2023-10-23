import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
});

interface TitleDownProps {
  content: string;
}

export function Down({ content }: TitleDownProps) {
  return (
    <h1 className={`${poppins.className} text-white text-7xl font-semibold`}>
      {content}
    </h1>
  );
}
