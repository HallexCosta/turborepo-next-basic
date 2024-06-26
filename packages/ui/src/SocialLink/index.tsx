'use client'
import Link from 'next/link'
// import {
//   FacebookLogo,
//   GithubLogo,
//   InstagramLogo,
//   LinkedinLogo
// } from 'phosphor-react'

import Icons from '../Icons'

interface SocialLinkProps {
  name: 'linkedin' | 'instagram' | 'facebook' | 'github'
  className?: string
  url?: string
}

export function SocialLink({ name, url, className }: SocialLinkProps) {
  className = className || ''
  url = url || 'https://google.com'
  let icon = () => <></>
  switch (name) {
    case 'linkedin':
      const linkedinIcon = () => (
        <Link href={url as string} target="_blank">
          <Icons.Linkedin
          // className={`${className} cursor-pointer`}
          // color="white"
          // width={27}
          // height={27}
          />
        </Link>
      )
      icon = linkedinIcon
      break
    case 'instagram':
      const instagramIcon = () => (
        <Link href={{ href: url }} target="_blank">
          <Icons.Linkedin
          // className={`${className} cursor-pointer`}
          // color="white"
          // width={27}
          // height={27}
          />
        </Link>
      )

      icon = instagramIcon
      break
    case 'github':
      const githubIcon = () => (
        <Link href={url as string} target="_blank">
          <Icons.Github
          // className={`${className} cursor-pointer`}
          // color="white"
          // width={27}
          // height={27}
          />
        </Link>
      )
      icon = githubIcon
      break
    case 'facebook':
      const facebookIcon = () => (
        <Link href={{ href: url }} target="_blank">
          <Icons.Facebook
          // className={`${className} cursor-pointer`}
          // color="white"
          // width={27}
          // height={27}
          />
        </Link>
      )
      icon = facebookIcon
      break
    default:
      break
  }
  return icon()
}
