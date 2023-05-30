import React from 'react'
import Image from "next/image";
import rabbit from "../assets/images/rabbit-2.png"
import { Noto_Serif_Thai } from 'next/font/google'
import localfont from 'next/font/local'
const glorifyLight = localfont({ src: '../assets/fonts/glorify_light-webfont.woff2' })
const glorifyReg = localfont({ src: '../assets/fonts/glorify_regular-webfont.woff2' })

const noto_S_TH = Noto_Serif_Thai({ subsets: ['thai'] })

function Footer() {
  return (
    <footer className="container-fluid mx-auto pt-4 ps-4 pe-4 pb-5 aheye-block-footer text-black/50">
      <div className="grid grid-cols-0 gap-8">
        <div><Image src={rabbit} className='mx-auto w-20' alt='rabbit' /></div>
        <div className={`${noto_S_TH.className} text-center`}>
            เว็บไซต์นี้เป็นส่วนหนึ่งของโปรเจควันเกิดของ <br/> อ๊ะอาย กรณิศ เล้าสุบินประเสริฐ <br/> ศิลปินวง 4EVE, นักร้อง, นักแสดง และนักพากย์
        </div>
        <div className={`${noto_S_TH.className} text-center`}>
            This website is a part of <br/> Aheye | Korranid Laosubinprasoet's Brithday Project <br/> Artist of 4EVE, Singer, Artist and Voice actor
        </div>
      </div>
    </footer>
  )
}

export default Footer