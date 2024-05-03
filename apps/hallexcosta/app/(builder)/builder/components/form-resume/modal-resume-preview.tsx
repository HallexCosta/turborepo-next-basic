import { CVTemplatePageEditable } from '../../../../(curriculum)/cv/page'
import React from 'react'
import { Person } from '../../page'
import { Modal } from 'ui'

type ModalResumePreviewProps = {
  person: Person
  name: string
  openModal: boolean
  handleCloseModal: () => void
}

const ModalResumePreview = (props: ModalResumePreviewProps) => {
  return (
    <Modal.Root show={props.openModal}>
      <Modal.Header onClose={props.handleCloseModal}>Pré-visualizar CV: {props.name}</Modal.Header>
      <Modal.Body>
        <CVTemplatePageEditable
          className="lg:px-5 rounded-sm "
          person={props.person}
        />
      </Modal.Body>
      {/*<Modal.Footer />*/}
    </Modal.Root>
  )
}

export { ModalResumePreview }
