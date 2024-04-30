'use client'
import { Button } from 'flowbite-react'
import React from 'react'

export const PreviewResumeButton = ({ handleOpenModal = () => {} }) => {
  return (
    <Button className="w-full" color="light" onClick={handleOpenModal}>
      Pré-visualizar
    </Button>
  )
}
