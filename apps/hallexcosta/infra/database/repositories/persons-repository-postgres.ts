import { eq } from 'drizzle-orm'
import { VercelPgDatabaseSchema } from '../index'
import { persons } from '../schema-pg'
import {
  PersonCreate,
  PersonsRepositoryInterface, PersonUpdate
} from '../../../app/backend/repositories/persons-repository.interface'

export class PersonsRepositoryPostgres implements PersonsRepositoryInterface {
  constructor(private readonly db: VercelPgDatabaseSchema) {}
  async findByUsername(username: string, relations?: string[]) {
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

  async findById(id: number) {
    return this.db.query.persons.findFirst({
      where: (person) => eq(person.id, id),
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

  async create(person: PersonCreate) {
    return this.db.insert(persons).values({
      ...person,
      createdAt: new Date(),
      updatedAt: new Date()
    })
  }

  async updateById(personId: number, personUpdated: PersonUpdate) {
    await this.db.update(persons)
      .set({
        ...personUpdated,
        updatedAt: new Date()
      })
      .where(eq(persons.id, personId))
  }
}
