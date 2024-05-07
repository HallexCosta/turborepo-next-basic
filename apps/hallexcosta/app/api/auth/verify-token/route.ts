import {NextRequest, NextResponse} from 'next/server'
import {TokensRepository} from '../../../../infra/database/repositories/tokens.repository'
import {pgDB} from '../../../../infra/database'
import {verifyAuthJwtToken} from '../login/auth-jwt-token'

export const GET = async (request: NextRequest) => {
  const hash = request.nextUrl.searchParams.get('hash') as string

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
  const token = await tokensRepository.findByHashAndStateId(
    hash,
    TokensRepository.STATE_ACTIVE
  )

  if (!token) {
    const responseBody = {
      message: 'Token not found or not active',
      reason: 'token.validation.not_found'
    }
    const responseInit = {
      status: 400
    }
    return NextResponse.json(responseBody, responseInit)
  }

  const decryptToken = verifyAuthJwtToken(token.token)
  if (!decryptToken) {
    const responseBody = {
      message: 'Token is invalid',
      reason: 'token.validation.invalid'
    }
    const responseInit = {
      status: 400
    }
    return NextResponse.json(responseBody, responseInit)
  }

  await tokensRepository.updateByHash(hash, {
    stateId: TokensRepository.STATE_ACTIVE
  })

  const responseBody = {
    message: 'Authentication successfully',
    reason: 'token.validation.valid',
    urlCallback: `${process.env.BASE_URL}/builder/${hash}`
  }
  const responseInit = {
    status: 200
  }
  return NextResponse.json(responseBody, responseInit)
}
