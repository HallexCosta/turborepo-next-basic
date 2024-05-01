import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export const Body = (props: { children: ReactNode; className?: string }) => {
  return (
    <div
      className={twMerge(
        'grid gap-6 mb-6 grid-cols-1 md:grid-cols-4 items-center',
        props.className
      )}
    >
      {props.children}
    </div>
  )
}
