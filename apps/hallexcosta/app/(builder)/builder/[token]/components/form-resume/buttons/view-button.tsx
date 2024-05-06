'use client'

import Link from 'next/link'
import React from 'react'

export const ViewButton = () => {
  return (
    <Link href={'/cv/hallexcosta'} target="_blank" className="w-full">
      <button className="group flex items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-green-900 bg-white border border-green-300 enabled:hover:bg-green-100 focus:ring-green-300 dark:bg-green-600 dark:text-white dark:border-green-600 dark:enabled:hover:bg-green-700 dark:enabled:hover:border-green-700 dark:focus:ring-green-700 rounded-lg focus:ring-2 w-full">
        <span className="flex items-center transition-all duration-200 rounded-md text-sm px-4 py-2">
          Visualizar
        </span>
      </button>
    </Link>
  )
}
