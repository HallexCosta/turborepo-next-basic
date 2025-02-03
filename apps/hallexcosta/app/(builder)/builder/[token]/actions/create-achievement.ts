'use server'

import { revalidatePath, revalidateTag } from 'next/cache'

type CreateAchievementEntry = {
  content: string
  workExperienceId: string
}

const removeAchievementWithEmptyContent = (achievement: CreateAchievementEntry) => achievement.content !== ''
function handleFormData<Type>(formData: FormData) {
  const sets = new Map()
  const data = Object.fromEntries(formData)

  for (const key in data) {
    const [field, index] = key.split('_')

    if (!data[key]) continue

    if (sets.has(index)) {
      sets.set(index, {
        ...sets.get(index),
        [field]: data[key]
      })
      continue
    }

    sets.set(index, {
      [field]: data[key]
    })
  }
  return [...sets.values()] as Type[]
}

const factoryMakeCreateAchievement = (authToken: string, {content, workExperienceId}: CreateAchievementEntry) => fetch(
  `${process.env.API_BASE_URL}/achievements/${workExperienceId}`,
  {
    method: 'POST',
    body: JSON.stringify({
      content
    }),
    headers: {
      authorization: `Bearer ${authToken}`
    }
  }
)

export async function createAchievement(authToken: string, formData: FormData) {
  const achievements = handleFormData<CreateAchievementEntry>(formData)
    .map(achievement => ({
      content: achievement.content,
      workExperienceId: Number(achievement.workExperienceId)
    }))
    .filter(achievement => achievement.content)

  const promises: Promise<Response>[] = []
  for (const achievement of achievements) {
    promises.push(factoryMakeCreateAchievement(authToken, achievement))
  }
  await Promise.all(promises)

  revalidateTag(`/builder/${authToken}`)
  return {
    message: `Conquistas criada com sucesso! Total (${achievements.length})`
  }
}
