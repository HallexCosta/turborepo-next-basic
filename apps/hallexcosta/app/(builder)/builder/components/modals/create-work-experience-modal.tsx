'use client'
import { Modal, Button } from 'flowbite-react'
import * as WorkExperienceForm from '../work-experience-form'
import React, { useState } from 'react'
import { createWorkExperience } from '../../actions/create-work-experience'
import { useSearchParams, useRouter } from 'next/navigation'
import { CreateWorkExperienceSubmitButton } from '../work-experience-form/buttons/create-work-experience-submit-button'

type CreateWorkExperienceModalProps = {
  workExperienceIndex: number
}

export const CreateWorkExperienceModal = (
  props: CreateWorkExperienceModalProps
) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const opened = searchParams.has('createWorkExperienceModalOpen')

  const handleOnCloseModal = () => router.replace('/builder')

  const handleCreateWorkExperience = () => {
    return async (formData: FormData) => {
      await createWorkExperience(formData)
      handleOnCloseModal()
    }
  }

  return (
    <Modal show={opened} onClose={handleOnCloseModal}>
      <form action={handleCreateWorkExperience()}>
        <Modal.Header>Criar Experiência Profissional</Modal.Header>
        <Modal.Body>
          <WorkExperienceForm.Root className="md:grid-cols-2 md:gap-4">
            <WorkExperienceForm.EnterpriseInput name={'enterprise'} value="" />

            <WorkExperienceForm.RoleInput name={'role'} value="" />

            <WorkExperienceForm.TypeSelect name={'type'} value="" />

            <WorkExperienceForm.WorkModelSelect
              name={'workModel'}
              workExperienceIndex={props.workExperienceIndex}
              value=""
            />

            <WorkExperienceForm.StartDateDatepicker
              name={'startDate'}
              workExperienceIndex={props.workExperienceIndex}
              value=""
            />

            <WorkExperienceForm.EndDateDatepicker
              name={'endDate'}
              workExperienceIndex={props.workExperienceIndex}
              value=""
              disabled={false}
            />

            <WorkExperienceForm.CurrentlyPositionCheckbox
              name={'currentlyPosition'}
              workExperienceIndex={props.workExperienceIndex}
              value={false}
            />
          </WorkExperienceForm.Root>
        </Modal.Body>

        <Modal.Footer>
          <CreateWorkExperienceSubmitButton />
        </Modal.Footer>
      </form>
    </Modal>
  )
}
