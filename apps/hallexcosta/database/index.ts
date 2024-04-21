import { drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/sql-js/migrator";
import Database from "better-sqlite3";
import * as schema from "./schema";

export const sqliteClient = new Database("./database/db.sqlite");

export const db = drizzle(sqliteClient, { logger: true, schema });
