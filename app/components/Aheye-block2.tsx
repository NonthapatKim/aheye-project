import React, { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Imgb2 from "../assets/images/aheye-b-2.png"
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

function AheyeB2() {
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
            <div className={`${noto_S_TH.className} mt-20 md:mt-20 lg:mt-40 xl:mt-32 mb-14 md:mb-5 lg:mb-5 xl:mb-14 text-center`}>
                <p className="text-4xl leading-normal">แต่ไป ๆ มา ๆ <span className="text-color1 text-5xl xl:text-6xl">อ๊ะอาย</span> <br/> ก็เริ่มหลงรักการร้องเพลง <br/> โดยมีจุดเริ่มต้นมาจาก <br/></p>
                <motion.p 
                    className="text-5xl xl:text-6xl leading-normal text-[#E84545]"
                    ref={ref}
                    variants={boxVariant}
                    initial="hidden"
                    animate={control}
                >
                    การร้องเพลงบนรถ
                </motion.p>
            </div>

            <div className={`${noto_S_TH.className} container mx-auto mt-0 md:mt-0 lg:mt-0 xl:mt-20`}>
                <div className="grid grid-cols-0 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                    <div className="-mt-4 md:mt-8 lg:mt-14 order-last md:order-none lg:order-none xl:order-none xl:mt-14 p-4 md:p-0 lg:p-4 xl:p-0">
                        <h2 className="text-4xl md:text-4xl lg:text-3xl xl:text-5xl leading-[1.4] lg:leading-[1.5] xl:leading-[1.4] text-[#E84545] text-center md:text-start lg:text-start xl:text-start">จากร้องเพลงบนรถ <br/> สู่การผลักดันประกวดในรายการเพลงอย่างจริงจัง</h2>

                        <p className="mt-4 text-xl text-center md:text-start lg:text-start xl:text-start"><span className="text-color1">อ๊ะอาย</span> ได้เข้าสู่การประกวดรายการเพลงต่าง ๆ โดยรายการแรกคือ <b>the trainer ปั้นฝันสนั่นเวที ปี 5</b> โดยตอนนั้นอ๊ะอายมีอายุแค่ 7 ขวบ หลังจากนั้นได้เข้าแข่งขันในรายการ <b>The Voice Kids Thailand ซีซั่น 2</b> ซึ่งทะลุไปถึงรอบ 5 คนสุดท้ายของทีมซานิ อีกรายการที่ทำให้หลายคนรู้จักอ๊ะอายคือ <b>We Kid Thailand เด็กร้องก้องโลก</b> ในชุดการแสดงเพลง "ความในใจ"</p>
                    </div>
                    <div><Image src={Imgb2} className="mx-auto w-[32rem]" alt="..." /></div>
                </div>
            </div>
        </>
    )
}

export default AheyeB2