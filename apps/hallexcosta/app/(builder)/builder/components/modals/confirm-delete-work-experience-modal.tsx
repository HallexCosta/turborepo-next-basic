import { Button, Modal } from 'flowbite-react'
import { useFormStatus } from 'react-dom'

type ConfirmDeleteWorkExperienceModalProps = {
  open: boolean
  isDeleting: boolean
  handleFetchDelete: () => void
  handleCloseModal: () => void
}

const ConfirmDeleteWorkExperienceModal = (
  props: ConfirmDeleteWorkExperienceModalProps
) => {
  return (
    <Modal show={props.open} onClose={props.handleCloseModal}>
      <Modal.Header>Experiência de Trabalho</Modal.Header>
      <Modal.Body>
        <h3 className="text-gray-400 text-lg font-normal text-center">
          Atenção: Essa ação não poderá ser revertida
        </h3>
        <h3 className="text-gray-400 text-lg font-normal text-center">
          Tem certeza que deseja continuar?
        </h3>
      </Modal.Body>
      <Modal.Footer>
        <div className="w-full flex flex-items justify-center gap-4">
          <Button
            disabled={props.isDeleting}
            color="failure"
            onClick={props.handleFetchDelete}
          >
            {props.isDeleting ? 'Deletando...' : 'Sim'}
          </Button>
          <Button
            disabled={props.isDeleting}
            color="gray"
            onClick={props.handleCloseModal}
          >
            Não
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}

export { ConfirmDeleteWorkExperienceModal }
