import { Modal } from 'flowbite-react'
import { CVTemplatePageEditable } from '../../../../(curriculum)/cv/page'
import React from 'react'
import { Person } from '../../page'

type ModalResumePreviewProps = {
  person: Person
  name: string
  openModal: boolean
  handleCloseModal: () => void
}

const ModalResumePreview = (props: ModalResumePreviewProps) => {
  return (
    <Modal show={props.openModal} onClose={props.handleCloseModal}>
      <Modal.Header>Pré-visualizar CV: {props.name}</Modal.Header>
      <Modal.Body>
        <CVTemplatePageEditable
          className="lg:px-5 rounded-sm "
          person={props.person}
        />
      </Modal.Body>
      {/*<Modal.Footer />*/}
    </Modal>
  )
}

export { ModalResumePreview }
