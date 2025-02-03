import { memo } from 'react'
import { Resume } from '../stores/resume-store'
import { DeepPartial } from 'utility-types'

type ResumeDatePickerProps = {
  label: string
  tag: string
  name: string
  data?: DeepPartial<Resume>
  value?: string
  disabled?: boolean
  onChange?: void
  updateState?: void
  options?: string[]
}

const ResumeDatePicker = memo((props: ResumeDatePickerProps) => {
  const limitDate = new Date()
  const lastDayFromMonth = new Date(
    limitDate.getFullYear(),
    limitDate.getMonth() + 1,
    0
  ).getDate()

  return (
    <div>
      <label className="text-sm font-medium text-gray-900 dark:text-white flex">
        {props.label}
      </label>

      <input disabled={props.disabled} defaultValue={props.disabled ? 'null' : props.value} name={props.name} type="date" />
    </div>
  )
})
ResumeDatePicker.displayName = 'ResumeDatePicker'

export { ResumeDatePicker }
