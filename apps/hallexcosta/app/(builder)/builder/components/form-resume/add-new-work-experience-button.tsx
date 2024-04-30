'use client'
import { Icons } from 'ui'
import React from 'react'
import { CreateWorkExperienceModal } from '../modals/create-work-experience-modal'
import Link from 'next/link'
// import {useEffect} from "react";

// const getWorkExperiencesCached = unstable_cache(
//   async () => {
//     console.log('getWorkExperiencesCached')
//
//   },
//   [
//     'get-person-resume'
//   ],
//   {
//     tags: ['get-person-resume'],
//     revalidate: 1
//   }
// )

type AddNewWorkExperienceButtonProps = {
  workExperienceIndex: number
  createWorkExperience: (formData: FormData) => void
}

const AddNewWorkExperienceButton = ({
  workExperienceIndex,
  createWorkExperience
}: AddNewWorkExperienceButtonProps) => {
  return (
    <div>
      <Link
        href={{
          query: {
            createWorkExperienceModalOpen: ''
          }
        }}
      >
        <Icons.Plus />
      </Link>
      {/*<button type="button" onClick={handleOnOpenModal}>*/}
      {/*</button>*/}

      <CreateWorkExperienceModal workExperienceIndex={workExperienceIndex} />
    </div>
  )
}

export { AddNewWorkExperienceButton }
