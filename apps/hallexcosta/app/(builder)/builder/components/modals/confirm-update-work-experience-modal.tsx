import { Button, Modal } from 'flowbite-react'
import { useFormStatus } from 'react-dom'

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
            disabled={props.isUpdating}
            color="failure"
            onClick={props.handleFetchUpdate}
          >
            {props.isUpdating ? 'Atualizando...' : 'Sim'}
          </Button>
          <Button
            disabled={props.isUpdating}
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

const SubmitButton = () => {
  const status = useFormStatus()

  return (
    <Button disabled={status.pending} type="submit" color="info" name="update">
      {status.pending ? 'Atualizando...' : 'Sim'}
    </Button>
  )
}

export { ConfirmUpdateWorkExperienceModal }
