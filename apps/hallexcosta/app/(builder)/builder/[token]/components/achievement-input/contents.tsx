type Props = {
  name: string
  placeholder: string
  value: string
}

export const Contents = (props: Props) => {
  return (
    <textarea
      placeholder={props.placeholder}
      defaultValue={props.value}
      className="block w-full rounded-lg border disabled:cursor-not-allowed disabled:opacity-50 text-sm bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5"
      rows={10}
      name={props.name}
    ></textarea>
  )
}
