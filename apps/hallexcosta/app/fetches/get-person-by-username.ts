// import '../api/config'

const getPersonByUsername = async (username: string = 'hallexcosta') => {
  console.log(process.env.NODE_ENV)
  console.log(process.env.API_BASE_URL ?? 'not value defined')
  console.log(process.env.NEXT_PUBLIC_API_BASE_URL ?? 'not value defined')
  const response = await fetch(`${process.env.API_BASE_URL}/person/${username}`, {
    method: 'GET',
    next: {
      tags: ['get-resume-person']
    }
  })
  const { person } = await response.json()
  return person
}

export { getPersonByUsername }
