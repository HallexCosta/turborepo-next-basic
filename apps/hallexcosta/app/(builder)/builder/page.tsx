import { FormResume } from './components/form-resume'
import { db } from '../../../database'
import { eq } from 'drizzle-orm'
import _ from 'lodash'
import { DeepNonNullable } from 'utility-types'
import { Suspense } from 'react'
import { createDefaultAchievement } from './common/create-default-achievement'
import { achievementEntityToAchievementComponentMapper } from './mappers/achievement-entity-to-achievement-component-mapper'
import {achievements} from '../../../database/schema';
import {Achievement, WorkExperience} from './stores/work-experiences-store';

type Person = {   id: string
  name: string
  username: string
  email: string
  role: string
  summary: string
  skills: string
  createdAt: Date
  updatedAt: Date
  workExperiences: Array<WorkExperience & {
    personId: string
    createdAt: Date
    updatedAt: Date
    achievements: Array<Achievement>
  }>
  contact: Record<string, any>
}

const page = async () => {
  const username = 'hallexcosta'
  let person = await db.query.persons.findFirst({
    where: (person) => eq(person.username, username),
    with: {
      contact: true,
      workExperiences: {
        orderBy: (workExperiences, { desc }) => [
          desc(workExperiences.startDate)
        ],
        with: {
          achievements: true
        }
      }
    }
  })
  if (!person) return <h1>Person not found {username}</h1>

  // console.log(person.contact)
  // console.log(person.workExperiences)
  function replaceNullWithEmptyString(value) {
    if (_.isArray(value)) {
      return value.map(createObjectWithDefaults)
    }

    if (_.isDate(value)) {
      return value
    } else if (_.isObject(value)) {
      return createObjectWithDefaults(value)
    } else {
      return value
    }
  }
  function createObjectWithDefaults(obj) {
    return _.mapValues(obj, replaceNullWithEmptyString)
  }
  const parsedPerson = _.mapValues(
    person,
    replaceNullWithEmptyString
  ) as Person
  // console.log({parsedPerson})

  console.log(parsedPerson.workExperiences)
  if (parsedPerson.workExperiences.length) {
    // @ts-ignore
    parsedPerson.workExperiences = parsedPerson.workExperiences.map((workExperience) => {
      if (workExperience.achievements.length) {
        workExperience.achievements.map(achievementEntityToAchievementComponentMapper)
      } else {
        workExperience.achievements = [createDefaultAchievement()]
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
        achievements
      }
    })
  } else {
    parsedPerson.workExperiences = []
  }

  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <section className="p-4">
        <FormResume
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
