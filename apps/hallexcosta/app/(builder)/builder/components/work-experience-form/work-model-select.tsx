import { ResumeSelect } from '../resume-select'
import { WorkExperienceModel } from '../../stores/work-experiences-store'

type WorkModelSelectProps = {
  workExperienceIndex: number
  value: WorkExperienceModel
  name: string
}

export const WorkModelSelect = (props: WorkModelSelectProps) => {
  return (
    <ResumeSelect
      label="Modelo"
      placeholder="Escolha um modelo"
      tag={`workExperiences[${props.workExperienceIndex}].workModel`}
      name={props.name}
      value={props.value}
      options={[
        {
          label: 'Presencial',
          value: 'in-office'
        },
        {
          label: 'Remoto',
          value: 'home-office'
        }
      ]}
    />
  )
}
