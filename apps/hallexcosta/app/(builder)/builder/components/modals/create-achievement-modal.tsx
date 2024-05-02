import { Button, Label, Modal } from 'flowbite-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useFormStatus } from 'react-dom'
import { createAchievement } from '../../actions/create-achievement'
import { Icons } from 'ui'
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
    <Modal show={opened} onClose={() => router.replace('/builder')}>
      <form action={handleCreateAchievement}>
        <Modal.Header>
          <div className="flex gap-4 items-center justify-center">
            <p>Conquista</p>
            <Button
              className="p-1"
              color="blue"
              size={20}
              onClick={handleCreateAchievementInput}
            >
              <Icons.Plus />
            </Button>
          </div>
        </Modal.Header>

        <Modal.Body>
          <div className="flex flex-col gap-4">
            {achievements.map((achievement, index) => {
              return (
                <Achievement.Root key={index}>
                  <div className="flex flex-col gap-1">
                    <Label>Conquista {index + 1}</Label>
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
    </Modal>
  )
}

const CreateAchievementButton = () => {
  const status = useFormStatus()
  return (
    <Button color="blue" type="submit" disabled={status.pending}>
      {status.pending ? 'Criando...' : 'Criar'}
    </Button>
  )
}
