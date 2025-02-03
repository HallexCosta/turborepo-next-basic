import { twMerge } from 'tailwind-merge'

export const Title = ({ children, className = '' }) => (
  <span className={twMerge('arial text-base font-bold', className)}>{children}</span>
)
