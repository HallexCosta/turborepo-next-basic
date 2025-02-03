import { ResumeDatePicker } from '../resume-date-picker'

type StartDateDatepicker = {
  workExperienceIndex: number
  value: string
  name: string
}

export const StartDateDatepicker = (props: StartDateDatepicker) => {
  return (
    <ResumeDatePicker
      label="Inicio"
      tag={`workExperiences[${props.workExperienceIndex}].startDate`}
      name={props.name}
      value={props.value}
    />
  )
}
