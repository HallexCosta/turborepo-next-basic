'use client'
import { Modal } from 'ui'
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()

  return (
    <Modal.Root show={true}>
      <Modal.Header showCloseButton={false}>
        <p className="text-center w-full">
          Escolha um método de autentificaćão
        </p>
      </Modal.Header>
      <Modal.Body>
        <div className="flex gap-4">
          <button
            onClick={() => router.push('/auth/sign-in')}
            className="p-4 bg-indigo-700 rounded-md w-24"
          >
            <span className="text-white font-semibold">Sign in</span>
          </button>
          <button
            onClick={() => router.push('/auth/sign-up')}
            className="p-4 bg-[#111111db] rounded-md w-24"
          >
            <span className="text-white font-semibold">Sign up</span>
          </button>
          {/*<button className="p-4 bg-indigo-700 rounded-md w-24">*/}
          {/*  <span className="text-white font-semibold">Linkedin</span>*/}
          {/*</button>*/}
        </div>
      </Modal.Body>
    </Modal.Root>
  )
}

export default Page
