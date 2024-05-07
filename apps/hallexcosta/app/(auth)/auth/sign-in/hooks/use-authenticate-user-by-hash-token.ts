import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { useCallback, useEffect, useState } from 'react'
import { router } from 'next/client'
import { useRouter } from 'next/navigation'

const verifyUserAuth = (
  hashToken: string,
  url: string,
  timeoutSeconds: number = 2,
  router: AppRouterInstance
) => {
  return setTimeout(async () => {
    const response = await fetch(url, {
      cache: 'no-cache',
      method: 'GET'
    })
    console.log(response.status)
    const {urlCallback} = await response.json()
    if (response.status === 200) {
      router.push(urlCallback)
      return true
    }

    console.log('Calling newly the func')
    verifyUserAuth(hashToken, url, timeoutSeconds, router)
  }, timeoutSeconds * 1000)
}

export const useAuthenticateUserByHashToken = (
  hashToken: string,
  retriesTimeout: number = 2
) => {
  const timeoutIds: NodeJS.Timeout[] = []
  const router = useRouter()
  const listenConfirmAuthentication = useCallback(() => {
    const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/verify-token?hash=${hashToken}`
    timeoutIds.push(verifyUserAuth(hashToken, url, retriesTimeout, router))
  }, [hashToken, retriesTimeout])

  useEffect(() => {
    return () => timeoutIds.forEach(clearTimeout)
  }, [])

  return {
    listenConfirmAuthentication
  }
}
