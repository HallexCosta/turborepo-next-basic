import { ReactNode } from "react";

interface DotProps {
  children?: ReactNode;
}

export function Dot({ children }: DotProps) {
  return (
    <div className="flex-start flex items-center pt-3 relative">
      <div className="-ml-[14px] mr-3 h-6 w-6 rounded-full bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-400"></div>
      <p className="text-sm text-neutral-500 dark:text-neutral-300">
        {children}
      </p>
    </div>
  );
}
