import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Root({ children }: Props) {
  return <div className="flex flex-col gap-6 mb-8">{children}</div>;
}
