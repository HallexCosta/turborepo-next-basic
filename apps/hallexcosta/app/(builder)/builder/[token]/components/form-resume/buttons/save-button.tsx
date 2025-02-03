'use client'
import React, { useEffect } from 'react'
import {twMerge} from 'tailwind-merge'
import {useFormStatus} from 'react-dom'

type Props = {
  onClick?: () => void
  className?: string
}

export const SaveButton = (props: Props) => {
  const {pending} = useFormStatus()

  return (
    <button className={twMerge('group flex items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white bg-blue-700 border border-transparent enabled:hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-lg focus:ring-2 w-full', props.className)}>
      <span className="flex items-center transition-all duration-200 rounded-md text-sm px-4 py-2">
        {pending ? 'Carregando...' : 'Salvar'}
      </span>
    </button>
  )
}
