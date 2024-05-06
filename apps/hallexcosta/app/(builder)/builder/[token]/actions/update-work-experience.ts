'use server'

import { revalidatePath } from 'next/cache'
import { parseCurrentlyPosition } from '../common/parse-currently-position'
import { parseDate } from '../common/parse-date-string-to-date'

type UpdateWorkExperienceProps = {
  workExperienceId: string
  formData: FormData
}

async function updateWorkExperience({
  workExperienceId,
  formData
}: UpdateWorkExperienceProps) {
  const body = {
    enterprise: formData.get('enterprise'),
    role: formData.get('role'),
    type: formData.get('type'),
    workModel: formData.get('workModel'),
    startDate: parseDate(formData.get('startDate') as string),
    endDate: parseDate(formData.get('endDate') as string),
    currentlyPosition: parseCurrentlyPosition(formData.get('currentlyPosition'))
  }

  const response = await fetch(
    `process.env.NEXT_PUBLIC_BASE_URL/work-experiences/hallexcosta/${workExperienceId}`,
    {
      method: 'PATCH',
      cache: 'no-cache',
      body: JSON.stringify(body)
    }
  )

  const data = await response.json()

  console.log(data)

  revalidatePath('/builder')
}

export { updateWorkExperience }
