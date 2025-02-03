import { FC, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface LineProps {
  withDot?: boolean
  activityTime?: string
  children: ReactNode
  className?: string
}
export const Line = ({
  children,
  activityTime,
  withDot = false,
  className
}: LineProps) => {
  const dot = withDot === null || withDot === true ? '•' : ''
  return (
    <span className={twMerge('arial text-base leading-tight', className)}>
      {dot} {children}
    </span>
  )
}
