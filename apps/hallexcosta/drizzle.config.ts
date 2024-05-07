import type { Config } from 'drizzle-kit'
import { loadEnvConfig } from '@next/env'

loadEnvConfig(process.cwd())

console.log(process.env.POSTGRES_URL)
export default {
  schema: './infra/database/schema-pg.ts',
  driver: 'pg',
  out: './infra/database/drizzle-pg',
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL as string
  }
} satisfies Config
