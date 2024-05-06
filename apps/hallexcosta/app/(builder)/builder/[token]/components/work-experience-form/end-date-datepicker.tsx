import { ResumeDatePicker } from '../resume-date-picker'

type EndDateDatepickerProps = {
  workExperienceIndex: number
  value: string | null | Date
  name: string
  disabled: boolean
}

export const EndDateDatepicker = (props: EndDateDatepickerProps) => {
  return (
    <ResumeDatePicker
      label="Fim"
      tag={`workExperiences[${props.workExperienceIndex}].endDate`}
      name={props.name}
      value={props.value ? new Date(props.value) : new Date()}
      disabled={props.disabled}
    />
  )
}
