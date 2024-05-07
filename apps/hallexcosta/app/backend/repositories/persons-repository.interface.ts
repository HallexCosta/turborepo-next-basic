export type PersonCreate = {
  name: string
  username: string
  email: string
  summary?: string
  skills?: string
}
export interface PersonsRepositoryInterface {
  findPersonByUsername: (username: string, relations?: string[]) => Promise<any>
  findById: (id: number) => Promise<any>
  create(person: PersonCreate): Promise<any>
}
