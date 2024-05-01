import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export const Header = (props: { children: ReactNode; className?: string }) => {
  return (
    <div className={twMerge('mb-4', props.className)}>{props.children}</div>
  )
}
