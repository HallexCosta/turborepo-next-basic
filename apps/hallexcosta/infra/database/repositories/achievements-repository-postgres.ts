import {
  Achievement,
  AchievementCreate,
  AchievementsRepositoryInterface, AchievementUpdate
} from '../../../app/backend/repositories/achievements-repository.interface'
import {VercelPgDatabase} from 'drizzle-orm/vercel-postgres/driver'
import {VercelPgDatabaseSchema} from '../index'
import {achievements} from '../schema-pg'
import {eq} from 'drizzle-orm'

export class AchievementsRepositoryPostgres implements AchievementsRepositoryInterface {
  constructor(private db: VercelPgDatabaseSchema) {
  }

  findAllByWorkExperienceId(workExperienceId: number): Promise<any> {
    return Promise.resolve(undefined);
  }

  async findById(id: number): Promise<Achievement> {
    const [achievement] = await this.db.select().from(achievements).where(eq(achievements.id, id)).limit(1)
    return achievement;
  }
  deleteById(id: number): Promise<any> {
    return Promise.resolve(this.db.delete(achievements).where(eq(achievements.id, id)));
  }
  
  save(achievement: AchievementCreate): Promise<any> {
    return Promise.resolve(this.db.insert(achievements).values(achievement));
  }

  updateById(id: number, achievementUpdated: AchievementUpdate): Promise<any> {
    return Promise.resolve(undefined);
  }
}