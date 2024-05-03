import React from 'react'
import { useFormStatus } from 'react-dom'

export const CreateWorkExperienceSubmitButton = () => {
  const status = useFormStatus()
  return (
    <button type="submit" color="blue">
      {status.pending ? 'Criando...' : 'Criar Nova Experiência'}
    </button>
  )
}
