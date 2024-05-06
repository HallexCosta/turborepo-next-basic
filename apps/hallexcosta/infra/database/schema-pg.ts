import { relations } from 'drizzle-orm'
import { createId } from '@paralleldrive/cuid2'
import {
  boolean,
  text,
  pgTable,
  serial,
  timestamp,
  varchar,
  integer,
  uuid
} from 'drizzle-orm/pg-core'

export const tokens = pgTable('tokens', {
  id: serial('id').primaryKey(),
  personId: serial('person_id').references(() => persons.id),
  token: varchar('token').notNull(),
  hash: uuid('hash').notNull(),
  expirationDate: timestamp('expiration_date').notNull(),
  stateId: integer('state_id').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at')
})

export const persons = pgTable('persons', {
  id: serial('id').primaryKey(),
  username: varchar('username').unique(),
  email: varchar('email').default(''),
  name: varchar('name'),
  role: varchar('role'), // think to change name from column to target_role
  summary: text('summary'),
  skills: text('skills'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at')
})

export const personsRelations = relations(persons, ({ one, many }) => ({
  workExperiences: many(workExperiences),
  contact: one(contacts, {
    fields: [persons.id],
    references: [contacts.personId]
  })
}))

export const workExperiences = pgTable('work_experiences', {
  id: serial('id').primaryKey(),
  enterprise: varchar('enterprise'),
  role: varchar('role'), // think to change name from column to my_role
  workModel: varchar('work_model'),
  type: varchar('type'),
  startDate: timestamp('start_date').notNull(),
  endDate: timestamp('end_date').notNull(),
  currentlyPosition: boolean('currently_position'),
  personId: serial('person_id').references(() => persons.id),
  createdAt: timestamp('created_at').notNull(),
  updatedAt: timestamp('updated_at')
})

export const workExperiencesRelations = relations(
  workExperiences,
  ({ one, many }) => ({
    achievements: many(achievements),
    person: one(persons, {
      fields: [workExperiences.personId],
      references: [persons.id]
    })
  })
)

export const achievements = pgTable('achievements', {
  id: serial('id').primaryKey(),
  content: varchar('content').default(''),
  withDot: boolean('with_dot'),
  duration: varchar('duration'),
  workExperienceId: serial('work_experience_id').references(
    () => workExperiences.id
  ),
  createdAt: timestamp('created_at').notNull(),
  updatedAt: timestamp('updated_at')
})

export const achievementsRelations = relations(achievements, ({ one }) => ({
  workExperience: one(workExperiences, {
    fields: [achievements.workExperienceId],
    references: [workExperiences.id]
  })
}))

export const contacts = pgTable('contacts', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => createId()),
  website: varchar('website').default(''),
  github: varchar('github').default(''),
  linkedin: varchar('linkedin').default(''),
  city: varchar('city').default(''),
  state: varchar('state').default(''),
  email: varchar('email').default(''),
  phone: varchar('phone').default(''),
  personId: serial('person_id').references(() => persons.id),
  createdAt: timestamp('created_at').notNull(),
  updatedAt: timestamp('updated_at')
})

export const contactsRelations = relations(contacts, ({ one }) => ({
  person: one(persons, {
    fields: [contacts.personId],
    references: [persons.id]
  })
}))
