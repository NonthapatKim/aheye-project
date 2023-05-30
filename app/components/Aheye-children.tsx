import React from 'react'
import Image from "next/image";
import Imgb1 from "../assets/images/aheye-b-1.png"
import { Noto_Serif_Thai } from 'next/font/google'
import localfont from 'next/font/local'
const glorifyLight = localfont({ src: '../assets/fonts/glorify_light-webfont.woff2' })
const glorifyReg = localfont({ src: '../assets/fonts/glorify_regular-webfont.woff2' })

const noto_S_TH = Noto_Serif_Thai({ subsets: ['thai'] })

function Aheyechildren() {
  return (
    <>
      <div className="container-fluid mx-auto p-4 md:p-0 lg:p-0 xl:p-0 mt-10 md:mt-20 lg:mt-20 xl:mt-20 mb-10 md:mb-0 lg:mb-10 xl:mb-10">
        <div className="grid grid-cols-0 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          <div className='ps-0 md:ps-4 lg:ps-0 xl:ps-4'>
            <Image src={Imgb1} className="w-full md:w-[40rem] lg:w-[44rem] xl:w-[40rem] mx-0 md:mx-auto" alt="Img-b-1" />
          </div>

          <div className={`${noto_S_TH.className} paragrah-1 mt-0 md:mt-24 lg:mt-24 xl:mt-36`}>
            <h2 className="text-center text-color1 md:text-start lg:text-start xl:text-start text-6xl md:text-6xl lg:text-7xl xl:text-6xl mt-0">อ๊ะอาย</h2>
            <p className="text-center md:text-start lg:text-start xl:text-start text-4xl md:text-4xl lg:text-5xl xl:text-6xl mt-0">เข้าสู่วงการเพียงแค่อายุ <br></br> <span className="text-center md:text-start lg:text-start xl:text-center text-6xl xl:text-7xl text-[#99A98F]">6 ขวบ</span></p>
            <p className="text-2xl md:text-xl xl:text-3xl text-center md:text-start lg:text-start xl:text-start italic">โดยงานแรกคือการถ่ายโฆษณา</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Aheyechildren