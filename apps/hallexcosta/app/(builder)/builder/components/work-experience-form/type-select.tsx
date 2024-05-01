import { ResumeSelect } from '../resume-select'
import { WorkExperienceType } from '../../stores/work-experiences-store'

type TypeSelectProps = {
  name: string
  value: WorkExperienceType
}

export const TypeSelect = (props: TypeSelectProps) => {
  return (
    <ResumeSelect
      label="Tipo"
      placeholder="Escolha um tipo"
      value={props.value}
      name={props.name}
      options={[
        {
          label: 'Tempo integral',
          value: 'full-time'
        },
        {
          label: 'Meio periodo',
          value: 'part-time'
        },
        {
          label: 'Estagio',
          value: 'intership'
        },
        {
          label: 'Terceirizado',
          value: 'outsourcing'
        }
      ]}
    />
  )
}
