import { PersonsRepositoryPostgres } from '../../../infra/database/repositories/persons-repository-postgres'
import { pgDB } from '../../../infra/database'
import { NextRequest, NextResponse } from 'next/server'
import { TokensRepository } from '../../../infra/database/repositories/tokens.repository'

export const POST = async (request: Request, { params }) => {
  const data = (await request.json()) as {
    name: string
    username: string
    email: string
    summary: string
  }

  const repository = new PersonsRepositoryPostgres(pgDB)

  if (await repository.findPersonByUsername(data.username)) {
    return NextResponse.json(
      {
        message: 'Username already exists'
      },
      {
        status: 422
      }
    )
  }

  const success = await repository.create(data)

  const responseInit = {
    status: 200
  }
  const body = {
    success
  }
  return NextResponse.json(body, responseInit)
}

export const GET = async (request: NextRequest, { params }) => {
  const hashToken = request.nextUrl.searchParams.get('token') as string

  if (!hashToken)
    return NextResponse.json(
      {
        message: 'Need a token'
      },
      {
        status: 422
      }
    )

  const tokensRepository = new TokensRepository(pgDB)
  const token = await tokensRepository.findByHashAndStateId(
    hashToken,
    TokensRepository.STATE_ACTIVE
  )

  if (!token)
    return NextResponse.json(
      {
        message: 'Token not found or not active'
      },
      {
        status: 422
      }
    )

  const personsRepository = new PersonsRepositoryPostgres(pgDB)
  const person = await personsRepository.findById(token.personId)

  const responseInit = {
    status: 200
  }
  const body = {
    person
  }
  return NextResponse.json(body, responseInit)
}
