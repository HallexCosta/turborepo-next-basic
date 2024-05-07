import { Resend } from 'resend'
import { Mailer } from '../../app/backend/services/mailer.interface'

type Payload = {
  from: string
  to: string | string[]
  subject: string
}

export class SendEmailMagicLinkService implements Mailer {
  constructor(
    private readonly resend: Resend,
    private readonly payload: Payload
  ) {}

  send(magicLink: string) {
    const text = this.templateEmailText(magicLink)
    this.resend.emails.send({
      ...this.payload,
      text
    })
  }

  private templateEmailText(url: string) {
    return String.raw`
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
  }
}
