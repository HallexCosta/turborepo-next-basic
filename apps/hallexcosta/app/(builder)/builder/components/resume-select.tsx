'use client'
import { memo } from 'react'
import { Resume } from '../stores/resume-store'
import { DeepPartial } from 'utility-types'

type ResumeSelectProps = {
  label: string
  tag?: string
  name: string
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
  return (
    <div>
      <label className="text-sm font-medium text-gray-900 dark:text-white flex">{props.label}</label>

      {props.options?.length && (
        <select
          // onChange={(e) => handleUpdateResume(e.target.value)}
          defaultValue={props.value}
          name={props.name}
          className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
        >
          <option disabled defaultValue="">
            {props.placeholder}
          </option>
          {props.options.map(({ value, label }, index) => (
            <option key={index} value={value}>
              {label}
            </option>
          ))}
        </select>
      )}
    </div>
  )
})
ResumeSelect.displayName = 'ResumeSelect'

export { ResumeSelect }
