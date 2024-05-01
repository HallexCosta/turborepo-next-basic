import { twMerge } from 'tailwind-merge'
import { type } from 'node:os'
import { ReactNode } from 'react'

type RootProps = {
  children: ReactNode
  className?: string
}

export const Root = (props: RootProps) => {
  return (
    <div
      className={twMerge(
        'grid grid-cols-1 bg-gray-600 p-4 mb-4 rounded-lg',
        props.className
      )}
    >
      {props.children}
    </div>
  )
}
