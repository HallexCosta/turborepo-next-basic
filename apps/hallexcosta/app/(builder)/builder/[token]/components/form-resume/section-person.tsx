import { ResumeInput } from '../resume-input'

const SectionPerson = (props: any) => {
  return (
    <fieldset>
      <legend className="mb-4 text-xl text-white font-bold">Seus dados</legend>
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <ResumeInput
            label="Seu nome"
            value={props.name}
            placeholder="Ex: Hállex Costa"
            name="name"
          />
        </div>
        <div>
          <ResumeInput
            label="Seu cargo"
            value={props.role}
            placeholder="Ex: Developer Fullstack BE-heavy"
            name="role"
          />
        </div>
      </div>
    </fieldset>
  )
}

export { SectionPerson }
