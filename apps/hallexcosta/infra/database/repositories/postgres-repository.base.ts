import { VercelPgDatabaseSchema } from '../index'

export abstract class PostgresRepositoryBase {
  constructor(protected readonly db: VercelPgDatabaseSchema) {}
}
