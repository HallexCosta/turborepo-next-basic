import WorkExperiencesRepository from '../../../../../database/repositories/work-experiences-repositoy'
import { db } from '../../../../../database'

export async function DELETE(request: Request, { params }) {
  try {
    const repository = new WorkExperiencesRepository(db)
    const result = await repository.delete(
      params.personId,
      params.workExperienceId
    )

    const output = JSON.stringify({
      message: 'Work Experience deleted',
      result
    })
    const responseInit: ResponseInit = {
      status: 200
    }
    return new Response(output, responseInit)
  } catch (e) {
    const output = JSON.stringify({
      message: e.message
    })
    const responseInit: ResponseInit = {
      status: 400
    }
    return new Response(output, responseInit)
  }
}
type UpdateWorkExperienceRequest = {
  enterprise: string
  role: string
  type: string
  workModel: string
  startDate: Date
  endDate: Date | null
  currentlyPosition: boolean
}
export async function PATCH(request: Request, { params }) {
  try {
    const data: UpdateWorkExperienceRequest = await request.json()
    const repository = new WorkExperiencesRepository(db)
    const result = await repository.update(
      params.personId,
      params.workExperienceId,
      data
    )

    const output = JSON.stringify({
      message: 'Work Experience updated',
      result
    })
    const responseInit: ResponseInit = {
      status: 200
    }
    return new Response(output, responseInit)
  } catch (e) {
    const output = JSON.stringify({
      message: e.message
    })
    const responseInit: ResponseInit = {
      status: 400
    }
    return new Response(output, responseInit)
  }
}
