import { db, pgDB } from '../../../../infra/database'
import { contacts, persons } from '../../../../infra/database/schema'
import { eq } from 'drizzle-orm'
import { NextResponse } from 'next/server'
import PersonsRepositorySqlite from '../../../../infra/database/repositories/persons-repository-sqlite'
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
  const person = await repository.findPersonByUsername(params.username)
  console.log('requisićão get')
  console.log({ person })
  if (!person)
    return NextResponse.json(
      {
        message: `Username "${username}" not exists`
      },
      {
        status: 404
      }
    )

  return NextResponse.json(
    {
      person
    },
    {
      status: 200
    }
  )
}
