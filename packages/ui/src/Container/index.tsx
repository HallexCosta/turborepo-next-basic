import { ReactNode } from "react";

interface ContainerProps {
  children?: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={`mx-auto xl:max-w-7xl w-full flex flex-col xl:flex-row ${className}`}
    >
      {children}
    </div>
  );
}
