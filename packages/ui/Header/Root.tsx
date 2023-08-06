import { ReactNode } from "react";

interface HeaderRootProps {
  children: ReactNode;
}
export function Root({ children }: HeaderRootProps) {
  return (
    <header className="h-28 flex items-center justify-between">
      {children}
    </header>
  );
}
