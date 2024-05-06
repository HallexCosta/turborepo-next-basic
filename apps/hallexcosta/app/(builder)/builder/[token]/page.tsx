import { Suspense } from 'react'

import { Index } from './components/form-resume'

import { Achievement, WorkExperience } from './stores/work-experiences-store'
import { getPersonByToken } from '../../../backend/fetches/get-person-by-token'
import { redirect } from 'next/navigation'

export type Person = {
  id: string
  name: string
  username: string
  email: string
  role: string
  summary: string
  skills: string
  createdAt: Date
  updatedAt: Date
  workExperiences: Array<
    WorkExperience & {
      personId: string
      createdAt: Date
      updatedAt: Date
      achievements: Array<Achievement>
    }
  >
  contact: Record<string, any>
}

const page = async ({ params }) => {
  console.log(params.token)
  const person = await getPersonByToken(params.token as string)

  if (!person) return redirect('/auth')

  return (
    <Suspense fallback={<h1 className="text-white">Loading...</h1>}>
      <h1>{process.env.NEXT_PUBLIC_API_BASE_URL}</h1>
      <section className="p-4">
        <Index
          person={{
            id: person.id ?? '',
            username: person.username ?? '',
            name: person.name ?? '',
            role: person.role ?? ''
          }}
          summary={person.summary ?? ''}
          contact={{
            website: person?.contact?.website ?? '',
            github: person?.contact?.github ?? '',
            linkedin: person?.contact?.linkedin ?? '',
            city: person?.contact?.city ?? '',
            state: person?.contact?.state ?? '',
            email: person?.contact?.email ?? '',
            phone: person?.contact?.phone ?? ''
          }}
          skills={person.skills ?? ''}
          workExperiences={person.workExperiences ?? ''}
        />
      </section>
    </Suspense>
  )
}

export default page
