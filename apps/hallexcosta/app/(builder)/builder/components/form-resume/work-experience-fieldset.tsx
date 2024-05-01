import { AddNewWorkExperienceButton } from './add-new-work-experience-button'
import { Person } from '../../page'
import { WorkExperienceList } from './work-experience-list'
import { createWorkExperience } from '../../actions/create-work-experience'

type WorkExperienceFieldsetProps = {
  title: string
  workExperiences: Omit<
    Person['workExperiences'],
    'personId' | 'createdAt' | 'updatedAt'
  >
}

const WorkExperienceFieldset = ({
  title,
  workExperiences
}: WorkExperienceFieldsetProps) => {
  return (
    <fieldset>
      <legend className="mb-4 w-full flex items-center gap-4">
        <span className="text-xl text-white font-bold">{title}</span>

        <AddNewWorkExperienceButton
          workExperienceIndex={workExperiences.length}
          createWorkExperience={createWorkExperience}
        />
      </legend>

      <WorkExperienceList data={workExperiences} />
    </fieldset>
  )
}

export { WorkExperienceFieldset }
