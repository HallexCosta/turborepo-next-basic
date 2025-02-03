'use server'

import {PersonsRepositoryPostgres} from "../../../../../infra/database/repositories/persons-repository-postgres";
import {pgDB} from "../../../../../infra/database";
import {TokensRepository} from "../../../../../infra/database/repositories/tokens.repository";

export const savePersonAndContactsByToken = async (hash: string, data: Record<string, any>) => {
  const tokenRepository = new TokensRepository(pgDB)

  const token = await tokenRepository.findByHashAndStateId(hash, TokensRepository.STATE_ACTIVE)


  const personRepository = new PersonsRepositoryPostgres(pgDB)
  await personRepository.updateById(token.personId, )
}