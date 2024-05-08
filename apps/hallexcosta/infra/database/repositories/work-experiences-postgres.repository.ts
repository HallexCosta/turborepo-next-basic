import { and, eq } from 'drizzle-orm'
import { achievements, workExperiences } from '../schema-pg'
import { VercelPgDatabaseSchema } from '../index'
import {
  WorkExperiencesRepositoryInterface,
  WorkExperienceUpdate
} from '../../../app/backend/repositories/work-experience-repository.interface'

export default class WorkExperiencesPostgresRepository implements WorkExperiencesRepositoryInterface {
  public constructor(private readonly db: VercelPgDatabaseSchema) {}
  public async deleteById(workExperienceId: number) {
    await this.db
      .delete(achievements)
      .where(eq(achievements.workExperienceId, workExperienceId))
    return this.db
      .delete(workExperiences)
      .where(
        and(
          eq(workExperiences.id, workExperienceId)
        )
      )
  }
  public async updateById(
    workExperienceId: number,
    data: WorkExperienceUpdate
  ) {
    return this.db
      .update(workExperiences)
      .set({
        ...data,
        updatedAt: new Date()
      })
      .where(
        and(
          eq(workExperiences.id, workExperienceId)
        )
      )
  }
}
