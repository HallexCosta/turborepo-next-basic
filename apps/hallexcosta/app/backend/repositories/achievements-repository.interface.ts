export type Achievement = {
  id: number
  withDot: boolean | null
  content: string | null
  workExperienceId: number
  createdAt: Date
  updatedAt?: Date | null
}

export type AchievementCreate = Omit<Achievement, 'id'>
export type AchievementUpdate = Partial<Omit<Achievement, 'id' | 'createdAt'>>

export interface AchievementsRepositoryInterface {
  findById(id: number): Promise<Achievement>
  findAllByWorkExperienceId(workExperienceId: number): Promise<Achievement[]>
  deleteById(id: number): Promise<any>
  save(achievement: AchievementCreate): Promise<any>
  updateById(id: number, achievementUpdated: AchievementUpdate): Promise<any>
}