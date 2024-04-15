import '../../node_modules/normalize.css';
import "../../styles.css";
import '../../styles/fonts.css'
import('dayjs/locale/pt-br')
import dayjs from "dayjs";
dayjs.locale('pt-br')
// import {Poppins, Open_Sans} from 'next/font/google'

export const runtime = 'edge'

// const poppins =  Poppins({
//   subsets: ['latin'],
//   display: 'swap',
//   weight: '600'
// })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-back-default poppins-semibold">{children}</body>
    </html>
  );
}
