export type PersonCreate = {
  name: string
  username: string
  email: string
  summary?: string
  skills?: string
}

export type PersonUpdate = Partial<PersonCreate>

export interface PersonsRepositoryInterface {
  findByUsername: (username: string, relations?: string[]) => Promise<any>
  findById: (id: number) => Promise<any>
  create(person: PersonCreate): Promise<any>
  updateById(personId: number, personUpdated: PersonUpdate): Promise<void>

}
