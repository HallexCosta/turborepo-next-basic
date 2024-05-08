import { NextResponse } from 'next/server'
import { PersonsRepositoryPostgres } from '../../../../infra/database/repositories/persons-repository-postgres'
import { pgDB } from '../../../../infra/database'
import { authJwtToken } from './auth-jwt-token'
import { TokensRepository } from '../../../../infra/database/repositories/tokens.repository'
import { Resend } from 'resend'
import { randomUUID } from 'node:crypto'
import { SendEmailMagicLinkService } from '../../../../infra/services/send-email-magic-link.service'

export const POST = async (request: Request, { params }) => {
  const data = (await request.json()) as {
    username: string
  }

  const repository = new PersonsRepositoryPostgres(pgDB)
  const person = await repository.findByUsername(data.username)

  const tokensRepository = new TokensRepository(pgDB)

  if (!person) {
    const responseBody = {
      username: data.username
    }
    const responseInit = {
      status: 404
    }
    return NextResponse.json(responseBody, responseInit)
  }

  const { token, expirationDate } = authJwtToken(person.username as string)
  const hash = randomUUID()
  await tokensRepository.save({
    personId: person.id,
    token,
    expirationDate,
    hash,
    stateId: TokensRepository.STATE_INACTIVE
  })
  const responseBody = {
    username: person.username,
    token,
    hash
  }
  const resend = new Resend(process.env.RESEND_API_KEY as string)
  const url = `${process.env.API_BASE_URL}/auth/confirmation?token=${hash}`
  // const text = createTextEmailTemplate(url)
  // const email = await resend.emails.send({
  //   from: process.env.FROM_EMAIL as string,
  //   to: [person.email as string],
  //   subject: '[Action Required]: Confirm your authentication',
  //   text
  // })
  const sendEmailMagicLinkService = new SendEmailMagicLinkService(resend, {
    from: process.env.FROM_EMAIL as string,
    to: [person.email as string],
    subject: '[Action Required]: Confirm your authentication'
  })
  sendEmailMagicLinkService.send(url)

  const responseInit = {
    status: 200
  }
  return NextResponse.json(responseBody, responseInit)
}

const createTextEmailTemplate = (url: string) => String.raw`
  Hi there,
  We're glad you've joined us! To get started, you need to activate your account. Please click on the link below to verify your email address and complete the setup process.
  
  Copy the authentication link ${url}
  
  This link will expire in 24 hours for security reasons. If you encounter any issues, don't hesitate to contact our support team.
  
  Thank you for choosing us!
  
  Best regards,
  
  Hállex Costa
  xLLex Company
  (18) 99788-7240
  hallexcosta.com
  `
