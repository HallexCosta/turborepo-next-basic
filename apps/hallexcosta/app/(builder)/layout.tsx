'use client'
import "../../styles.css";
import {Poppins, Open_Sans} from 'next/font/google'
import {useResumePreviewMode} from "../../hooks/use-resume-preview-mode";

// export const runtime = 'edge'

const poppins =  Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})
const openSans =  Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {theme, showPreviewMode, disablePreviewMode} = useResumePreviewMode()

  return (
    <html lang="en" className={`${openSans.className}`}>
      <body onClick={disablePreviewMode} className={theme}>{children}</body>
    </html>
  );
}
