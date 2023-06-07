import { Analytics } from '@vercel/analytics/react';
import './globals.css'

export const metadata = {
  icons: {
    icon: "https://aheye-korranid.vercel.app/img/icon.png",
  },
  title: "อ๊ะอาย —​ กรณิศ เล้าสุบินประเสริฐ",
  description: "Aheye — Korranid Laosubinprasoet เรื่องราวของเด็กหญิงคนหนึ่ง ที่มีความฝันอันยิ่งใหญ่ตั้งแต่วัยเด็ก ด้วยความรักและความชอบในการร้องเพลงและการแสดง จากความพยายามในทุก ๆ อย่าง จนทำให้หลายคนรู้จักเธอในวันนี้",
  openGraph: {
    title: "อ๊ะอาย —​ กรณิศ เล้าสุบินประเสริฐ",
    description: "Aheye — Korranid Laosubinprasoet เรื่องราวของเด็กหญิงคนหนึ่ง ที่มีความฝันอันยิ่งใหญ่ตั้งแต่วัยเด็ก ด้วยความรักและความชอบในการร้องเพลงและการแสดง จากความพยายามในทุก ๆ อย่าง จนทำให้หลายคนรู้จักเธอในวันนี้",
    type: "website",
    url: "https://aheye-korranid.vercel.app",
    images: [
      {
        url: "https://aheye-korranid.vercel.app/img/cover-web.png",
        width: 1200,
        height: 630,
        alt: "Aheye — Korranid Laosubinprasoet",
      },
    ],
  },
  twitter: {
    site: "https://aheye-korranid.vercel.app",
    card: "summary_large_image",
    images: [
      {
        url: "https://aheye-korranid.vercel.app/img/cover-web.png",
        width: 1200,
        height: 630,
        alt: "Aheye — Korranid Laosubinprasoet",
      },
    ],
    title: "อ๊ะอาย —​ กรณิศ เล้าสุบินประเสริฐ",
    description: "Aheye —​ Korranid Laosubinprasoet เรื่องราวของเด็กหญิงคนหนึ่ง ที่มีความฝันอันยิ่งใหญ่ตั้งแต่วัยเด็ก ด้วยความรักและความชอบในการร้องเพลงและการแสดง จากความพยายามในทุก ๆ อย่าง จนทำให้หลายคนรู้จักเธอในวันนี้",
  },
  authors: [
    {
      name: "KHP",
      url: "https://aheye-korranid.vercel.app",
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="th">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
