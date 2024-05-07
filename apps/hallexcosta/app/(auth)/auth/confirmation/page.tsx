import { MessageAwaitingConfirmAuthentication } from '../sign-in/components/message-awaiting-confirm-authentication'
import { redirect, useRouter, useSearchParams } from 'next/navigation'

const Page = async ({
  params,
  searchParams
}: {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const hashToken = searchParams.hashToken

  if (!hashToken) {
    const url = `${process.env.BASE_URL}/auth/sign-in`
    return redirect(url)
  }

  return (
    <div className="max-w-3xl h-full mx-auto mt-40">
      <MessageAwaitingConfirmAuthentication hashToken={hashToken as string} />
    </div>
  )
}

export default Page
