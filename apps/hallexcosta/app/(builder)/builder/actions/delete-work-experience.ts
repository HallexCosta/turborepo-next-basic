'use server'

import { revalidatePath, revalidateTag } from 'next/cache'

type DeleteWorkExperienceProps = {
  workExperienceId: string
}

async function deleteWorkExperience({
  workExperienceId
}: DeleteWorkExperienceProps) {
  console.log('callend')
  console.log(workExperienceId)

  const response = await fetch(
    `process.env.NEXT_PUBLIC_BASE_URL/work-experiences/hallexcosta/${workExperienceId}/`,
    {
      method: 'DELETE',
      cache: 'no-cache'
    }
  )

  const data = await response.json()

  console.log('será que foi deletado?')
  console.log(data)

  revalidatePath('/builder')
  // revalidateTag('get-resume-person')
}

export { deleteWorkExperience }
