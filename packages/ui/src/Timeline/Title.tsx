import { ReactNode } from "react";

interface TitleProps {
    children?: ReactNode
}

export function Title({children}: TitleProps) {
    return <h4 className="mb-1.5 text-xl font-semibold text-white">
    {children}
  </h4>
}