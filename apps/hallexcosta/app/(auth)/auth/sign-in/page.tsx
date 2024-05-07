'use client'
import { useRef } from 'react'
import { LoginAccountButton } from './components/login-account-button'
import { ResumeInput } from '../../../(builder)/builder/[token]/components/resume-input'
import Link from 'next/link'

const Page = () => {
  const formRef = useRef(null)

  return (
    <div className="max-w-3xl h-full mx-auto mt-40">
      <h1 className="font-black text-4xl text-white mb-10">
        Faça login com seu usuário 🤠👍
      </h1>

      <form ref={formRef} onSubmit={(e) => e.preventDefault()}>
        <fieldset className="grid md:grid-cols-1 gap-6 mb-6">
          <ResumeInput
            label="Nome de usuário"
            tag="name"
            name="username"
            value=""
            placeholder="hallexcosta"
          />
        </fieldset>

        <div className="flex flex-col">
          <LoginAccountButton formRef={formRef} />
          <div className="flex items-center gap-2">
            <span className="text-white mt-2">Não tenho conta.</span>
            <Link
              className="mt-2 text-white underline underline-offset-2 decoration-1 font-semibold"
              href="/auth/sign-up"
            >
              Criar conta
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Page
