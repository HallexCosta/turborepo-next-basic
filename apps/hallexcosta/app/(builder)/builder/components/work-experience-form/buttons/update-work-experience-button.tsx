import React from 'react'
import { useFormStatus } from 'react-dom'

import {Icons} from 'ui'

export const UpdateWorkExperienceButton = () => {
  const status = useFormStatus()
  return (
      <button
        type="submit"
        color="blue"
        disabled={status.pending}
        className="group flex items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white bg-blue-700 border border-transparent enabled:hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-lg focus:ring-2 pointer"
      >
        <span className="flex items-center transition-all duration-200 rounded-md text-xs px-2 py-1">
          <Icons.FloppyDisk/>
        </span>
      </button>
  )
}