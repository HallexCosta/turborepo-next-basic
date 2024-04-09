import {db, sqliteClient} from './index'
import {migrate} from "drizzle-orm/better-sqlite3/migrator";

migrate(db, {migrationsFolder: './database/drizzle'})