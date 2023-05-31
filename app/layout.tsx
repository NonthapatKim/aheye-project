import './globals.css'

export const metadata = {
  metadataBase: new URL('https://aheye-korranid.vercel.app/'),
  icons: {
    icon: './assets/images/icon.png',
  },
  title: 'Korranid Laosubinprasoet',
  description: 'Aheye | Korranid Laosubinprasoet เรื่องราวของเด็กหญิงคนหนึ่ง ที่มีความฝันอันยิ่งใหญ่ตั้งแต่วัยเด็ก ด้วยความรักและความชอบในการร้องเพลงและการแสดง จากความพยายามในทุก ๆ อย่าง จนทำให้หลายคนรู้จักเธอในวันนี้',
  openGraph: {
    images: ['./assets/images/cover-web-og.jpg'],
  },
  twitter: {
    card: 'summary_larage_image',
    title: 'Korranid Laosubinprasoet',
    description: 'Aheye | Korranid Laosubinprasoet เรื่องราวของเด็กหญิงคนหนึ่ง ที่มีความฝันอันยิ่งใหญ่ตั้งแต่วัยเด็ก ด้วยความรักและความชอบในการร้องเพลงและการแสดง จากความพยายามในทุก ๆ อย่าง จนทำให้หลายคนรู้จักเธอในวันนี้',
    images: ['./assets/images/cover-web-og.jpg']
  }
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
