import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

interface Props {
  text: string;
}

export function Content({ text }: Props) {
  return (
    <span className={`${poppins.className} text-3xl text-white`}>{text}</span>
  );
}
