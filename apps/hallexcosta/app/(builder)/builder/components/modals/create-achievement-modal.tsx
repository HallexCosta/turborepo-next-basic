import { useRouter, useSearchParams } from 'next/navigation'
import { useFormStatus } from 'react-dom'
import { createAchievement } from '../../actions/create-achievement'
import {Icons, Modal} from 'ui'
import { useState } from 'react'
import * as Achievement from '../achievement-input'

const limitAchievements = 8
export const CreateAchievementModal = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const opened = searchParams.has('createAchievementModalOpen')
  const workExperienceId = searchParams.get('workExperienceId') ?? ''

  const [achievements, setAchievements] = useState([
    {
      content: ''
    }
  ])

  function handleCreateAchievementInput() {
    console.log(achievements.length, limitAchievements)
    if (true) return alert('This is beta feature await the release')

    if (achievements.length >= limitAchievements)
      return alert(`Ops... the limit from achievements is ${limitAchievements}`)

    setAchievements((prevAchievements) => {
      const achievement = {
        content: ''
      }
      return [achievement, ...prevAchievements]
    })
  }

  async function handleCreateAchievement(formData: FormData) {
    await createAchievement(formData)
    router.replace('/builder')
  }

  return (
    <Modal.Root show={opened}>
      <form action={handleCreateAchievement}>
        <Modal.Header onClose={() => router.replace('/builder')}>
          <div className="flex gap-4 items-center justify-center">
            <p>Conquista</p>
            <button
              className="group flex items-center justify-center text-center font-medium relative focus:z-10 focus:outline-none cursor-not-allowed opacity-50 text-white bg-blue-700 border border-transparent enabled:hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-lg focus:ring-2 w-full p-1"
              color="blue"
              // size={20}
              onClick={handleCreateAchievementInput}
            >
              <Icons.Plus
                size={20}
              />
            </button>
          </div>
        </Modal.Header>

        <Modal.Body>
          <div className="flex flex-col gap-4">
            {achievements.map((achievement, index) => {
              return (
                <Achievement.Root key={index}>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-900 dark:text-white flex">Conquista {index + 1}</label>
                    <Achievement.Content
                      name="content"
                      value={achievement.content}
                    />
                  </div>
                  <Achievement.WorkExperienceId
                    name="workExperienceId"
                    value={workExperienceId}
                  />
                </Achievement.Root>
              )
            })}
          </div>
        </Modal.Body>

        <Modal.Footer>
          <CreateAchievementButton />
        </Modal.Footer>
      </form>
    </Modal.Root>
  )
}

const CreateAchievementButton = () => {
  const status = useFormStatus()
  return (
    <button
      className="group flex items-center justify-center text-center font-medium relative focus:z-10 focus:outline-none cursor-not-allowed opacity-50 text-white bg-blue-700 border border-transparent enabled:hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-lg focus:ring-2 w-28 p-2"
      color="blue"
      type="submit"
      disabled={status.pending}
    >
      {status.pending ? 'Criando...' : 'Criar'}
    </button>
  )
}
