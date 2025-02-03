'use server'

import {parseDate, parseDateToDatetime} from '../common/parse-date-string-to-date'
import { revalidateTag, revalidatePath } from 'next/cache'
import { parseCurrentlyPosition } from '../common/parse-currently-position'

const validationFields = (input, fields) => {
  const messages: Record<string, any> = []
  for (const fieldKey of fields) {
    console.log(fieldKey, input)
    if (!input[fieldKey]) {
      messages.push({
        message: `The field ${fieldKey} cant null or empty`
      })
    }
  }
  return messages
}

async function createWorkExperience(authToken: string, formData: FormData) {
  console.log('Creating Work Experience...')
  console.log(Object.fromEntries(formData))
  const data = {
    enterprise: formData.get('enterprise'),
    workModel: formData.get('workModel'),
    role: formData.get('role'),
    type: formData.get('type'),
    currentlyPosition: parseCurrentlyPosition(
      formData.get('currentlyPosition')
    ),
    startDate: parseDateToDatetime(formData.get('startDate') as string),
    endDate: parseDateToDatetime(formData.get('endDate') as string)
  }

  const validations = validationFields(data, ['startDate'])
  if (validations.length > 0) {
    return validations
  }

  const response = await fetch(
    `http://localhost:3001/api/work-experiences`,
    {
      cache: 'no-cache',
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        authorization: `Bearer ${authToken}`,
      }
    }
  )
  console.log('será q foi gravado?')
  console.log(await response.json())

  // revalidateTag('get-resume-person')
  revalidatePath('/builder')
}

export { createWorkExperience }
