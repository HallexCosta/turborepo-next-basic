import {and, eq} from 'drizzle-orm'
import {achievements, workExperiences} from '../schema-pg'
import {VercelPgDatabaseSchema} from '../index'
import {
  WorkExperienceCreate,
  WorkExperiencesRepositoryInterface,
  WorkExperienceUpdate
} from '../../../app/backend/repositories/work-experience-repository.interface'
import {data} from "autoprefixer";

export default class WorkExperiencesPostgresRepository implements WorkExperiencesRepositoryInterface {
  public constructor(private readonly db: VercelPgDatabaseSchema) {
  }

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
    {endDate, startDate, workModel, currentlyPosition, role, type, personId, enterprise}: WorkExperienceUpdate
  ) {
    return this.db
      .update(workExperiences)
      .set({
        endDate,
        startDate,
        workModel,
        currentlyPosition,
        role,
        type,
        personId,
        enterprise,
        updatedAt: new Date()
      })
      .where(
        and(
          eq(workExperiences.id, workExperienceId)
        )
      )
  }

  async findById(id: number): Promise<any> {
    return this.db.query.workExperiences.findFirst({
      where: eq(workExperiences.id, id),
    })
  }

  async save(workExperienceCreated: WorkExperienceCreate): Promise<any> {
    await this.db.insert(workExperiences).values({
      ...workExperienceCreated,
      createdAt: new Date(),
      updatedAt: null
    })
  }
}
