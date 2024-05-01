import { ResumeInput } from '../resume-input'

type EnterpriseInputProps = {
  name: string
  value: string
}

export const EnterpriseInput = (props: EnterpriseInputProps) => {
  return (
    <ResumeInput
      label="Empresa"
      placeholder="Empresa/Compania"
      value={props.value}
      tag={props.name ?? ''}
      name={props.name}
    />
  )
}
