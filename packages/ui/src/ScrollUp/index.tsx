"use client";
import { ArrowDown } from "phosphor-react";

export function ScrollUp() {
  return (
    <div
      onClick={() => alert("moveToUp")}
      className={`
      w-14 h-14 flex items-center justify-center rounded-full 
      bg-gradient-to-r from-purple-600 via-indigo-400 to-blue-400 
      cursor-pointer absolute right-0 bottom-0
      `}
    >
      <ArrowDown className="rotate-180" color="white" width={20} />
    </div>
  );
}
