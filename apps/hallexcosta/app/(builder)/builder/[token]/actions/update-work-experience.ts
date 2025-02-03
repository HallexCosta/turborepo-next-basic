'use server'

import { revalidatePath } from 'next/cache'
import { parseCurrentlyPosition } from '../common/parse-currently-position'
import {parseDate, parseDateToDatetime} from '../common/parse-date-string-to-date'

type UpdateWorkExperienceProps = {
  workExperienceId: number
  formData: FormData
}

async function updateWorkExperience(
  authToken,
  workExperienceId,
  formData
) {
  const body = {
    enterprise: formData.get('enterprise'),
    role: formData.get('role'),
    type: formData.get('type'),
    workModel: formData.get('workModel'),
    startDate: parseDateToDatetime(formData.get('startDate') as string),
    endDate: parseDateToDatetime(formData.get('endDate') as string),
    currentlyPosition: parseCurrentlyPosition(formData.get('currentlyPosition'))
  }
  console.log({body})
  // return

  const response = await fetch(
    `${process.env.API_BASE_URL}/work-experiences/${workExperienceId}`,
    {
      method: 'PATCH',
      cache: 'no-cache',
      body: JSON.stringify(body),
      headers: {
        authorization: `Bearer ${authToken}`,
      }
    }
  )

  const data = await response.json()

  revalidatePath(`/builder/${authToken}`)
}

export { updateWorkExperience }
