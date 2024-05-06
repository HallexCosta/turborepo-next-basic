import { memo } from 'react'
import { Resume } from '../stores/resume-store'
import { DeepPartial } from 'utility-types'

type ResumeDatePickerProps = {
  label: string
  tag: string
  name: string
  data?: DeepPartial<Resume>
  value: Date
  disabled?: boolean
  onChange?: void
  updateState?: void
  options?: string[]
}

// const ResumeDatePicker = memo((props: ResumeDatePickerProps) => {
//   const limitDate = new Date()
//   const lastDayFromMonth = new Date(
//     limitDate.getFullYear(),
//     limitDate.getMonth() + 1,
//     0
//   ).getDate()
//
//   return (
//     <div>
//       <label className="text-sm font-medium text-gray-900 dark:text-white flex">{props.label}</label>
//
//       <Datepicker
//         disabled={props.disabled}
//         maxDate={
//           new Date(
//             limitDate.getFullYear(),
//             limitDate.getMonth(),
//             lastDayFromMonth
//           )
//         }
//         language="pt-BR"
//         labelTodayButton="Hoje"
//         labelClearButton="Limpar"
//         weekStart={0}
//         autoHide={false}
//         name={props.name ?? props.tag}
//         defaultDate={props.value}
//         // onSelectedDateChanged={(date: Date) => handleUpdateResume(date)}
//       />
//     </div>
//   )
// })
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

      <p className="text-white">Em breve</p>
      <input type="date" />
    </div>
  )
})
ResumeDatePicker.displayName = 'ResumeDatePicker'

export { ResumeDatePicker }
