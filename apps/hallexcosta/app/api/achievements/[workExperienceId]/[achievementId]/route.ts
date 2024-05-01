import { db } from '../../../../../database'
import { achievements } from '../../../../../database/schema'
import { and, eq } from 'drizzle-orm'
import { NextResponse } from 'next/server'

export async function DELETE(request: Request, { params }) {
  try {
    console.log('DELETE')

    const reference = {}
    const [alreadyAchievement] = await db
      .select()
      .from(achievements)
      .where(eq(achievements.id, params.achievementId))

    if (!alreadyAchievement) {
      throw new Error('Achievement already deleted')
    }

    await db
      .delete(achievements)
      .where(eq(achievements.id, params.achievementId))
    Object.assign(reference, {
      workExperienceId: alreadyAchievement.workExperienceId,
      achievementId: params.achievementId
    })

    return new Response(
      JSON.stringify({
        message: 'Achievement data deleted',
        reference,
        type: 'delete'
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

export async function PATCH(request: Request, { params }) {
  try {
    console.log('PATCH')
    const data = await request.json()

    const [alreadyAchievement] = await db
      .select()
      .from(achievements)
      .where(
        and(
          eq(achievements.id, params.achievementId),
          eq(achievements.workExperienceId, params.workExperienceId)
        )
      )

    if (!alreadyAchievement) {
      const output = JSON.stringify({
        message: 'Achievement not found'
      })
      const responseInit = {
        status: 422
      }
      return new Response(output, responseInit)
    }

    await db
      .update(achievements)
      .set({
        content: data.content
      })
      .where(
        and(
          eq(achievements.id, params.achievementId),
          eq(achievements.workExperienceId, params.workExperienceId)
        )
      )

    const output = JSON.stringify({
      message: 'Achievement data update'
    })
    const responseInit = {
      status: 200
    }
    return new Response(output, responseInit)
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
