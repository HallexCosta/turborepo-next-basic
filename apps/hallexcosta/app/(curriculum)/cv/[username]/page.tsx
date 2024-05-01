import { CVTemplatePageEditable } from '../page'
import { getPersonByUsername } from '../../../fetches/get-person-by-username'

interface PageProps {
  params: {
    username: string
  }
}

export default async function Page({ params }: PageProps) {
  const person = await getPersonByUsername(params.username)

  if (!person) return <h1>Username {params.username} didn´t found</h1>

  return <CVTemplatePageEditable person={person} />
}
