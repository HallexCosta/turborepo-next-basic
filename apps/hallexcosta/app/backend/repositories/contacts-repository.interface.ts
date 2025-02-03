type Contact = {
  id: number
  website: string | null
  github: string | null
  linkedin: string | null
  city: string | null
  state: string | null
  email: string | null
  phone: string | null
  createdAt: Date
  updatedAt: Date | null
  personId: number
}

export interface ContactsRepositoryInterface {
  findByPersonId(personId: number): Promise<Contact>
  save(contacts: Record<string, any>): Promise<void>
  updateByPersonId(personId: number, contacts: Record<string, any>): Promise<void>
}