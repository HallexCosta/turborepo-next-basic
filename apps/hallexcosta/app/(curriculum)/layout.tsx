import '../../styles.css'
import '../../styles/font-arial.css'
// import '../../styles/font-open-sans.css'
import('dayjs/locale/pt-br')
import dayjs from 'dayjs'
dayjs.locale('pt-br')
// import {Poppins, Open_Sans} from 'next/font/google'
// export const runtime = 'edge'
//
// const poppins =  Poppins({
//   subsets: ['latin'],
//   display: 'swap',
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
// })

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    // <html  lang="en" className={`${poppins.className}`}>
    <html lang="en">
      <body className="bg-white">{children}</body>
    </html>
  )
}
