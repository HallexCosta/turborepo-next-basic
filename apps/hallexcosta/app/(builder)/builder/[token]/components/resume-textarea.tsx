import { memo } from 'react'

type ResumeTextareaProps = {
  title?: string
  label?: string
  tag: string
  value: string
  placeholder: string
}

const ResumeTextarea = memo((props: ResumeTextareaProps) => {
  return (
    <div>
      {props.title && (
        <legend className="mb-4 text-xl text-white font-bold">
          {props.title}
        </legend>
      )}
      {props.label && (
        <label className="text-sm font-medium text-gray-900 dark:text-white flex">
          {props.label}
        </label>
      )}
      {/*<Textarea*/}
      {/*  placeholder={props.placeholder}*/}
      {/*  defaultValue={props.value}*/}
      {/*  className="p-2.5"*/}
      {/*  rows={10}*/}
      {/*  name={props.tag}*/}
      {/*/>*/}
      <textarea
        placeholder={props.placeholder}
        defaultValue={props.value}
        className="block w-full rounded-lg border disabled:cursor-not-allowed disabled:opacity-50 text-sm bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5"
        rows={10}
        name={props.tag}
      ></textarea>
    </div>
  )
})
ResumeTextarea.displayName = 'ResumeTextarea'
export { ResumeTextarea }
