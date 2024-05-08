import { db, pgDB } from '../../../../infra/database'
import { persons } from '../../../../infra/database/schema'
import { eq } from 'drizzle-orm'
import { NextResponse } from 'next/server'
import { PersonsRepositoryPostgres } from '../../../../infra/database/repositories/persons-repository-postgres'

export async function POST(request: Request, { params }) {
  const data = await request.json()
  console.log('creating new person')
  console.log({ data })

  data.updatedAt = new Date()
  const updated = await db
    .update(persons)
    .set(data)
    .where(eq(persons.username, params.username))

  return new Response(
    JSON.stringify({
      message: 'Personal data updated',
      updated
    }),
    {
      status: 200
    }
  )
}

export async function GET(request: Request, { params }) {
  const username = params.username

  const repository = new PersonsRepositoryPostgres(pgDB)
  const person = await repository.findByUsername(params.username)

  if (!person) {
    const responseBody = {
      message: `Username "${username}" not exists`
    }
    const responseInit = {
      status: 404
    }
    return NextResponse.json(responseBody, responseInit)
  }

  const responseBody = {
    person
  }
  const responseInit = {
    status: 200
  }
  return NextResponse.json(responseBody, responseInit)
}
