'use client'
import React from 'react';

type Props = {
  show: boolean
  onClose?: () => void
  children: React.ReactNode
}

export const Root = (props: Props) => {
  const hidden =  props.show ? '' : 'hidden'
  return (
    <div
      tabIndex={-1}
      aria-hidden="true"
      className={`${hidden} bg-[#000000db] flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full max-h-full`}
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {props.children}
        </div>
      </div>
    </div>
  )
}