'use server'

export const loginAccountAction = async (formData: FormData) => {
  const { username } = Object.fromEntries(formData)
  const response = await fetch(`${process.env.API_BASE_URL}/auth/login`, {
    method: 'POST',
    body: JSON.stringify({ username }),
    cache: 'no-cache'
  })

  const statusMatcher = {
    200: async (response: Response) => {
      const { hash, username } = await response.json()
      return {
        username,
        hashToken: hash,
        authenticated: true
      }
    },
    404: async (response: Response) => {
      const { username } = await response.json()
      return {
        message: `Usuário "${username}" não foi encontrado`,
        authenticated: false
      }
    }
  }

  return statusMatcher[response.status](response)
}
