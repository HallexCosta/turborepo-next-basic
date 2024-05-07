'use client'
import { useRouter } from 'next/navigation'
import { memo, useEffect } from 'react'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { TypeAnimation } from 'react-type-animation'
import { useAuthenticateUserByHashToken } from '../hooks/use-authenticate-user-by-hash-token'

const MessageAwaitingConfirmAuthentication = memo(
  ({ hashToken }: { hashToken: string }) => {
    const router = useRouter()
    const retriesTimeout = 4
    const { listenConfirmAuthentication } = useAuthenticateUserByHashToken(
      hashToken,
      retriesTimeout
    )
    listenConfirmAuthentication()

    return (
      <div className="border-dashed border-white border-8 text-4xl rounded-lg">
        <div className="w-[500px] mx-auto my-32">
          <h1 className="text-white font-bold">
            Verifique seu email e clique no link para confirmar sua
            autentificação 🤠👍
          </h1>

          <div className="flex justify-center items-center mt-10">
            <TypeAnimation
              className={`max-h-[62px] w-fit inline-block text-4xl lg:text-6xl font-semibold
      text-transparent bg-clip-text bg-white tracking-[30px] text-center`}
              sequence={[
                1000,
                '.',
                1000,
                '..',
                1000,
                '...',
                1000,
                '....',
                2000,
                '.....'
              ]}
              repeat={Infinity}
              speed={50}
              wrapper="span"
              omitDeletionAnimation={false}
            />
          </div>
        </div>
      </div>
    )
  }
)

MessageAwaitingConfirmAuthentication.displayName =
  'MessageAwaitingConfirmAuthentication'

export { MessageAwaitingConfirmAuthentication }
