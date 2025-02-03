import { Resend } from 'resend'
import { Mailer } from '../../app/backend/services/mailer.interface'

type Payload = {
  from: string
  to: string | string[]
  subject: string
  replayTo: string
}

export class SendEmailMagicLinkService implements Mailer {
  constructor(
    private readonly resend: Resend,
    private readonly payload: Payload
  ) {}

  send(hash: string) {
    const text = this.factoryMakeTemplateAuthenticationEmailText(this.makeMagicLinkAuthentication(hash))
    this.resend.emails.send(this.parsePayloadToResendPayload(this.payload, text))
  }

  private parsePayloadToResendPayload(payload: Payload, text: string) {
    delete this.payload.replayTo
    return {
      ...this.payload,
      text,
      reply_to: this.payload.replayTo
    }
  }

  private makeMagicLinkAuthentication(hash: string) {
    return`${process.env.API_BASE_URL}/auth/confirmation?token=${hash}`
  }

  private factoryMakeTemplateAuthenticationEmailText(url: string) {
    return String.raw`
  Hi there,
  We're glad you've joined us! To get started, you need to activate your account. Please click on the link below to verify your email address and complete the setup process.
  
  Copy the authentication link ${url}
  
  This link will expire in 24 hours for security reasons. If you encounter any issues, don't hesitate to contact our support team.
  
  Thank you for choosing us!
  
  Best regards,
  
  Hállex Costa
  xLLeX Corp
  (18) 99788-7240
  hallexcosta.com
  `
  }
}
