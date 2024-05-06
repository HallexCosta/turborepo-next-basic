import {
  TokenCreate,
  TokensInterface
} from '../../../app/backend/repositories/tokens.interface'
import { PostgresRepositoryBase } from './postgres-repository.base'
import { tokens } from '../schema-pg'
import { and, eq } from 'drizzle-orm'

export class TokensRepository
  extends PostgresRepositoryBase
  implements TokensInterface
{
  static STATE_INACTIVE = 0
  static STATE_ACTIVE = 1
  static STATE_EXPIRED = 2

  async findByHash(hash: string): Promise<any> {
    const [token] = await this.db
      .select()
      .from(tokens)
      .where(eq(tokens.hash, hash))
      .limit(1)
    return token
  }

  async findByHashAndStateId(hash: string, stateId: number): Promise<any> {
    const [token] = await this.db
      .select()
      .from(tokens)
      .where(and(eq(tokens.hash, hash), eq(tokens.stateId, stateId)))
      .limit(1)
    return token
  }

  async findByPersonId(personId: number): Promise<any> {
    const [token] = await this.db
      .select()
      .from(tokens)
      .where(eq(tokens.personId, personId))
      .limit(1)
    return token
  }

  async save(token: TokenCreate) {
    await this.db.insert(tokens).values({
      ...token,
      createdAt: new Date(),
      updatedAt: new Date()
    })
  }

  async updateByHash(hash: string, token: Partial<TokenCreate>) {
    let updatedTokenData = {}
    for (const tokenKey in token) {
      updatedTokenData[tokenKey] = token[tokenKey]
    }
    console.log({ updatedTokenData })
    return this.db
      .update(tokens)
      .set(updatedTokenData)
      .where(eq(tokens.hash, hash))
  }
}
