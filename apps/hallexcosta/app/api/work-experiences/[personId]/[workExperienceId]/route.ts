import {db, pgDB} from '../../../../../infra/database'
import WorkExperiencesPostgresRepository
  from '../../../../../infra/database/repositories/work-experiences-postgres.repository'

export async function DELETE(request: Request, { params }) {
  try {
    const repository = new WorkExperiencesPostgresRepository(pgDB)
    const result = await repository.deleteById(
      Number(params.workExperienceId)
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
    const repository = new WorkExperiencesPostgresRepository(pgDB)
    const result = await repository.updateById(
      Number(params.workExperienceId),
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
