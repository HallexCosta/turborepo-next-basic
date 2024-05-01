import { BetterSQLite3Database } from 'drizzle-orm/better-sqlite3'
import * as schema from '../schema'
import { and, eq } from 'drizzle-orm'
import { achievements, workExperiences } from '../schema'

type UpdateWorkExperienceProps = {
  enterprise: string
  role: string
  type: string
  workModel: string
  startDate: Date
  endDate: Date | null
  currentlyPosition: boolean
}
interface WorkExperiencesRepositoryInterface {
  delete: (personId: string, workExperienceId: string) => void
  update: (
    personId: string,
    workExperienceId: string,
    data: UpdateWorkExperienceProps
  ) => void
}

export default class WorkExperiencesRepository
  implements WorkExperiencesRepositoryInterface
{
  public constructor(private db: BetterSQLite3Database<typeof schema>) {}
  public async delete(personId: string, workExperienceId: string) {
    await this.db
      .delete(achievements)
      .where(eq(achievements.workExperienceId, workExperienceId))
    return this.db
      .delete(workExperiences)
      .where(
        and(
          eq(workExperiences.personId, personId),
          eq(workExperiences.id, workExperienceId)
        )
      )
  }
  public async update(
    personId: string,
    workExperienceId: string,
    data: UpdateWorkExperienceProps
  ) {
    if ('id' in data) delete data.id
    return this.db
      .update(workExperiences)
      .set({
        ...data,
        updatedAt: new Date()
      })
      .where(
        and(
          eq(workExperiences.personId, personId),
          eq(workExperiences.id, workExperienceId)
        )
      )
  }
}
