// import '../api/config'

const getPersonByUsername = async (username: string = 'hallexcosta') => {
  console.log(process.env.NODE_ENV)
  console.log(process.env.API_BASE_URL ?? 'not value defined')
  console.log(process.env.NEXT_PUBLIC_API_BASE_URL ?? 'not value defined')
  const apiBaseUrl = process.env.API_BASE_URL ?? 'https://hallexcosta.com/api'
  console.log(apiBaseUrl)
  const response = await fetch(`${apiBaseUrl}/person/${username}`, {
    method: 'GET',
    next: {
      tags: ['get-resume-person']
    }
  })
  const { person } = await response.json()
  return person
}

export { getPersonByUsername }
