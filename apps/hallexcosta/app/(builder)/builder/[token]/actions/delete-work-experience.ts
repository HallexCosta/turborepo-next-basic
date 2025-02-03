'use server'

import { revalidatePath, revalidateTag } from 'next/cache'

async function deleteWorkExperience(workExperienceId: number) {
  const response = await fetch(
    `${process.env.API_BASE_URL}/work-experiences/${workExperienceId}`,
    {
      method: 'DELETE',
      cache: 'no-cache'
    }
  )

  const data = await response.json()

  revalidatePath('/builder')
  // revalidateTag('get-resume-person')
}

export { deleteWorkExperience }
