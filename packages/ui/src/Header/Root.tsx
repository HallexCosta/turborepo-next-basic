import { ReactNode } from 'react'

interface HeaderRootProps {
  children: ReactNode
}
export function Root({ children }: HeaderRootProps) {
  return (
    <header className="p-10 lg:p-0 h-28 flex items-center justify-between">
      {children}
    </header>
  )
}
