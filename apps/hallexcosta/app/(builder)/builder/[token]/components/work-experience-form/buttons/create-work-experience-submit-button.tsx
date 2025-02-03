import React from 'react'
import { useFormStatus } from 'react-dom'

export const CreateWorkExperienceSubmitButton = () => {
  const status = useFormStatus()
  return (
    <button type="submit" className="group flex items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white bg-blue-700 border border-transparent enabled:hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-lg focus:ring-2 w-full">
      {status.pending ? 'Criando...' : 'Criar Nova Experiência'}
    </button>
  )
}
