'use client'
import { Checkbox, Label, Select, TextInput } from 'flowbite-react'
import { memo, useEffect, useState } from 'react'
import { Resume, useResume } from '../stores/resume-store'
import { DeepPartial } from 'flowbite-react/lib/esm/types'
import _ from 'lodash'

type ResumeCheckboxProps = {
  label: string
  tag: string
  value: boolean
  onChange?: void
  selectOptions?: string[]
}

// type CheckboxUpdateCurrentlyPositionProps = {
//     endDate: Date
// }

const ResumeCheckbox = memo((props: ResumeCheckboxProps) => {
  const { resume, updateResume } = useResume()
  const [currentlyPosition, setCurrentlyPosition] = useState(props.value)

  const onToggleCheckbox = (e) => {
    const stateCurrentlyPosition = !currentlyPosition
    handleUpdateResume(stateCurrentlyPosition)
    setCurrentlyPosition(stateCurrentlyPosition)
  }
  const handleUpdateResume = (currentlyPosition: boolean) => {
    let endDate: Date | null = null
    if (!currentlyPosition) {
      endDate = new Date()
    }
    updateResume(createUpdateResumeData(props.tag, currentlyPosition, endDate))
  }
  const createUpdateResumeData = (
    tag: string,
    currentlyPosition: boolean,
    endDate: null | Date
  ) => {
    const updatedResume: DeepPartial<Resume> = {}
    _.set(updatedResume, tag, currentlyPosition)
    _.set(updatedResume, tag.replace('currentlyPosition', 'endDate'), endDate)

    console.log({ updatedResume })
    return updatedResume
  }

  useEffect(() => {
    const endDate = _.get(
      resume,
      props.tag.replace('currentlyPosition', 'endDate')
    )
    console.log('UseEffect', { endDate, currentlyPosition: props.value })
    updateResume(createUpdateResumeData(props.tag, props.value, endDate))
  }, [])

  return (
    <div className="flex items-center gap-2">
      <Checkbox onChange={onToggleCheckbox} checked={props.value} />
      <Label className="flex">{props.label}</Label>
    </div>
  )
})
ResumeCheckbox.displayName = 'ResumeCheckbox'
export { ResumeCheckbox }
