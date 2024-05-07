import { db } from '../../../../../infra/database'
import { contacts, persons } from '../../../../../infra/database/schema'
import { eq } from 'drizzle-orm'

export async function POST(request: Request, { params }) {
  console.log('Updating contacts...')
  console.log(params)
  const data = await request.json()
  console.log({ data })
  delete data.updatedAt
  const updated = await db
    .update(contacts)
    .set(data)
    .where(eq(contacts.personId, params.id))
  console.log({ updated })
  return new Response(
    JSON.stringify({
      message: 'Contacts updated',
      data,
      updated
    }),
    {
      status: 200
    }
  )
}
