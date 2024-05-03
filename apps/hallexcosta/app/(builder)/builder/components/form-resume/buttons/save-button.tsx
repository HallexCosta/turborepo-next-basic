'use client'
import React, { useEffect } from 'react'

type Props = {
  submitting: boolean
}

export const SaveButton = (props: Props) => {
  useEffect(() => {
    console.log(props.submitting)
  }, [props.submitting])

  return (
    <button
      className="group flex items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none cursor-not-allowed opacity-50 text-white bg-blue-700 border border-transparent enabled:hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-lg focus:ring-2 w-full">
      <span className="flex items-center transition-all duration-200 rounded-md text-sm px-4 py-2">
        {props.submitting ? 'Carregando...' : 'Salvar'}
      </span>
    </button>
  )
}
