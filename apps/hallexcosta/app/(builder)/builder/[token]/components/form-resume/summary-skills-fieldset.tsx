import { ResumeTextarea } from '../resume-textarea'
import { Person } from '../../page'

type Props = Pick<Person, 'summary' | 'skills'>

const SummarySkillsFieldset = (props: Props) => {
  return (
    <fieldset className="grid md:grid-cols-2 gap-6 mb-6">
      <ResumeTextarea
        title="Sumário"
        tag="summary"
        value={props.summary}
        placeholder="Nós de um breve resumo contando um pouco sobre seus objetivos profissionais"
      />
      <ResumeTextarea
        title="Habilidades"
        tag="skills"
        value={props.skills}
        placeholder="Ex: Laravel, Hyperf, Node.js, Express.js, Next.js, Nullstack, Typescript, etc..."
      />
    </fieldset>
  )
}

export { SummarySkillsFieldset }
