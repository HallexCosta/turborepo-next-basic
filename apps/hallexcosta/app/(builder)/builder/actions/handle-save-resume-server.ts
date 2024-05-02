'use server'
import { WorkExperience } from '../stores/work-experiences-store'
import lodash from 'lodash'
import { parseDate } from '../common/parse-date-string-to-date'
import { revalidatePath, revalidateTag } from 'next/cache'

interface ProcessWorkExperiencePositionParams {
  positionIndex: number
  property: string
  value: string
}

type Achievement = {
  id: string
  content: string
  workExperienceId: string
}

type WorkExperienceParseData = {
  startDate: string
  endDate: string
  currentlyPosition: string
  achievements: Map<number, Omit<Achievement, 'id'>>
}

class ParseWorkExperienceFormData {
  public workExperiences = new Map()

  constructor(
    private readonly formData: FormData,
    private readonly parseAchievementFormData: ParseAchievementFormData
  ) {}
  private parseDataFromWorkExperience(workExperience: WorkExperienceParseData) {
    console.log({ workExperience })
    console.log('parseDateFromWorkExperience')
    const startDate = parseDate(workExperience.startDate)
    const endDate = parseDate(workExperience.endDate)
    const currentlyPosition = this.parseCurrentlyPosition(
      workExperience.currentlyPosition
    )

    let achievements: Record<string, Date | string | number | boolean>[] = []
    if (workExperience.achievements.size)
      achievements = this.parseAchievementFormData.convertMapToArray(
        workExperience.achievements
      )

    return {
      ...workExperience,
      startDate,
      endDate,
      currentlyPosition,
      achievements
    }
  }

  private parseCurrentlyPosition(currentlyPosition: string) {
    return Boolean(currentlyPosition)
  }

  private processWorkExperiencePosition(key: string, value: string) {
    if (this.isAchievementKey(key)) {
      const [workExperienceProp, rest, rest2] = key
        .replaceAll('[', ' ')
        .replaceAll(']', '')
        .split(' ')

      const [workExperiencePosIndex, achievementProp] = rest.split('.')
      const [achievementPosIndex, achievementProperty] = rest2.split('.')

      const workExperiencePositionIndex = Number(workExperiencePosIndex)
      const achievementPositionIndex = Number(achievementPosIndex)

      if (this.workExperiences.has(workExperiencePositionIndex)) {
        const workExperience = this.workExperiences.get(
          workExperiencePositionIndex
        )

        // starting map from achievements
        if (!workExperience.hasOwnProperty('achievements')) {
          Object.assign(workExperience, {
            achievements: new Map()
          })
        }

        const oldAchievement =
          workExperience.achievements.get(achievementPositionIndex) ?? {}
        workExperience.achievements.set(achievementPositionIndex, {
          ...oldAchievement,
          [achievementProperty]: value
        })
        this.workExperiences.set(workExperiencePositionIndex, workExperience)
      }
      return
    }

    if (!this.isWorkExperienceKey(key)) return

    const { positionAlreadyExists, positionIndex, property } =
      this.parseWorkExperienceKey(key)
    if (positionAlreadyExists) {
      this.processIfWorkExperiencePositionAlreadyExists({
        positionIndex,
        property,
        value
      })
      return
    }
    this.processIfIsWorkExperiencePositionNotExists({
      positionIndex,
      property,
      value
    })
  }

  private processIfIsWorkExperiencePositionNotExists({
    property,
    value,
    positionIndex
  }: ProcessWorkExperiencePositionParams) {
    this.workExperiences.set(positionIndex, {
      [property]: value
    })
  }

  private processIfWorkExperiencePositionAlreadyExists({
    positionIndex,
    property,
    value
  }: ProcessWorkExperiencePositionParams) {
    this.workExperiences.set(positionIndex, {
      ...this.workExperiences.get(positionIndex),
      [property]: value
    })
  }

  private parseWorkExperienceKey(key: string) {
    const [, rest] = key.replace('[', ' ').replace(']', '').split(' ')
    const [posIndex, property] = rest.split('.')
    const positionIndex = Number(posIndex)
    if (this.workExperiences.has(positionIndex)) {
      return {
        positionAlreadyExists: true,
        positionIndex,
        property
      }
    }
    return {
      positionAlreadyExists: false,
      positionIndex: positionIndex,
      property: property
    }
  }

