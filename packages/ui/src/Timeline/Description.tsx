import { ReactNode } from 'react'

interface DescriptionProps {
  children?: ReactNode
}

export function Description({ children }: DescriptionProps) {
  return (
    <p className="mb-3 text-neutral-500 dark:text-neutral-300 max-w-md">
      {children}
    </p>
  )
}
