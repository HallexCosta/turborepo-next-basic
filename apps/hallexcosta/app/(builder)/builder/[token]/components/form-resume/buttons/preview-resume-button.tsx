export const PreviewResumeButton = ({ handleOpenModal = () => {} }) => {
  return (
    <button
      onClick={handleOpenModal}
      className="group flex items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-gray-900 bg-white border border-gray-300 enabled:hover:bg-gray-100 focus:ring-cyan-300 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:enabled:hover:bg-gray-700 dark:enabled:hover:border-gray-700 dark:focus:ring-gray-700 rounded-lg focus:ring-2 w-full"
    >
      <span className="flex items-center transition-all duration-200 rounded-md text-sm px-4 py-2">
        Pré-visualizar
      </span>
    </button>
  )
}
