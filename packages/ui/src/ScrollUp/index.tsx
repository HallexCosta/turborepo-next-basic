import { ArrowUp } from '../Icons/ArrowUp'

export function ScrollUp() {
  return (
    <div className="absolute right-0 bottom-0">
      <div
        className={`w-14 h-14 flex items-center justify-center rounded-full 
          bg-gradient-to-r from-purple-600 via-indigo-400 to-blue-400 
          cursor-pointer 
          hidden
          md:block
          mr-12
        `}
        style={{ display: 'flex' }}
      >
        <ArrowUp />
      </div>
    </div>
  )
}
