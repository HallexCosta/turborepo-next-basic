import { db } from "../../../../database";
import { contacts, persons } from "../../../../database/schema";
import { eq } from "drizzle-orm";

export async function POST(request: Request, { params }) {
  const data = await request.json();

  data.updatedAt = new Date();
  const updated = await db
    .update(persons)
    .set(data)
    .where(eq(persons.username, params.username));

  return new Response(
    JSON.stringify({
      message: "Personal data updated",
      updated,
    }),
    {
      status: 200,
    }
  );
}
