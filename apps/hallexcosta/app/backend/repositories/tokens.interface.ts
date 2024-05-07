export type TokenCreate = {
  token: string
  hash: string
  expirationDate: Date
  personId: number
  stateId: number
}

export interface TokensInterface {
  findByPersonId(personId: number): Promise<any>
  findByHash(hash: string): Promise<any>
  findByHashAndStateId(hash: string, stateId: number): Promise<any>
  updateByHash(hash: string, token: Partial<TokenCreate>): Promise<any>
  save(token: TokenCreate): Promise<void>
}
