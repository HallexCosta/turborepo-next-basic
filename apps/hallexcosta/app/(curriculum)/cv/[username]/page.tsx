import PersonsRepository from "../../../../database/repositories/persons-repository";
import {db} from "../../../../database";
import {CVTemplatePage, CVTemplatePageEditable} from '../page'

export default async function Page({params}: {params: {username: string}}) {
    const repository = new PersonsRepository(db)
    const person = await repository.findPersonByUsername(params.username)

    console.log(params.username)
    // if (params.username === 'hallexcosta') return <CVTemplatePage />
    if (!person) return <h1>Username {params.username} didn´t found</h1>

    console.log({person})

    return (
        <CVTemplatePageEditable
            person={person}
        />
    )
}