import { BetterSQLite3Database } from 'drizzle-orm/better-sqlite3'
import * as schema from '../schema'
import { eq } from 'drizzle-orm'
import { PersonCreate, PersonsRepositoryInterface} from '../../../app/backend/repositories/persons-repository.interface'

export default class PersonsRepositorySqlite
  implements PersonsRepositoryInterface {
  public constructor(private db: BetterSQLite3Database<typeof schema>) {
  }

  findById: (id: number) => Promise<any>
  create(person: PersonCreate): Promise<any> {
      throw new Error('Method not implemented.')
  }
  public async findByUsername(username: string, relations?: string[]) {
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
