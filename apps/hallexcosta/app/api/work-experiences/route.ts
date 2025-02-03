import {db, pgDB} from '../../../infra/database'
import { workExperiences } from '../../../infra/database/schema'
import WorkExperiencesPostgresRepository
  from '../../../infra/database/repositories/work-experiences-postgres.repository'
import {headers} from 'next/headers'
import {NextResponse} from 'next/server'
import {TokensRepository} from '../../../infra/database/repositories/tokens.repository'

export async function POST(request: Request, { params }) {
  const authorization = headers().get('authorization')?.split(' ')
  const authToken = authorization ? authorization[1] : null
  console.log({authToken})
  if (!authToken) return NextResponse.json({
    message: 'Auth token not found'
  }, {
    status:401
  })

  try {
    console.log('Creating in back-end')
    const {
      enterprise,
      role,
      workModel,
      currentlyPosition,
      type,
      endDate,
      startDate
    } = await request.json()

    console.log({
      enterprise,
      role,
      workModel,
      currentlyPosition,
      type,
      endDate,
      startDate
    })

    const tokensRepository = new TokensRepository(pgDB)
    const token = await tokensRepository.findByHashAndStateId(authToken, TokensRepository.STATE_ACTIVE)
    if (!token) return NextResponse.json({
      message: `This token is not valid: ${authToken}`
    }, {
      status:401
    })

    const workExperienceRepository = new WorkExperiencesPostgresRepository(pgDB)
    await workExperienceRepository.save({
      enterprise,
      role,
      workModel,
      currentlyPosition: false,
      type,
      endDate: endDate ? new Date(endDate) : null,
      startDate: new Date(startDate),
      personId: token.personId,
    })

    // await db.insert(workExperiences).values({
    //   enterprise,
    //   role,
    //   workModel,
    //   currentlyPosition,
    //   // startDate: workExperience.startDate,
    //   // endDate: workExperience.endDate,
    //   personId,
    //   createdAt
    // })

    const output = JSON.stringify({
      message: 'Work Experience created'
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

/*
export async function POST(request: Request, { params }) {
  console.log('STARTING WORK EXPERIENCEEEEEEEEE')
  try {
    const data = await request.json()

    console.log('POST')
    console.log(data)
    const references: any[] = []
    for (const workExperience of data) {
      const [alreadyWorkExperience] = await db
        .select()
        .from(workExperiences)
        .where(eq(workExperiences.id, workExperience.id))

      delete workExperience.createdAt
      delete workExperience.updateAt

      workExperience.startDate = new Date(workExperience.startDate)
      workExperience.endDate = workExperience.endDate
        ? new Date(workExperience.endDate)
        : null

      if (alreadyWorkExperience) {
        console.log('Updating...', workExperience)
        await db
          .update(workExperiences)
          .set({
            ...workExperience,
            enterprise: workExperience.enterprise,
            role: workExperience.role,
            type: workExperience.type,
            startDate: workExperience.startDate,
            endDate: workExperience.endDate,
            currentlyPosition: workExperience.currentlyPosition,
            updatedAt: new Date()
          })
          .where(
            and(
              eq(workExperiences.id, workExperience.id),
              eq(workExperiences.personId, params.personId)
            )
          )
        console.log('Finished Update....')
      } else {
        console.log('Creating...', workExperience.id)
        const { id: workExperienceReferenceId, ...createWorkExperience } =
          workExperience
        delete workExperience.id
        const [{ id: workExperienceInsertedId }] = await db
          .insert(workExperiences)
          .values({
            ...workExperience,
            personId: params.personId,
            createdAt: new Date()
          })
          .returning({
            id: workExperiences.id
          })

        references.push({
          workExperienceReferenceId,
          workExperienceInsertedId
        })
      }
    }

    console.log({ references })

    return new Response(
      JSON.stringify({
        message: 'Work Experiences data updated',
        references
      }),
      {
        status: 200
      }
    )
  } catch (e) {
    return new Response(
      JSON.stringify({
        message: e.message,
        stack: e.stackTrace
      }),
      {
        status: 400
      }
    )
  }
}
*/
