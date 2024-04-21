import { ReactNode } from 'react'

interface RootProps {
  children: ReactNode
}
export function Root({ children }: RootProps) {
  return <li>{children}</li>
}
