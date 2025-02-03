import {ContactsRepositoryInterface} from '../../../app/backend/repositories/contacts-repository.interface'
import {VercelPgDatabaseSchema} from '../index'
import {contacts} from '../schema-pg'
import {eq} from 'drizzle-orm'

export class ContactsRepositoryPostgres implements ContactsRepositoryInterface {
  public constructor(private readonly  db: VercelPgDatabaseSchema) {
  }
  async updateByPersonId(personId: number, contactsUpdated: Record<string, any>) {
    delete contactsUpdated.id
    await this.db.update(contacts)
      .set(contactsUpdated)
      .where(eq(contacts.personId, personId))
  }

  async save(contactSaved: Record<string, any>) {
    delete contactSaved.id
    await this.db.insert(contacts).values({
      ...contactSaved,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
  }

  async findByPersonId(personId: number) {
    const [person] = await this.db.select().from(contacts).where(eq(contacts.personId, personId))
    return person
  }
}