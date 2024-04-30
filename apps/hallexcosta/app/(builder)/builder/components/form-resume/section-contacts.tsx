import { ResumeInput } from '../resume-input'

type ContactProps = {
  city: string
  state: string
  phone: string
  website: string
  linkedin: string
  email: string
  github: string
}

const SectionContacts = (props: ContactProps) => {
  return (
    <fieldset>
      <legend className="mb-4 text-xl text-white font-bold">Contatos</legend>

      <div className="grid gap-6 mb-6 md:grid-cols-4">
        <ResumeInput
          label="Cidade"
          placeholder="Ex: Araçatuba"
          value={props.city}
          tag="contact.city"
        />
        <ResumeInput
          label="Estado"
          placeholder="Ex: São Paulo"
          value={props.state}
          tag="contact.state"
        />
        <ResumeInput
          label="Telefone"
          placeholder="Ex: (99) 99999-9999"
          value={props.phone}
          tag="contact.phone"
        />
        <ResumeInput
          label="Email"
          placeholder="Ex: hallex.costa@hotmail.com"
          value={props.email}
          tag="contact.email"
        />
        <ResumeInput
          label="Linkedin"
          placeholder="Ex: https://linkedin.com/in/hallexcosta"
          value={props.linkedin}
          tag="contact.linkedin"
        />
        <ResumeInput
          label="Github"
          placeholder="Ex: https://github.com/HallexCosta"
          value={props.github}
          tag="contact.github"
        />
        <ResumeInput
          label="Site"
          placeholder="Ex: https://hallexcosta.com"
          value={props.website}
          tag="contact.website"
        />
      </div>
    </fieldset>
  )
}

export { SectionContacts }
