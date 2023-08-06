import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});

export const Header = ({ text }: { text: string }) => {
  return <h1 className={poppins.className}>{text}</h1>;
};
