type IdInputProps = {
  id: string
  workExperienceIndex: number
}

export const IdInput = ({ id, workExperienceIndex }: IdInputProps) => {
  return (
    <input
      hidden={true}
      name={`workExperiences[${workExperienceIndex}].id`}
      defaultValue={id}
    />
  )
}
