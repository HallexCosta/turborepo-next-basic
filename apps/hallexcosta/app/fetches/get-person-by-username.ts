const getPersonByUsername = async () => {
  const username = 'hallexcosta'
  const response = await fetch(`http://localhost:3001/api/person/${username}`, {
    method: 'GET',
    next: {
      tags: ['get-resume-person']
    }
  })
  const { person } = await response.json()
  return person
}

export { getPersonByUsername }
