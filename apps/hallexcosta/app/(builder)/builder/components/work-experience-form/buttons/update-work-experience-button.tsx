import React from 'react'
import { useFormStatus } from 'react-dom'
import { Button } from 'flowbite-react'

// import { FloppyDisk } from 'phosphor-react'
import {Icons} from 'ui'

export const UpdateWorkExperienceButton = () => {
  const status = useFormStatus()
  return (
    <Button
      // onClick={onClick}
      type="submit"
      size="xs"
      color="blue"
      disabled={status.pending}
      className="pointer"
    >
      <Icons.FloppyDisk />
    </Button>
  )
}
