'use server'

import { revalidatePath, revalidateTag } from 'next/cache'

type CreateAchievementEntry = {
  content: string
  workExperienceId: string
}

export async function createAchievement(formData: FormData) {
  console.log('Creating achievement...')
  const { workExperienceId, content } = Object.fromEntries(
    formData
  ) as CreateAchievementEntry

  const response = await fetch(
    `process.env.NEXT_PUBLIC_BASE_URL/achievements/${workExperienceId}`,
    {
      method: 'POST',
      body: JSON.stringify({
        content
      })
    }
  )
  console.log('será que cadastro?')
  console.log(await response.json())
  revalidateTag('get-resume-person')
}
