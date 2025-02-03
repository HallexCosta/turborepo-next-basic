import { sql } from "@vercel/postgres";
// import Database from "better-sqlite3";
// import { drizzle } from "drizzle-orm/better-sqlite3";
import { drizzle as pgDrizzle } from "drizzle-orm/vercel-postgres";
import type { VercelPgDatabase } from "drizzle-orm/vercel-postgres/driver";
import * as schema from "./schema";
import * as pgSchema from "./schema-pg";

// export const sqliteClient = new Database("./infra/database/db.sqlite");

// export const db = drizzle(sqliteClient, { logger: true, schema });

export type VercelPgDatabaseSchema = VercelPgDatabase<typeof pgSchema>;
export const pgDB = pgDrizzle(sql, { logger: false, schema: pgSchema });
