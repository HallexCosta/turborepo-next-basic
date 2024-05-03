'use client'
import { memo } from 'react'

type ResumeCheckboxProps = {
  label: string
  tag: string
  name: string
  value: boolean
  onChange?: void
  selectOptions?: string[]
}

const ResumeCheckbox = memo((props: ResumeCheckboxProps) => {
  return (
    <div className="flex items-center gap-2">
      <input
        name={props.name}
        defaultChecked={props.value}
        type="checkbox"
        className="h-4 w-4 rounded focus:ring-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 bg-gray-100 focus:ring-cyan-600 dark:ring-offset-gray-800 dark:focus:ring-cyan-600 text-cyan-600"
      />
      <label className="text-sm font-medium text-gray-900 dark:text-white flex">{props.label}</label>
    </div>
  )
})
ResumeCheckbox.displayName = 'ResumeCheckbox'
export { ResumeCheckbox }
