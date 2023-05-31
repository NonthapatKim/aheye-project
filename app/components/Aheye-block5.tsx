import React, { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Noto_Serif_Thai } from 'next/font/google'
import localfont from 'next/font/local'
const glorifyLight = localfont({ src: '../assets/fonts/glorify_light-webfont.woff2' })
const glorifyReg = localfont({ src: '../assets/fonts/glorify_regular-webfont.woff2' })

const noto_S_TH = Noto_Serif_Thai({ subsets: ['thai'] })

import Image from "next/image";
import Imgb5 from "../assets/images/aheye-b-5.png"
import ribbon from "../assets/images/ribbon-1.png"
import fEVE from "../assets/images/4eve-artists.png"
import ribbon2 from "../assets/images/ribbon-2.png"

const boxVariant = {
    visible: { opacity: 1, transition: { duration: 2 } },
    hidden: { opacity: 0 }
};  

/* eslint-disable react/no-unescaped-entities */

function AheyeB5() {
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
            <div className={`${noto_S_TH.className} mt-20 md:mt-20 lg:mt-20 xl:mt-20 mb-14 md:mb-5 lg:mb-5 xl:mb-14 text-center`}>
                <p className="text-4xl leading-normal">
                    จุดเปลี่ยน...ที่เปลี่ยนไป <motion.span className="text-6xl xl:text-6xl leading-normal text-[#d25380]" ref={ref}variants={boxVariant} initial="hidden" animate={control}>
                        ตลอดกาล
                    </motion.span>
                </p>
            </div>

            <div className={`${noto_S_TH.className} container mx-auto mt-0 md:mt-0 lg:mt-0 xl:mt-0`}>
                <div className="grid grid-cols-0 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                    <div><Image src={Imgb5} className="mx-auto w-full md:w-full lg:w-full xl:w-full" alt="..." /></div>

                    <div className="-mt-4 md:mt-4 lg:mt-10 xl:mt-28 order-last md:order-none lg:order-none xl:order-none p-4 md:p-0 lg:p-4 xl:p-0">
                        <h2 className="text-4xl md:text-4xl lg:text-5xl xl:text-5xl leading-[1.4] md:leading-normal lg:leading-[1.5] xl:leading-[1.4] text-[#d25380] text-center md:text-start lg:text-start xl:text-start">น้องเล็กสุดในรายการ และ "4EVE"</h2>

                        <p className="mt-4 text-2xl md:text-lg lg:text-2xl xl:text-2xl text-center md:text-start lg:text-start xl:text-start"><span className="text-color1">อ๊ะอาย</span> ได้ผ่านรอบออดิชั่นในรายการ <b>4EVE Girl group star</b> เป็นเด็กฝึก 20 คนสุดท้ายจากผู้สมัครกว่า 1000 คน โดยในขณะนั้นอ๊ะอายเอง มีอายุตอนสมัครเพียงแค่ 15 ปีเท่านั้น ทำให้อ๊ะอายกลายเป็นน้องเล็กสุดของรายการนี้</p>
                    </div>
                </div>
            </div>

            <div className={`${noto_S_TH.className} container mx-auto mt-0 md:mt-0 lg:mt-0 xl:mt-0`}>
                <div className="grid grid-cols-0 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                    <div className="p-4 md:p-0 lg:p-4 xl:p-0">
                        <p className="mt-4 text-2xl md:text-lg lg:text-2xl ml:text-2xl text-center md:text-start lg:text-start xl:text-start">อ๊ะอายได้ทุ่มเทกับรายการนี้เป็นอย่างมาก ถึงแม้ว่าเรื่องเต้น จะเป็นจุดด้อยของอ๊ะอายก็ตาม ตลอดการแข่งขันอ๊ะอายก็ได้แสดงความพยายามของตัวเองออกมาอยู่เรื่อย ๆ จนทะลุไปถึงรอบ Final Debut ซึ่งเป็นรอบสุดท้ายของการแข่งขันได้ ในรอบนี้เองทำให้อ๊ะอาย ได้รับการคัดเลือกจากรุ่นพี่ให้เป็นหนึ่งในสมาชิกของวง <b>4EVE</b> เกิร์ลกรุ๊ปหน้าใหม่ของเมืองไทยในขณะนั้น อีกทั้งยังเป็นน้องเล็กของวง 4EVE เช่นเดียวกัน และถือว่านี่เป็นจุดเปลี่ยนสำคัญของอ๊ะอายไปเลยก็ว่าได้</p>
                    </div>

                    <div>
                        <p className="mt-4 md:mt-14 lg:mt-32 xl:mt-14 text-5xl md:text-4xl lg:text-5xl xl:text-5xl text-center md:text-center lg:text-center xl:text-center italic leading-normal md:leading-normal lg:leading-[1.5] xl:leading-normal text-color1">"เป้าหมายตอนนี้คือทำ 4EVE ให้ดีที่สุดค่ะ"</p>
                    </div>
                </div>
            </div>

            <div className={`${noto_S_TH.className} container-fluid mx-auto mt-20 md:mt-20 lg:mt-0 xl:mt-20`}>
                <Image src={ribbon} className="w-full" alt="..." />
                <Image src={fEVE} className="w-[40rem] mt-4 mx-auto" alt="4EVE" />

                <p className="text-center text-lg md:text-xl lg:text-2xl xl:text-2xl leading-normal p-4 md:p-0 lg:p-0 xl:p-0">สมาชิกวง 4EVE เดบิวต์ (Debut) วันที่ 20 ธันวาคม 2563 <br/> <span className="text-[#d25380]">สมาชิก</span> (จากซ้ายไปขวา): อ๊ะอาย, มายด์, ตาออม, โจริญ, ฝ้าย, พั้นซ์ และแฮนน่า</p>

                <Image src={ribbon2} className="w-full mt-10" alt="..." />
            </div>
        </>
    )
}

export default AheyeB5