'use client'
import { Label, Select, TextInput } from 'flowbite-react'
import { memo, useEffect } from 'react'
import { Resume, useResume } from '../stores/resume-store'
import { DeepPartial } from 'flowbite-react/lib/esm/types'
import _ from 'lodash'

type ResumeInputProps = {
  label: string
  tag: string
  data?: DeepPartial<Resume>
  value: string
  name?: string
  placeholder: string
  onChange?: void
  updateState?: void
  selectOptions?: string[]
}

const getInputName = (tag) => {
  const parts = tag.split('.')
  return parts[parts.length - 1]
}

const ResumeInput = memo((props: ResumeInputProps) => {
  return (
    <div>
      <Label>{props.label}</Label>

      {props.selectOptions?.length && (
        <Select>
          {props.selectOptions.map((selectOption, index) => (
            <option key={index}>{selectOption}</option>
          ))}
          {/*<option>Tempo integral</option>*/}
          {/*<option>Meio periodo</option>*/}
          {/*<option>Estagio</option>*/}
          {/*<option>Ensino</option>*/}
          {/*<option>Projeto</option>*/}
        </Select>
      )}
      {!props.selectOptions?.length && (
        <TextInput
          placeholder={props.placeholder}
          defaultValue={props.value}
          name={props.name ?? getInputName(props.tag)}
        />
      )}
    </div>
  )
})

ResumeInput.displayName = 'ResumeInput'

export { ResumeInput }
