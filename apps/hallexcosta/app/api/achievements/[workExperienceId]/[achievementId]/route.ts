import { db } from "../../../../../database";
import { achievements } from "../../../../../database/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function DELETE(request: Request, { params }) {
  try {
    console.log("DELETE");

    const reference = {};
    const [alreadyAchievement] = await db
      .select()
      .from(achievements)
      .where(eq(achievements.id, params.achievementId));

    if (!alreadyAchievement) {
      throw new Error("Achievement already deleted");
    }

    await db
      .delete(achievements)
      .where(eq(achievements.id, params.achievementId));
    Object.assign(reference, {
      workExperienceId: alreadyAchievement.workExperienceId,
      achievementId: params.achievementId,
    });

    return new Response(
      JSON.stringify({
        message: "Achievement data deleted",
        reference,
        type: "delete",
      }),
      {
        status: 200,
      }
    );
  } catch (e) {
    return new Response(
      JSON.stringify({
        message: e.message,
        stack: e.stackTrace,
      }),
      {
        status: 400,
      }
    );
  }
}
