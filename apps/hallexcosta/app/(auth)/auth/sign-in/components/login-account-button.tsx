'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { loginAccountAction } from '../actions/login-account-action'

export const LoginAccountButton = ({ formRef }) => {
  const [isCreating, setIsCreating] = useState(false)
  const [awaitingConfirmLogin, setAwaitingConfirmLogin] = useState(false)
  const router = useRouter()

  const handleLogin = async () => {
    setIsCreating(true)

    const { hashToken, message, username, authenticated } =
      await loginAccountAction(new FormData(formRef.current))

    setIsCreating(false)
    if (!authenticated) {
      return alert(message)
    }
    router.push(`/auth/confirmation?hashToken=${hashToken}`)
    // const retriesLimit = 10
    // setAwaitingConfirmLogin(true)
    // setTimeout(retriesConfirmAuthentication(username, retriesLimit), 2000)
  }

  function retriesConfirmAuthentication(
    username: string,
    retriesLimit: number
  ) {
    let retries = 1
    return () => {
      console.log('fui chamado ', retries)

      const pathPush = `/builder/${username}`
      router.push(pathPush)
      retries++

      if (retries <= retriesLimit)
        retriesConfirmAuthentication(username, retriesLimit)
    }
  }

  return (
    <button
      onClick={handleLogin}
      disabled={isCreating}
      type="button"
      className="rounded-md w-32 h-14 bg-indigo-600"
    >
      <span className="text-white font-bold">
        {isCreating ? 'Carregando...' : 'Logar'}
      </span>
    </button>
  )
}
