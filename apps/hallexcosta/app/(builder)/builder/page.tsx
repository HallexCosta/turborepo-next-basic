import '../../api/config'
import { Index } from './components/form-resume'
import _ from 'lodash'
import { Suspense } from 'react'
import { createDefaultAchievement } from './common/create-default-achievement'
import { achievementEntityToAchievementComponentMapper } from './mappers/achievement-entity-to-achievement-component-mapper'

import { Achievement, WorkExperience } from './stores/work-experiences-store'
import { getPersonByUsername } from '../../fetches/get-person-by-username'
import { replaceNullWithEmptyString } from './common/replace-null-with-empty-string'

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

const page = async () => {
  const username = 'hallexcosta'

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const person = await getPersonByUsername()

  // let person = await getPersonByUsername(username)
  if (!person) return <h1>Person not found {username}</h1>

  const parsedPerson = _.mapValues(person, replaceNullWithEmptyString) as Person

  if (parsedPerson.workExperiences.length) {
    // @ts-ignore
    parsedPerson.workExperiences = parsedPerson.workExperiences.map(
      (workExperience) => {
        if (workExperience.achievements.length) {
          workExperience.achievements.map(
            achievementEntityToAchievementComponentMapper
          )
        } else {
          // workExperience.achievements = [createDefaultAchievement()]
          workExperience.achievements = []
        }
        return {
          id: workExperience.id,
          enterprise: workExperience.enterprise,
          role: workExperience.role,
          type: workExperience.type,
          workModel: workExperience.workModel,
          currentlyPosition: workExperience.currentlyPosition,
          endDate: workExperience.endDate,
          startDate: workExperience.startDate,
          personId: workExperience.personId,
          createdAt: workExperience.createdAt,
          updatedAt: workExperience.updatedAt,
          achievements: workExperience.achievements
        }
      }
    )
  } else {
    parsedPerson.workExperiences = []
  }
  //
  // console.log('pessoa parseada')
  // console.log(parsedPerson)

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <h1>{process.env.NEXT_PUBLIC_API_BASE_URL}</h1>
      <section className="p-4">
        <Index
          person={{
            id: parsedPerson.id,
            username: parsedPerson.username,
            name: parsedPerson.name,
            role: parsedPerson.role
          }}
          summary={parsedPerson.summary}
          contact={{
            website: parsedPerson.contact.website,
            github: parsedPerson.contact.github,
            linkedin: parsedPerson.contact.linkedin,
            city: parsedPerson.contact.city,
            state: parsedPerson.contact.state,
            email: parsedPerson.contact.email,
            phone: parsedPerson.contact.phone
          }}
          skills={parsedPerson.skills}
          workExperiences={parsedPerson.workExperiences}
        />
      </section>
    </Suspense>
  )
}

export default page
