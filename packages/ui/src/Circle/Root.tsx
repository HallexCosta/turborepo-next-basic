import { ReactNode } from "react";

interface CricleRootProps {
  children?: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Root({ children, size, className }: CricleRootProps) {
  className = className || "";
  let width, height;

  switch (size) {
    case "sm":
      width = 164;
      height = 164;
      break;
    case "md":
      width = 301;
      height = 301;
      break;
    case "lg":
      width = 532;
      height = 532;
      break;
    default:
      width = 532;
      height = 532;
      break;
  }

  console.log(width, height);

  return (
    <div
      className={`border rounded-full border-cyan-500 ${className}`}
      style={{ width, height }}
    >
      {children}
    </div>
  );
}
