'use server'

import { parseDate } from '../common/parse-date-string-to-date'
import { revalidateTag, revalidatePath } from 'next/cache'
import { parseCurrentlyPosition } from '../common/parse-currently-position'

async function createWorkExperience(formData: FormData) {
  console.log('Creating Work Experience...')
  console.log('entries', Object.fromEntries(formData))

  const data = {
    enterprise: formData.get('enterprise'),
    workModel: formData.get('workModel'),
    role: formData.get('role'),
    type: formData.get('type'),
    currentlyPosition: parseCurrentlyPosition(
      formData.get('currentlyPosition')
    ),
    startDate: parseDate(formData.get('startDate') as string),
    endDate: parseDate(formData.get('endDate') as string)
  }

  const response = await fetch(
    'http://localhost:3001/api/work-experiences/hallexcosta',
    {
      cache: 'no-cache',
      method: 'POST',
      body: JSON.stringify(data)
    }
  )
  console.log('será q foi gravado?')
  console.log(await response.json())

  // revalidateTag('get-resume-person')
  revalidatePath('/builder')
}

export { createWorkExperience }
