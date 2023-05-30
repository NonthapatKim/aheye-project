import './globals.css'

export const metadata = {
  icons: {
    icon: './assets/images/icon.png',
  },
  title: 'Korranid Laosubinprasoet',
  description: 'Aheye | Korranid Laosubinprasoet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
