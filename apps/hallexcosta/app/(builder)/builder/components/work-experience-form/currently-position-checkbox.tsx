import { ResumeCheckbox } from '../resume-checkbox'

type CurrentlyPositionCheckboxProps = {
  workExperienceIndex: number
  name: string
  value: boolean
}

export const CurrentlyPositionCheckbox = (
  props: CurrentlyPositionCheckboxProps
) => {
  return (
    <ResumeCheckbox
      label="Atualmente estou nesta posição"
      tag={`workExperiences[${props.workExperienceIndex}].currentlyPosition`}
      value={props.value}
      name={props.name}
    />
  )
}
