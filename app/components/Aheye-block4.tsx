import React, { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Imgb4 from "../assets/images/aheye-b-4.png"
import { Noto_Serif_Thai } from 'next/font/google'
import localfont from 'next/font/local'
const glorifyLight = localfont({ src: '../assets/fonts/glorify_light-webfont.woff2' })
const glorifyReg = localfont({ src: '../assets/fonts/glorify_regular-webfont.woff2' })

const noto_S_TH = Noto_Serif_Thai({ subsets: ['thai'] })

const boxVariant = {
    visible: { opacity: 1, transition: { duration: 2 } },
    hidden: { opacity: 0 }
};  

/* eslint-disable react/no-unescaped-entities */

function AheyeB4() {
    const control = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        control.start("visible");
      } else {
        control.start("hidden");
      }
    }, [control, inView]);

    return (
        <>
            <div className={`${glorifyReg.className} mt-20 md:mt-20 lg:mt-40 xl:mt-20 mb-14 md:mb-5 lg:mb-5 xl:mb-14 text-center`}>
                <p className="text-4xl leading-normal">
                    Lookin’ Lookin’ Lookin’ Lookin’ Look<br/>
                </p>
                <motion.p 
                    className="text-4xl md:text-6xl lg:text-6xl xl:text-6xl leading-normal text-[#d25380]"
                    ref={ref}
                    variants={boxVariant}
                    initial="hidden"
                    animate={control}
                >
                    I’m your Superstar
                </motion.p>
            </div>

            <div className={`${noto_S_TH.className} container mx-auto mt-0 md:mt-0 lg:mt-0 xl:mt-0`}>
                <div className="grid grid-cols-0 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                    <div className="-mt-4 md:mt-14 lg:mt-2 xl:mt-32 order-last md:order-none lg:order-none xl:order-none p-4 md:p-0 lg:p-4 xl:p-0">
                        <h2 className="text-4xl md:text-4xl lg:text-5xl xl:text-5xl leading-[1.4] md:leading-normal lg:leading-[1.5] xl:leading-[1.4] text-[#d25380] text-center md:text-start lg:text-start xl:text-start">"มันเป็นความรู้สึกตอนเห็นศิลปินร้องไปด้วย เต้นไปด้วย มันเท่มากเลยค่ะ"</h2>

                        <p className="mt-4 text-2xl text-center md:text-start lg:text-start xl:text-start">นี่คืออีกหนึ่งเส้นทางที่ <span className="text-color1">อ๊ะอาย</span> ได้ฝันไว้ เกิดจากในตอนนั้นอ๊ะอายสนใจในการเต้น อีกทั้งยังชอบไอดอลเกาหลี ประจวบเหมาะที่ในตอนนั้นรายการ <b>4EVE Girl group star</b> เปิดรับสมัครอยู่พอดี ทำให้อ๊ะอาย ตัดสินใจสมัครเข้าร่วมแข่งขันในรายการ</p>
                    </div>
                    <div><Image src={Imgb4} className="mx-auto w-72 md:w-full lg:w-[22rem] xl:w-96" alt="..." /></div>
                </div>
            </div>
        </>
    )
}

export default AheyeB4