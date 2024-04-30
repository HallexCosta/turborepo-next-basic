import { TextInput } from 'flowbite-react'

type Props = {
  name: string
  value: string
}

export const Id = (props: Props) => {
  return <TextInput type="hidden" name={props.name} value={props.value} />
}
