import { ReactNode } from "react";

export function Avatar({ children }: { children: ReactNode }) {
  return (
    <div className="aboslute max-w-[650px] max-h-[594px] right-8">
      {children}
    </div>
  );
}
