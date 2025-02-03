import { twMerge } from 'tailwind-merge'
import Link from 'next/link'

type ContactProps = {
  name: string
  children: React.ReactNode
  className?: string
}

const matches = {
  linkedin: 'https://linkedin.com/in/hallexcosta',
  github: 'https://github.com/hallexcosta',
  email: 'mailto:hallex.costa@hotmail.com',
  whatsapp:
    'https://wa.me/5518997887240?text=Olá Hállex, gostaria de conversar com você sobre...',
  location:
    'https://www.google.com/maps/place/Ara%C3%A7atuba,+State+of+S%C3%A3o+Paulo/@-21.2038876,-50.4920945,12z/data=!4m6!3m5!1s0x949644777aaaf101:0xe8b1a2cfce0a1d27!8m2!3d-21.206685!4d-50.438747!16zL20vMDNmZnM4?entry=ttu'
}

const redirectTo = (entry: string) => {
  const match = matches[entry]
  if (match) window.open(match, '_blank')
}

export const Contact = ({ children, name, className }: ContactProps) => {
  const link = matches[name]
  return (
    <Link
      href={link}
      passHref
      legacyBehavior
      className={twMerge(
        'contact-item flex items-center gap-1 cursor-pointer',
        className
      )}
    >
      <a target="_blank" rel="noopener noreferrer">{children}</a>
    </Link>
  )
}
