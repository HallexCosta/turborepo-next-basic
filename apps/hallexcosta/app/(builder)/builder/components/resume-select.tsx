'use client'
import { Label, Select, TextInput } from 'flowbite-react'
import { memo, useEffect } from 'react'
import { Resume, useResume } from '../stores/resume-store'
import { DeepPartial } from 'flowbite-react/lib/esm/types'
import _ from 'lodash'

type ResumeSelectProps = {
  label: string
  tag: string
  data?: DeepPartial<Resume>
  value?: string
  placeholder: string
  onChange?: void
  updateState?: void
  options?: {
    label: string
    value: string
  }[]
}

const ResumeSelect = memo((props: ResumeSelectProps) => {
  const { resume, updateResume } = useResume()

  const handleUpdateResume = (value: string) => {
    updateResume(createUpdateResumeData(props.tag, value))
  }
  const createUpdateResumeData = (tag: string, value: string | undefined) => {
    const updatedResume: DeepPartial<Resume> = {}
    _.set(updatedResume, tag, value)

    console.log({ updatedResume })
    return updatedResume
  }

  useEffect(() => {
    console.log({ loadash: _.get(resume, props.tag) })
    updateResume(createUpdateResumeData(props.tag, props.value))
    // handleUpdateResume(props.value)
  }, [])

  return (
    <div>
      <Label>{props.label}</Label>

      {props.options?.length && (
        <Select
          onChange={(e) => handleUpdateResume(e.target.value)}
          value={props.value}
        >
          <option disabled selected value="">
            {props.placeholder}
          </option>
          {props.options.map(({ value, label }, index) => (
            <option key={index} value={value}>
              {label}
            </option>
          ))}
        </Select>
      )}
    </div>
  )
})
ResumeSelect.displayName = 'ResumeSelect'

export { ResumeSelect }
