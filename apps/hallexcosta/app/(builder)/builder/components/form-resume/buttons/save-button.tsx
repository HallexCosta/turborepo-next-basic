'use client'
import { Button } from 'flowbite-react'
import React, { useEffect } from 'react'
import { useAtomValue } from 'jotai'
import { isPendingSaveResume } from '../../../atoms/is-pending-save-resume'

type Props = {
  submitting: boolean
}

export const SaveButton = (props: Props) => {
  useEffect(() => {
    console.log(props.submitting)
  }, [props.submitting])

  return (
    <Button
      disabled
      type="submit"
      className="w-full"
      color="blue"
      // disabled={pending}
    >
      {props.submitting ? 'Carregando...' : 'Salvar'}
    </Button>
  )
}
