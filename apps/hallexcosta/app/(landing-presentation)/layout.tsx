import '../../node_modules/normalize.css';
import "../../styles.css";
import {Poppins, Open_Sans} from 'next/font/google'

export const runtime = 'edge'

const poppins =  Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: '600'
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-back-default">{children}</body>
    </html>
  );
}
