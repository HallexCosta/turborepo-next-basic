import "../../styles.css";
import {Poppins, Open_Sans} from 'next/font/google'
import dayjs from "dayjs";
import('dayjs/locale/pt-br')
// export const runtime = 'edge'

const poppins =  Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html  lang="en" className={`${poppins.className}`}>
      <body className="bg-white">{children}</body>
    </html>
  );
}
