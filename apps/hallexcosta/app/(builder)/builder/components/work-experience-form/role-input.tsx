import { ResumeInput } from '../resume-input'

type RoleInputProps = {
  name: string
  value: string
}

export const RoleInput = (props: RoleInputProps) => {
  return (
    <ResumeInput
      label="Cargo"
      placeholder="Ex: Desenvolvedor Backend"
      value={props.value}
      tag={props.name}
      name={props.name}
    />
  )
}
