import { db } from '../../../../database'
import { contacts, persons } from '../../../../database/schema'
import { eq } from 'drizzle-orm'
import { NextResponse } from 'next/server'
import PersonsRepository from '../../../../database/repositories/persons-repository'

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

  const repository = new PersonsRepository(db)
  const person = await repository.findPersonByUsername(params.username)

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
