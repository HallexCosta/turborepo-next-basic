type Props = {
  name: string
  value: string
}

export const Id = (props: Props) => {
  return (
    <input
      className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm rounded-lg"
      type="hidden"
      name={props.name}
      value={props.value}
    />
  )
}
