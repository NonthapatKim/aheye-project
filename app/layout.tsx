import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
