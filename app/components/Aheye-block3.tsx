import React, { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Imgp2 from "../assets/images/img-p-2.png"
import Imgb3 from "../assets/images/aheye-b-3.png"
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

function AheyeB3() {
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
            <div className={`${noto_S_TH.className} mt-20 md:mt-20 lg:mt-40 xl:mt-32 mb-5 md:mb-5 lg:mb-5 xl:mb-0 text-center`}>
                <motion.p 
                    className="text-5xl xl:text-6xl leading-normal text-[#3F72AF] italic"
                    ref={ref}
                    variants={boxVariant}
                    initial="hidden"
                    animate={control}
                >
                    "อยากเข้าไปอยู่ในโทรทัศน์บ้าง"
                </motion.p>
            </div>

            <div className={`${noto_S_TH.className} container mx-auto p-4 mt-0 md:mt-0 lg:mt-0 xl:mt-0`}>
                <div className="grid grid-cols-0 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                    <div className="mt-0 md:mt-24 lg:mt-0 xl:mt-0"><Image src={Imgb3} className="w-full md:w-[36rem] lg:w-[40rem] mx-auto" alt="..." /></div>
                    <div className='mt-10 md:mt-0 xl:mt-14 text-center md:text-start lg:text-start xl:text-start ps-4 md:ps-0 lg:ps-10 xl:ps-0 pe-4 md:pe-0 lg:pe-10 xl:pe-0'>
                        <p className="text-2xl md:text-lg lg:text-lg xl:text-2xl"><span className="text-color1">อ๊ะอาย</span> ได้เริ่มต้นเส้นทาง <b>นักแสดงเด็ก</b> ในวัย 9 ขวบ จากจุดเริ่มต้นที่อ๊ะอาย ชอบร้องเพลงประกอบละคร จึงทำให้ครอบครัวได้เริ่มผลักดันให้อ๊ะอายได้ถ่ายละคร, เดินแบบ, เล่นซิทคอม และละครเวที โดยเรื่องแรกที่อ๊ะอายออดิชั่น และมีโอกาสได้เล่นคือ <b>สี่แผ่นดิน เดอะมิวสิคคัล</b> ซึ่งเป็นละครเวที อ๊ะอายได้ทุ่มเทอย่างมาก ฝึกซ้อมอย่างหนัก แต่ไม่รู้สึกเหนื่อยเลย เพราะได้ซึมซับการทำงานของพี่ ๆ ทำให้อ๊ะอายได้รู้ว่า <br/> </p>
                        <p className="italic text-4xl md:text-3xl lg:text-4xl xl:text-4xl pt-5 pb-5">"ถ้ามาสายนี้จริง ๆ ก็ต้องมีความรับผิดชอบสูงมาก"</p>
                        <p className="text-2xl md:text-xl lg:text-lg xl:text-2xl">บทบาทของอ๊ะอายในหน้าจอโทรทัศน์ ที่ทำให้หลาย ๆ คนคุ้นตามากที่สุดคือ ซิทคอมเรื่อง <b>บางรักซอย 9/1</b> โดยอ๊ะอายรับบทบาทเป็น <b>แป้งหอม</b> </p>
                    </div>
                </div>
            </div>

            <div className={`${noto_S_TH.className} container ps-4 md:ps-10 lg:ps-14 xl:ps-32 pe-4 md:pe-0 lg:pe-0 xl:pe-0 mt-10 md:mt-10 lg:mt-0 xl:mt-5 mb-20`}>
                <div className="grid grid-cols-0 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                    <div>
                        <p className="text-center md:text-start lg:text-start xl:text-start text-2xl leading-normal"><i>กาลครั้งหนึ่ง</i> <span className="text-color1">อ๊ะอาย</span> เคยพลาดการแคสโฆษณา เพราะไม่กล้าเล่น ทำให้อ๊ะอายเสียดายโอกาสในครั้งนั้น จนกลับมาฮึดสู้ เริ่มต้นใหม่อีกครั้ง และได้เรียนรู้ว่า <br/></p>

                        <p className="text-center md:text-start lg:text-start xl:text-start text-3xl italic pt-5 pb-5">"โอกาสคือสิ่งสำคัญ แต่ความกล้าคือสิ่งสำคัญกว่า"</p>

                        <p className="text-center md:text-start lg:text-start xl:text-start text-2xl">ทำให้อ๊ะอาย คว้าทุกโอกาสที่เข้ามาในชีวิต ทั้งเล่นละคร, ภาพยนตร์, ละครเวที รวมไปถึงการพากย์เสียงต่าง ๆ ตั้งแต่นั้นมา</p>
                    </div>

                    <div className="mt-5 md:mt-10 lg:mt-0 xl:mt-5">
                        <Image src={Imgp2} className="w-60 mx-auto md:mx-auto lg:mx-auto xl:mx-0 xl:ms-auto" alt="..." />
                        <p className="text-color1 text-center md:text-center lg:text-center xl:text-end italic text-3xl md:text-2xl lg:text-3xl xl:text-4xl pt-5">ต่อให้ได้เลือกใหม่อีกครั้ง <br/> หนูก็ชอบที่ตัวเองมี "แผล" ค่ะ</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AheyeB3