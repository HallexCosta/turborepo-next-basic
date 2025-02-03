'use client'
import { WorkExperience as WorkExperienceStore } from '../../stores/work-experiences-store'
import { SectionPerson } from './section-person'
import { SectionContacts } from './section-contacts'
import { SummarySkillsFieldset } from './summary-skills-fieldset'
import { ModalResumePreview } from './modal-resume-preview'
import { Resume } from '../../stores/resume-store'
import { handleSaveResumeServer } from '../../actions/handle-save-resume-server'
import { WorkExperienceFieldset } from './work-experience-fieldset'
import React, { useState } from 'react'
import { SaveButton } from './buttons/save-button'
import { PreviewResumeButton } from './buttons/preview-resume-button'
import { ViewButton } from './buttons/view-button'
import { useToast } from '../../hooks/use-toast'
import { CreateAchievementModal } from '../modals/create-achievement-modal'

const username = 'hallexcosta'
type FormResumeProps = Resume & { workExperiences: WorkExperienceStore[] }

const Index = (props: any) => {
  const {toast} = useToast()
  const [isPending, setIsPending] = useState(false)
  const [openPreviewResume, setOpenPreviewResume] = React.useState(false)

  const handleSubmitAction = async (formData: FormData) => {
    console.log(Object.fromEntries(formData))

    setIsPending(true)
    console.log({ isPending })
    // await new Promise((resolve) => setTimeout(resolve, 5000))
    await handleSaveResumeServer(username, formData)
    setIsPending(false)

    toast('Salvo')
  }

  return (
    // <form action={handleSubmitAction}>
    <>
      <form action={handleSubmitAction} className="bg-gray-600 rounded-lg p-4">
        <SectionPerson
          name={props.person.name}
          role={props.person.role}
        />

        <SectionContacts
          city={props.contact.city}
          state={props.contact.state}
          phone={props.contact.phone}
          email={props.contact.email}
          linkedin={props.contact.linkedin}
          github={props.contact.github}
          website={props.contact.website}
        />

        <SummarySkillsFieldset
          summary={props.summary}
          skills={props.skills}
        />


        <SaveButton />
      </form>

      <WorkExperienceFieldset
        title="Experiência profissional"
        workExperiences={props.workExperiences}
      />
      <ModalResumePreview
        name={props.person.name}
        person={props}
        openModal={openPreviewResume}
        handleCloseModal={() => {
          setOpenPreviewResume(false)
        }}
      />
      <CreateAchievementModal />


      <div className="flex gap-4">
        <SaveButton className="cursor-not-allowed opacity-50 " />
        <PreviewResumeButton
          handleOpenModal={() => {
            setOpenPreviewResume(true)
          }}
        />
        <ViewButton />
      </div>

      {/*</form>*/}
    </>
  )
}

export { Index }
