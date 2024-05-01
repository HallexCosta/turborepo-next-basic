import { db } from '../../../../database'
import { workExperiences } from '../../../../database/schema'

export async function POST(request: Request, { params }) {
  try {
    console.log('Creating in back-end')
    const { enterprise, role, workModel, currentlyPosition } =
      await request.json()
    const personId = params.personId
    const createdAt = new Date()

    await db.insert(workExperiences).values({
      enterprise,
      role,
      workModel,
      currentlyPosition,
      // startDate: workExperience.startDate,
      // endDate: workExperience.endDate,
      personId,
      createdAt
    })

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
