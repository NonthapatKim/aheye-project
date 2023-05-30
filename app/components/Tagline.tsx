import React from 'react'
import { Noto_Serif_Thai } from 'next/font/google'
import localfont from 'next/font/local'
const glorifyLight = localfont({ src: '../assets/fonts/glorify_light-webfont.woff2' })
const glorifyReg = localfont({ src: '../assets/fonts/glorify_regular-webfont.woff2' })

const noto_S_TH = Noto_Serif_Thai({ subsets: ['thai'] })

function TagLine() {
  return (
    <div className="container-fluid mx-auto p-4 md:p-0 lg:p-0 xl:p-0 ps-10 md:ps-14 lg:ps-14 xl:ps-14 pe-10 md:pe-14 lg:pe-14 xl:pe-14 pb-20 md:pb-20 lg:pb-20 xl:pb-20 aheye-block1">
      <div className="grid grid-cols-0 md:grid-cols-0 lg:grid-cols-0 xl:grid-cols-0 gap-8">
        <div className={`${glorifyReg.className} text-8xl text-center lg:text-center xl:text-center text-color1`}>Aheye <br></br> <span className={`${noto_S_TH.className}`}>อ๊ะอาย</span></div>
        <div className={`${noto_S_TH.className} text-center lg:text-center xl:text-center text-2xl leading-relaxed mt-0 ps-0 xl:ps-20 pe-0 xl:pe-20`}>เรื่องราวของเด็กหญิงคนหนึ่ง ที่มีความฝันอันยิ่งใหญ่ตั้งแต่วัยเด็ก ด้วยความรักและความชอบในการร้องเพลงและการแสดง จากความพยายามในทุก ๆ อย่าง จนทำให้หลายคนรู้จักเธอในวันนี้</div>
      </div>
    </div>
  )
}

export default TagLine