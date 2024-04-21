import { BetterSQLite3Database } from 'drizzle-orm/better-sqlite3'
import * as schema from '../schema'
import { eq } from 'drizzle-orm'

interface PersonsRepositoryInterface {
  findPersonByUsername: (username: string, relations?: string[]) => void
}

export default class PersonsRepository implements PersonsRepositoryInterface {
  public constructor(private db: BetterSQLite3Database<typeof schema>) {}
  public async findPersonByUsername(username: string, relations?: string[]) {
    return this.db.query.persons.findFirst({
      where: (person) => eq(person.username, username),
      with: {
        workExperiences: {
          with: {
            achievements: true
          },
          orderBy: (workExperiences, { desc }) => [
            desc(workExperiences.startDate)
          ]
        },
        contact: true
      }
    })
  }
}
