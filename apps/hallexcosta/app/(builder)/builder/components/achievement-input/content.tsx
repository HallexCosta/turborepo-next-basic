import { TextInput } from 'flowbite-react'

type Props = {
  name: string
  value: string
}

export const Content = (props: Props) => {
  return <TextInput name={props.name} defaultValue={props.value} />
}
