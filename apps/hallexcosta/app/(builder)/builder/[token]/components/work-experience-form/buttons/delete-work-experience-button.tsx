import { useFormStatus } from 'react-dom'

export const DeleteWorkExperienceButton = () => {
  const status = useFormStatus()
  return (
    <button
      type="submit"
      color="blue"
      disabled={status.pending}
      className="group flex items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white bg-red-700 border border-transparent enabled:hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:enabled:hover:bg-red-700 dark:focus:ring-red-900 rounded-lg focus:ring-2"
    >
      <span className="flex items-center transition-all duration-200 rounded-md text-xs px-2 py-1">
        <RemoveIcon />
      </span>
    </button>
  )
}

const RemoveIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="#fff"
      viewBox="0 0 256 256"
    >
      <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
    </svg>
  )
}
