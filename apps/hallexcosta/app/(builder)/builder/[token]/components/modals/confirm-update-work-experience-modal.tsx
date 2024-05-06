import { useFormStatus } from 'react-dom'
import { Modal } from 'ui'

type ConfirmUpdateWorkExperienceModalProps = {
  open: boolean
  isUpdating: boolean
  handleFetchUpdate: () => void
  handleCloseModal: () => void
}

const ConfirmUpdateWorkExperienceModal = (
  props: ConfirmUpdateWorkExperienceModalProps
) => {
  return (
    <Modal.Root show={props.open}>
      <Modal.Header onClose={props.handleCloseModal}>
        Experiência de Trabalho
      </Modal.Header>
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
            disabled={props.isUpdating}
            color="failure"
            onClick={props.handleFetchUpdate}
          >
            {props.isUpdating ? 'Atualizando...' : 'Sim'}
          </button>
          <button
            disabled={props.isUpdating}
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

const SubmitButton = () => {
  const status = useFormStatus()

  return (
    <button disabled={status.pending} type="submit" color="info" name="update">
      {status.pending ? 'Atualizando...' : 'Sim'}
    </button>
  )
}

export { ConfirmUpdateWorkExperienceModal }
