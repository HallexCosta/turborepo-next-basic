// import '../../envConfig.ts'
import jwt from 'jsonwebtoken'

const getPersonByToken = async (hashToken: string) => {
  const apiBaseUrl = process.env.API_BASE_URL ?? 'https://hallexcosta.com/api'

  try {
    const response = await fetch(`${apiBaseUrl}/person?token=${hashToken}`, {
      method: 'GET',
      next: {
        tags: ['get-resume-person']
      },
      cache: 'no-store'
    })
    const { person } = await response.json()
    return person
  } catch (e) {
    return {
      workExperiences: []
    }
  }
}

export { getPersonByToken }
