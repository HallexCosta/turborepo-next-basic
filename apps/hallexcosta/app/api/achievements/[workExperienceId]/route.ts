import { db } from '../../../../database'
import { contacts, persons, achievements } from '../../../../database/schema'
import { and, eq } from 'drizzle-orm'

interface Reference {
  workExperienceId: string
  achievementReferenceId: number
  achievementInsertedId?: number
}

export async function POST(request: Request, { params }) {
  try {
    const data = await request.json()

    console.log('POST')
    console.log(data)
    const references: any[] = []
    let type = 'default'
    for (const achievement of data) {
      if (Number.isNaN(achievement.id)) continue

      const [alreadyAchievement] = await db
        .select()
        .from(achievements)
        .where(eq(achievements.id, achievement.id))

      if (alreadyAchievement && achievement.content === '') {
        await db.delete(achievements).where(eq(achievements.id, achievement.id))
        type = 'delete'
        references.push({
          workExperienceId: params.workExperienceId,
          achievementReferenceId: alreadyAchievement.id
        })
        continue
      }

      delete achievement.createdAt
      delete achievement.updateAt

      achievement.startDate = new Date(achievement.startDate)
      achievement.endDate = new Date(achievement.endDate)

      if (alreadyAchievement) {
        await db
          .update(achievements)
          .set({
            content: achievement.content,
            withDot: achievement.withDot,
            updatedAt: new Date()
          })
          .where(
            and(
              eq(achievements.id, achievement.id),
              eq(achievements.workExperienceId, params.workExperienceId)
            )
          )
        type = 'update'
      } else {
        console.log('Creating...', achievement.id)
        const { id: achievementReferenceId, ...createAchievementData } =
          achievement
        delete achievement.id
        const [{ id: achievementInsertedId }] = await db
          .insert(achievements)
          .values({
            ...createAchievementData,
            workExperienceId: params.workExperienceId,
            duration: '',
            createdAt: new Date()
          })
          .returning({
            id: achievements.id
          })
        references.push({
          workExperienceId: params.workExperienceId,
          achievementReferenceId,
          achievementInsertedId
        })
        type = 'create'
      }
    }

    console.log({ references })

    return new Response(
      JSON.stringify({
        message: 'Achievement data updated',
        references,
        type
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
