'use client'
import * as WorkExperienceForm from '../work-experience-form'
import * as AchievementInput from '../achievement-input'
import { Person } from '../../page'

import { deleteWorkExperience } from '../../actions/delete-work-experience'
import { ConfirmDeleteWorkExperienceModal } from '../modals/confirm-delete-work-experience-modal'
import { useState } from 'react'
import { Icons } from 'ui'
import { CreateAchievementModal } from '../modals/create-achievement-modal'
import Link from 'next/link'
import { DeleteWorkExperienceButton } from '../work-experience-form/buttons/delete-work-experience-button'
import { UpdateWorkExperienceButton } from '../work-experience-form/buttons/update-work-experience-button'
import { updateWorkExperience } from '../../actions/update-work-experience'

type WorkExperienceListProps = {
  data: Omit<Person['workExperiences'], 'createdAt' | 'updatedAt'>
}

const WorkExperienceList = ({ data }: WorkExperienceListProps) => {
  // const [optimisticWorkExperiences, removeWorkExperience] = useOptimistic(
  //   data,
  //   handleOptimisticRemoveWorkExperience
  // )
  // function handleOptimisticRemoveWorkExperience(workExperiencesState: WorkExperienceListProps['data'], workExperienceId: string) {
  //   console.log('handleOptimisticRemoveWorkExperience')
  //   return workExperiencesState.filter(workExperience => workExperience.id !== workExperienceId)
  // }

  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const handleFetchDeleteWorkExperience = (workExperienceId: string) => {
    return async () => {
      setIsDeleting(true)
      await deleteWorkExperience({
        workExperienceId
      })
      setIsDeleting(false)
      setOpenDeleteModal(false)
    }
  }

  const handleFetchUpdateWorkExperience = (workExperienceId: string) => {
    return async (formData: FormData) => {
      await updateWorkExperience({
        workExperienceId,
        formData
      })
      alert('Saved')
    }
  }

  return (
    <>
      {data.map(
        (
          workExperience: WorkExperienceListProps['data'][0],
          workExperienceIndex
        ) => {
          return (
            <form
              action={handleFetchUpdateWorkExperience(
                workExperience.id as string
              )}
              key={workExperience.id}
            >
              <WorkExperienceForm.Root>
                <WorkExperienceForm.Header className="flex justify-end">
                  <div className="flex gap-2">
                    <UpdateWorkExperienceButton />
                    <DeleteWorkExperienceButton />
                  </div>

                  <ConfirmDeleteWorkExperienceModal
                    open={openDeleteModal}
                    isDeleting={isDeleting}
                    handleCloseModal={() => setOpenDeleteModal(false)}
                    handleFetchDelete={handleFetchDeleteWorkExperience(
                      workExperience.id as string
                    )}
                  />
                </WorkExperienceForm.Header>

                <WorkExperienceForm.Body>
                  <WorkExperienceForm.IdInput
                    id={workExperience.id ?? ''}
                    workExperienceIndex={workExperienceIndex}
                  />
                  <WorkExperienceForm.EnterpriseInput
                    name={'enterprise'}
                    value={workExperience.enterprise}
                  />
                  <WorkExperienceForm.RoleInput
                    name={'role'}
                    value={workExperience.role}
                  />
                  <WorkExperienceForm.TypeSelect
                    name={'type'}
                    value={workExperience.type}
                  />
                  <WorkExperienceForm.WorkModelSelect
                    name={'workModel'}
                    workExperienceIndex={workExperienceIndex}
                    value={workExperience.workModel}
                  />
                  <WorkExperienceForm.StartDateDatepicker
                    name={'startDate'}
                    workExperienceIndex={workExperienceIndex}
                    value={
                      workExperience.startDate ? workExperience.startDate : null
                    }
                  />
                  <WorkExperienceForm.EndDateDatepicker
                    name={'endDate'}
                    workExperienceIndex={workExperienceIndex}
                    disabled={workExperience.currentlyPosition}
                    value={
                      workExperience.endDate ? workExperience.endDate : null
                    }
                  />
                  <WorkExperienceForm.CurrentlyPositionCheckbox
                    name={'currentlyPosition'}
                    workExperienceIndex={workExperienceIndex}
                    value={workExperience.currentlyPosition}
                  />
                </WorkExperienceForm.Body>

                <div className="grid grid-cols-1 gap-2">
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-gray-900 dark:text-white flex">Conquistas</label>

                    <Link
                      className="pointer"
                      href={{
                        query: {
                          createAchievementModalOpen: '',
                          workExperienceId: workExperience.id
                        }
                      }}
                    >
                      <Icons.Plus size={18}/>
                    </Link>

                    <CreateAchievementModal/>
                  </div>

                  {workExperience.achievements.length >= 1 &&
                    workExperience.achievements.map(
                      (achievement, achievementIndex: number) => {
                        return (
                          <AchievementInput.Root key={achievement.id}>
                            <AchievementInput.Id
                              name={`workExperiences[${workExperienceIndex}].achievements[${achievementIndex}].id`}
                              value={achievement.id ?? ''}
                            />
                            <AchievementInput.Content
                              name={`workExperiences[${workExperienceIndex}].achievements[${achievementIndex}].content`}
                              value={achievement.content ?? ''}
                            />
                            <AchievementInput.WorkExperienceId
                              name={`workExperiences[${workExperienceIndex}].achievements[${achievementIndex}].workExperienceId`}
                              value={workExperience.id ?? ''}
                            />
                          </AchievementInput.Root>
                        )
                      }
                    )}

                  {/*{achievements.map((achievement, achievementIndex) => (*/}
                  {/*  <TextInputAchievement*/}
                  {/*    key={achievementIndex}*/}
                  {/*    id={achievement.id}*/}
                  {/*    workExperienceId={id}*/}
                  {/*    content={achievement.content}*/}
                  {/*    name={`workExperiences[${index}].achievements[${achievementIndex}].content`}*/}
                  {/*    workExperienceIndex={index}*/}
                  {/*    index={achievementIndex}*/}
                  {/*  />*/}
                  {/*))}*/}
                </div>
              </WorkExperienceForm.Root>
            </form>
          )
        }
      )}
    </>
  )
}

export { WorkExperienceList }
