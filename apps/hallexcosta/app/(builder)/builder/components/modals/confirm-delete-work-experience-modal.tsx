import {Modal} from 'ui'

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
    <Modal.Root show={props.open}>
      <Modal.Header onClose={props.handleCloseModal}>Experiência de Trabalho</Modal.Header>
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
          <button
            disabled={props.isDeleting}
            color="failure"
            onClick={props.handleFetchDelete}
          >
            {props.isDeleting ? 'Deletando...' : 'Sim'}
          </button>
          <button
            disabled={props.isDeleting}
            color="gray"
            onClick={props.handleCloseModal}
          >
            Não
          </button>
        </div>
      </Modal.Footer>
    </Modal.Root>
  )
}

export { ConfirmDeleteWorkExperienceModal }
