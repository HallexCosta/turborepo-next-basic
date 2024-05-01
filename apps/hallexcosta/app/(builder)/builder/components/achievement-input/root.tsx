import { twMerge } from 'tailwind-merge'
import { ReactNode } from 'react'

type Props = {
  className?: string
  children: ReactNode
}

export const Root = (props: Props) => {
  return <div className={twMerge('', props.className)}>{props.children}</div>
}
