'use server'

import { isValidFields } from '../../common/is-valid-fields'

type CreateAccountEntry = {
  name: string
  email: string
  username: string
  summary: string
  skills: string
}

export const createAccountAction = async (formData: FormData) => {
  const { email, name, username } = Object.fromEntries(
    formData
  ) as CreateAccountEntry

  const validation = isValidFields({
    email,
    name,
    username
  })

  if (!validation.isValid)
    return {
      ...validation,
      message:
        'The fields ' + validation.invalidFields.join(', ') + ' are invalids'
    }

  const apiBaseUrl = process.env.API_BASE_URL
  const body = JSON.stringify({
    email,
    name,
    username: username.trim()
  })
  const response = await fetch(`${apiBaseUrl}/person`, {
    method: 'POST',
    body,
    cache: 'no-cache'
  })

  const { message } = await response.json()

  return {
    created: true,
    isValid: response.status === 200,
    message,
    invalidFields: validation.invalidFields
  }
}
