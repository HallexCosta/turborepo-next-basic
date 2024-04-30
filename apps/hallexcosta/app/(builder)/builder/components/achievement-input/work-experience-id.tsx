import { TextInput } from 'flowbite-react'

type Props = {
  name: string
  value: string
}

export const WorkExperienceId = (props: Props) => {
  return (
    <TextInput type="hidden" name={props.name} defaultValue={props.value} />
  )
}
