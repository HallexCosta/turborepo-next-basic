import { NextRequest, NextResponse } from 'next/server'
import { TokensRepository } from '../../../../infra/database/repositories/tokens.repository'
import { pgDB } from '../../../../infra/database'
import {permanentRedirect, redirect} from 'next/navigation'

export const GET = async (request: NextRequest, { params }) => {
  const hash = request.nextUrl.searchParams.get('token') as string
  if (!hash) {
    const responseBody = {
      message: 'Need a hash token',
      reason: 'token.validation.hash_not_specified'
    }
    const responseInit = {
      status: 400
    }
    return NextResponse.json(responseBody, responseInit)
  }

  const tokensRepository = new TokensRepository(pgDB)
  const token = await tokensRepository.findByHash(
    hash
  )

  if ([TokensRepository.STATE_ACTIVE, TokensRepository.STATE_EXPIRED].includes(token.stateId )) {
    const urlCallback = `${process.env.BASE_URL}/builder/${hash}`
    return permanentRedirect(urlCallback)
  }

  console.log({ hash, token })
  if (!token) {
    const responseBody =
      {
        message: 'Token not found or already active',
        reason: 'token.validation.not_found',
        token
      }
    const responseInit = {
      status: 400
    }
    return NextResponse.json(responseBody, responseInit)
  }
  await tokensRepository.updateByHash(token.hash, {
    stateId: TokensRepository.STATE_ACTIVE
  })

  return new Response('Token confirmation with successfully!', {
    status: 200,
  })
}