  private isAchievementKey(key: string) {
    return key.includes('achievements')
  }

  private isWorkExperienceKey(key: string) {
    return key.startsWith('workExperiences')
  }

  public toObject() {
    for (const [key, value] of this.formData.entries()) {
      this.processWorkExperiencePosition(key, value as string)
    }
    return this.convertMapToArrayAndParse()
  }

  private convertMapToArrayAndParse() {
    const temp: Record<string, any>[] = []
    for (const positionIndex of this.workExperiences.keys()) {
      const workExperience = this.workExperiences.get(positionIndex)
      temp[positionIndex] = this.parseDataFromWorkExperience(workExperience)
    }
    return temp
  }
}

class ParseAchievementFormData {
  private achievements: []

  constructor() {}

  public processWorkExperience() {}
  convertMapToArray(
    achievements: Map<number, Record<string, Date | string | number | boolean>>
  ) {
    const temp: Record<string, Date | string | number | boolean>[] = []
    // @ts-ignore
    for (const [positionIndex, achievement] of achievements.entries()) {
      if (achievement.content) temp[Number(positionIndex)] = achievement
    }
    return temp
  }

  toObject(
    workExperienceInstance: ParseWorkExperienceFormData,
    key: string,
    value: string
  ) {
    lodash.set(workExperienceInstance.workExperiences, key, value)

    const achievements = this.achievements
    this.achievements = []
    return achievements
  }
}

const factoryRequestUpdateAchievement = (achievements: Achievement[]) => {
  const requests: Promise<any>[] = []
  for (const achievement of achievements) {
    const data = JSON.stringify(achievement)
    const requestInit = {
      method: 'PATCH',
      body: data,
      cache: 'no-cache'
    } as RequestInit
    requests.push(
      fetch(
        `http://localhost:3001/api/achievements/${achievement.workExperienceId}/${achievement.id}`,
        requestInit
      )
    )
  }
  return requests
}

export const handleSaveResumeServer = async (
  username: string,
  formData: FormData
) => {
  let {
    website,
    github,
    linkedin,
    city,
    state,
    email,
    phone,
    summary,
    skills
  } = Object.fromEntries(formData)

  // console.log(Object.fromEntries(formData))
  const parseAchievement = new ParseAchievementFormData()
  const parseWorkExperiences = new ParseWorkExperienceFormData(
    formData,
    parseAchievement
  )
  const workExperiences = parseWorkExperiences.toObject()

  // console.log({
  //   website,
  //   github,
  //   linkedin,
  //   city,
  //   state,
  //   email,
  //   phone,
  //   summary,
  //   skills,
  //   workExperiences,
  //   test: workExperiences[2].achievements
  // })

  const allAchievements = []
  for (const workExperience of workExperiences) {
    // @ts-ignore
    allAchievements.push(...workExperience.achievements)
  }
  // console.log({allAchievements})
  const requests = factoryRequestUpdateAchievement(allAchievements)
  // console.log({requests})

  // revalidateTag('get-person-resume')
  revalidatePath('/cv/hallescosta')
  return
  const method = 'POST'
  const headers = {
    'Content-Type': 'application/json'
  }
  console.log('sending contacts update requests...')
  const requestContactsUpdate = await fetch(
    `http://localhost:3001/api/contacts/update/${username}`,
    {
      method,
      body: JSON.stringify({
        website,
        github,
        linkedin,
        city,
        state,
        email,
        phone
      }),
      cache: 'no-cache',
      headers
    }
  )
  // const { username, ...person} = fullResume.person
  const requestPersonUpdate = fetch(
    `http://localhost:3001/api/person/${username}`,
    {
      method,
      body: JSON.stringify({
        summary,
        skills
      }),
      headers
    }
  )

  const [responseContacts, responsePerson] = await Promise.all([
    requestContactsUpdate,
    requestPersonUpdate
  ])

  responseContacts.json().then(console.log)
  responsePerson.json().then(console.log)

  // revalidateTag('get-person-resume')
}
