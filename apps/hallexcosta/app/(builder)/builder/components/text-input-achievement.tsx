import { memo } from 'react'
import { TextInput, Textarea } from 'flowbite-react'
import { useResume } from '../stores/resume-store'

type TextInputAchievementProps = {
  id?: string
  name: string
  workExperienceId?: string
  onChangeText?: (e: any, inputIndex: number) => void
  key?: string | number
  content?: string
  index?: number
  workExperienceIndex?: number
}

export const TextInputAchievement = memo(
  ({
    id,
    name,
    content,
    workExperienceId,
    workExperienceIndex,
    index
  }: TextInputAchievementProps) => {
    const { updateAchievement, removeAchievementByIndexes } = useResume()

    const handleRemoveInput = () => {
      const options = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }

      alert('isNaN? ' + Number.isNaN(Number(id)))

      // all ids from memory app is a number integer, them to send request the id should be a "Nothing a Number"
      // because the id from database is alpha-numeric.
      if (Number.isNaN(Number(id)))
        fetch(
          `process.env.NEXT_PUBLIC_BASE_URL/achievements/${workExperienceId}/${id}`,
          options
        )

      removeAchievementByIndexes(workExperienceIndex, index)
    }

    return (
      <div className="flex gap-1 items-center">
        <input
          type="hidden"
          name={`workExperience[${workExperienceIndex}].achievements[${index}].id`}
          value={id}
        />
        <input
          type="hidden"
          name={`workExperience[${workExperienceIndex}].achievements[${index}].workExperienceId`}
          value={workExperienceId}
        />
        <TextInput
          className="w-full"
          // onChange={(e) =>
          //   updateAchievement(workExperienceIndex, index, {
          //     content: e.target.value
          //   })
          // }
          // className="p-2.5"
          name={name}
          placeholder="Digite sua conquista"
          defaultValue={content}
          // rows={10}
        />
        <button
          onClick={handleRemoveInput}
          className="border border-zinc-700 rounded-md w-10 h-10 flex items-center justify-center"
        >
          <MinusIcon />
        </button>
      </div>
    )
  }
)
TextInputAchievement.displayName = 'TextInputAchievement'

const MinusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    strokeWidth="2"
    fill="#fff"
    viewBox="0 0 256 256"
  >
    <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"></path>
  </svg>
)
