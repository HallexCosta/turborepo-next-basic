import {primaryKey, numeric, int, text, integer, sqliteTable } from 'drizzle-orm/sqlite-core'
import {relations} from "drizzle-orm";
import {createId} from "@paralleldrive/cuid2";

export const persons = sqliteTable('persons', {
    id: text("id").primaryKey().$defaultFn(() => createId()),
    username: text("username").unique(),
    email: text("email").default(''),
    name: text("name"),
    role: text("role"), // think to change name from column to target_role
    summary: text("summary"),
    skills: text("skills"),
    createdAt: integer("created_at", {mode: 'timestamp'}),
    updatedAt: integer("updated_at", {mode: 'timestamp'}),
})

export const personsRelations = relations(persons, ({ one, many }) => ({
    workExperiences: many(workExperiences),
    contact: one(contacts, {
        fields: [persons.id],
        references: [contacts.personId]
    })
}))

export const workExperiences = sqliteTable('work_experiences', {
    id: text("id").primaryKey().$defaultFn(() => createId()),
    enterprise: text("enterprise"),
    role: text("role"), // think to change name from column to my_role
    workModel: text("work_model"),
    type: text("type"),
    startDate: integer("start_date", {mode: 'timestamp'}),
    endDate: integer("end_date", {mode: 'timestamp'}),
    currentlyPosition: integer('currently_position', {mode: "boolean"}),
    personId: text('person_id').references(() => persons.id),
    createdAt: integer("created_at", {mode: 'timestamp'}),
    updatedAt: integer("updated_at", {mode: 'timestamp'}),
})

export const workExperiencesRelations = relations(workExperiences, ({one, many}) => ({
    achievements: many(achievements),
    person: one(persons, {
        fields: [workExperiences.personId],
        references: [persons.id]
    })
}))


export const achievements = sqliteTable('achievements', {
    id: text("id").primaryKey().$defaultFn(() => createId()),
    content: text("content").default(''),
    withDot: int("with_dot"),
    duration: text("duration"),
    workExperienceId: text("work_experience_id").references(() => workExperiences.id),
    createdAt: integer("created_at", {mode: 'timestamp'}),
    updatedAt: integer("updated_at", {mode: 'timestamp'}),
})

export const achievementsRelations = relations(achievements, ({one}) => ({
    workExperience: one(workExperiences, {
        fields: [achievements.workExperienceId],
        references: [workExperiences.id]
    })
}))


export const contacts = sqliteTable('contacts', {
    id: text("id").primaryKey().$defaultFn(() => createId()),
    website: text('website').default(''),
    github: text('github').default(''),
    linkedin: text('linkedin').default(''),
    city: text('city').default(''),
    state: text('state').default(''),
    email: text('email').default(''),
    phone: text('phone').default(''),
    personId: text('person_id').references(() => persons.id),
    createdAt: integer("created_at", {mode: 'timestamp'}),
    updatedAt: integer("updated_at", {mode: 'timestamp'}),
})

export const contactsRelations = relations(contacts, ({one}) => ({
    person: one(persons, {
        fields: [contacts.personId],
        references: [persons.id]
    })
}))
