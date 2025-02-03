'use server'

import {TokensRepository} from '../../../../../infra/database/repositories/tokens.repository'
import {pgDB} from '../../../../../infra/database'
import {
  AchievementsRepositoryPostgres
} from '../../../../../infra/database/repositories/achievements-repository-postgres'
import { revalidatePath, revalidateTag } from 'next/cache'

export const deleteAchievementById = async (authToken: string, id: number) => {
  const tokensRepository = new TokensRepository(pgDB)
  const achievementRepository = new AchievementsRepositoryPostgres(pgDB)
  if (await achievementRepository.findById(id)) {
    await achievementRepository.deleteById(id)
  }
  revalidatePath(`/builder/${authToken}`)
}