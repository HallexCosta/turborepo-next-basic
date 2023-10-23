import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "300",
  display: "swap",
});
interface DescriptionProps {
  content: string;
}

export function Description({ content }: DescriptionProps) {
  return (
    <p className={`${poppins.className} text-sm text-gray-500 max-w-2xl`}>
      {content}
    </p>
  );
}
