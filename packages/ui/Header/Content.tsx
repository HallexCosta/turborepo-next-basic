import { ReactNode } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "300",
  display: "swap",
});
interface HeaderContentProps {
  children: ReactNode;
  className: string;
}
export function Content({ children, className }: HeaderContentProps) {
  return (
    <div className={`${poppins.className} ${className} font-medium text-lg`}>
      {children}
    </div>
  );
}
