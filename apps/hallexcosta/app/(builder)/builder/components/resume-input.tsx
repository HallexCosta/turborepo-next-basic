import { memo } from 'react'
import { Resume } from '../stores/resume-store'
import { DeepPartial } from 'utility-types'

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

const ResumeInput = memo((props: ResumeInputProps) => {
  return (
    <div>
      <label className="text-sm font-medium text-gray-900 dark:text-white flex">{props.label}</label>

      {props.selectOptions?.length && (
        <select
          className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
        >
          {props.selectOptions.map((selectOption, index) => (
            <option key={index}>{selectOption}</option>
          ))}
          {/*<option>Tempo integral</option>*/}
          {/*<option>Meio periodo</option>*/}
          {/*<option>Estagio</option>*/}
          {/*<option>Ensino</option>*/}
          {/*<option>Projeto</option>*/}
        </select>
      )}
      {!props.selectOptions?.length && (
        <input
          placeholder={props.placeholder}
          defaultValue={props.value}
          name={props.name}
          className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
        />
      )}
    </div>
  )
})

ResumeInput.displayName = 'ResumeInput'

export { ResumeInput }
