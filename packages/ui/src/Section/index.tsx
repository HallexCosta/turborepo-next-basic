import { ReactNode } from 'react'

interface SectionProps {
  children?: ReactNode
  className?: string
}

export function Section({ children, className }: SectionProps) {
  return (
    <section className={`p-10 lg:w-full lg:px-2 flex flex-row ${className}`}>
      {children}
    </section>
  )
}
