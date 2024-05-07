'use client'

import { CreateAccountButton } from './components/create-account-button'
import { useRef } from 'react'
import { ResumeInput } from '../../../(builder)/builder/[token]/components/resume-input'
import { ResumeTextarea } from '../../../(builder)/builder/[token]/components/resume-textarea'
import Link from 'next/link'

const Page = () => {
  const formRef = useRef(null)
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <h1 className="font-black text-4xl text-white mb-10">
        Crie sua conta 😉
      </h1>

      <form ref={formRef}>
        <fieldset className="grid md:grid-cols-3 gap-6 mb-6">
          <ResumeInput
            label="Seu nome"
            tag="name"
            name="name"
            value=""
            placeholder="Hállex Costa"
          />
          <ResumeInput
            label="Nome de usuário"
            tag="name"
            name="username"
            value=""
            placeholder="hallexcosta"
          />
          <ResumeInput
            label="Seu email"
            tag="email"
            name="email"
            value=""
            placeholder="hallex.costa@hotmail.com"
          />
        </fieldset>

        <fieldset className="grid md:grid-cols-2 gap-6 mb-6">
          <ResumeTextarea
            title="Sumário"
            tag="summary"
            value=""
            placeholder="Nós de um breve resumo contando um pouco sobre seus objetivos profissionais"
          />
          <ResumeTextarea
            title="Habilidades"
            tag="skills"
            value=""
            placeholder="Ex: Laravel, Hyperf, Node.js, Express.js, Next.js, Nullstack, Typescript, etc..."
          />
        </fieldset>

        <div className="flex flex-col">
          <CreateAccountButton formRef={formRef} />
          <div className="flex items-center gap-2">
            <span className="text-white mt-2">Já tenho conta.</span>
            <Link
              className="mt-2 text-white underline underline-offset-2 decoration-1 font-semibold"
              href="/auth/sign-in"
            >
              Fazer login
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Page
