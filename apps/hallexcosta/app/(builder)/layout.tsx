import '../../styles.css'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={'bg-gray-800'}>
      <body>{children}</body>
    </html>
  )
}
