'use client'
import { createAccountAction } from '../actions/create-account-action'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export const CreateAccountButton = ({ formRef }) => {
  const [isCreating, setIsCreating] = useState(false)
  const router = useRouter()

  const handleCreateAccountAction = async () => {
    setIsCreating(true)

    const { message, isValid } = await createAccountAction(
      new FormData(formRef.current)
    )
    if (!isValid) {
      setIsCreating(false)
      return alert(message)
    }

    setIsCreating(false)
    alert('Account created successfully.')
    router.push('/auth/sign-in')
  }

  return (
    <button
      onClick={handleCreateAccountAction}
      disabled={isCreating}
      type="button"
      className="rounded-md w-32 h-14 bg-indigo-600"
    >
      <span className="text-white font-bold">
        {isCreating ? 'Carregando...' : 'Criar'}
      </span>
    </button>
  )
}
