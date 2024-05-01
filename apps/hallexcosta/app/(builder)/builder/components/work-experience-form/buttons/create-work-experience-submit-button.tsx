import React from 'react'
import { useFormStatus } from 'react-dom'
import { Button } from 'flowbite-react'

type Props = {
  isCreating: boolean
}

export const CreateWorkExperienceSubmitButton = () => {
  const status = useFormStatus()
  return (
    <Button type="submit" color="blue">
      {status.pending ? 'Criando...' : 'Criar Nova Experiência'}
    </Button>
  )
}
