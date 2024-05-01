import '../../styles.css'
import Providers from './providers'
// import {Poppins, Open_Sans} from 'next/font/google'
// import {useResumePreviewMode} from "../../hooks/use-resume-preview-mode";

// export const runtime = 'edge'
//
// const poppins =  Poppins({
//   subsets: ['latin'],
//   display: 'swap',
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
// })
// const openSans =  Open_Sans({
//   subsets: ['latin'],
//   display: 'swap',
//   weight: ['300', '400', '500', '600', '700', '800']
// })

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  // const {theme, showPreviewMode, disablePreviewMode} = useResumePreviewMode()

  return (
    <html lang="en" className={'bg-gray-800'}>
      {/*<QueryClientProvider client={queryClient}>*/}
      <body>
        <Providers>{children}</Providers>
      </body>
      {/*</QueryClientProvider>*/}
    </html>
  )
}
