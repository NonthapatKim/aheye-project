import React, { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Noto_Serif_Thai } from 'next/font/google'
import localfont from 'next/font/local'
const glorifyLight = localfont({ src: '../assets/fonts/glorify_light-webfont.woff2' })
const glorifyReg = localfont({ src: '../assets/fonts/glorify_regular-webfont.woff2' })

const noto_S_TH = Noto_Serif_Thai({ subsets: ['thai'] })

import Image from "next/image";
import Imgb6 from "../assets/images/aheye-b-6.png"
import Imgb7 from "../assets/images/aheye-b-7.png"

const boxVariant = {
    visible: { opacity: 1, transition: { duration: 2 } },
    hidden: { opacity: 0 }
};  

/* eslint-disable react/no-unescaped-entities */

function AheyeB6() {
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
            <div className={`${noto_S_TH.className} mt-20 md:mt-20 lg:mt-20 xl:mt-20 mb-5 md:mb-5 lg:mb-5 xl:mb-14 text-center`}>
                <p className="text-4xl leading-normal">
                    การเห็นคนดูมีความสุข <br/> <motion.span className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl leading-normal text-color1" ref={ref}variants={boxVariant} initial="hidden" animate={control}>
                        คือความสุขของหนูค่ะ
                    </motion.span>
                </p>

                <Image src={Imgb6} className="w-full md:w-96 lg:w-[32rem] xl:w-[32rem] mx-auto" alt="..." />
            </div>

            <div className={`${noto_S_TH.className} container mx-auto mt-0 md:mt-0 lg:mt-0 xl:mt-0`}>
                <div className="grid grid-cols-0 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                    <div className="p-4 md:p-4 lg:p-4 xl:p-0">
                        <p className="mt-4 text-2xl md:text-lg lg:text-2xl ml:text-2xl text-center md:text-start lg:text-start xl:text-start">เชื่อได้เลยว่า หลาย ๆ คนที่กำลังอ่านเรื่องราวของอ๊ะอายในส่วนนี้ มีส่วนหนึ่งที่รู้จักอ๊ะอายผ่านเพลง <b>"วัดปะหล่ะ?"</b> ซึ่งเป็นเพลงที่ผู้เล่นอันทรงเกียรติหรือ MVP ทั้ง 3 คน ประกอบไปด้วย อ๊ะอาย, โจริญ และแฮนน่า ที่ได้ถูกรุ่นพี่คัดเลือกให้เป็นหนึ่งในสมาชิกของ 4EVE ในการแข่งขันรอบสุดท้ายของรายการ 4EVE Girl group all star เป็นคนร้องเพลงนี้</p>

                        <p className="mt-4 text-2xl md:text-lg lg:text-2xl ml:text-2xl text-center md:text-start lg:text-start xl:text-start">หลังจากปล่อยเพลงนี้ออกไปได้ไม่นานนัก ก็ทำให้เพลงนี้เป็นกระแสอันโด่งดังในชั่วข้ามคืน ทั้งตัวของอ๊ะอายเองและสมาชิกในวง ที่เรียกได้เลยว่า ถ้าถามใคร ๆ ว่า <b className="italic">รู้จัก 4EVE ได้อย่างไร</b> คำตอบนี้ เป็นคำตอบที่ตอบกันเป็นอย่างมากแน่นอน</p>
                    </div>

                    <div className="p-4 md:p-4 lg:p-4 xl:p-0">
                        <p className="mt-4 text-2xl md:text-lg lg:text-2xl ml:text-2xl text-center md:text-start lg:text-start xl:text-start">นับตั้งแต่นั้นเป็นต้นมา ฐานแฟนคลับของ 4EVE ก็ทยอยเพิ่มมากขึ้นเป็นเท่าตัว โดยได้รับแรงสนับสนุนและแรงผลักดันจากเหล่า <span className="text-[#d25380]">ฟอร์อาย</span> </p>

                        <p className="mt-4 text-2xl md:text-lg lg:text-2xl ml:text-2xl text-center md:text-start lg:text-start xl:text-start">จากหนึ่งเป็นสองจากสองเป็นสาม ผลงานเพลงของ 4EVE ก็ถูกปล่อยออกมาเรื่อย ๆ จากหลากหลายอารมณ์ของแต่ละเพลง ที่แสดงถึงความสามารถของแต่ละคน โดยเฉพาะอ๊ะอาย ที่มักถูกชมบ่อยเป็นอย่างมากจากรุ่นพี่ในวง รวมไปถึงโปรดิวเซอร์ของแต่ละเพลง ว่ามีการร้องที่โดดเด่น มีเอกลักษณ์เป็นอย่างมาก จึงไม่แปลกใจมากนักที่การแสดงเดียวของอ๊ะอายในคอนเสิร์ตแรกของ 4EVE อย่าง</p>
                    </div>
                </div>
            </div>

            <div className={`${noto_S_TH.className} container mx-auto mt-0 md:mt-0 lg:mt-0 xl:mt-0`}>
                <div className="grid grid-cols-0 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                    <div>
                        <Image src={Imgb7} className="w-96 md:w-full lg:w-96 xl:w-[21rem] mx-auto" alt="..." />
                    </div>

                    <div className="p-4 md:p-4 lg:p-4 xl:p-0">
                        <p className="mt-0 md:mt-0 lg:mt-0 xl:mt-10 text-2xl md:text-lg lg:text-2xl ml:text-2xl text-center md:text-start lg:text-start xl:text-start">4EVE The 1st Concert | Friends & Family ซึ่งจัดเมื่อวันที่ 17-18 ธันวาคม 2565 ที่ผ่านมา โดยอ๊ะอายได้เลือกร้องเพลง Good Day ของ IU ที่โชว์ High Notes 3 ชั้น ทำเอาศูนย์การประชุมแห่งชาติสิริกิติ์ สถานที่จัดงานใน 2 วันนั้น แทบแตกจากเสียงกรื๊ดของเหล่าฟอร์อายและเหล่าไออุ่น ซึ่งสร้างความประทับใจเป็นอย่างมาก นอกจากนี้ ยังถือว่าเป็นคอนเสิร์ตแรกที่จัดขึ้นเร็วมาก เพราะเดบิวต์มาได้เพียงเกือบ 2 ปีเท่านั้น แต่คอนเสิร์ตในครั้งนี้ ประดุจเหมือนเดบิวต์หรือมีประสบการณ์มานานแล้วเสียอีก และถือว่าใน 2 วันนั้น อ๊ะอายได้แสดงศักยภาพที่ตัวเองได้ฝึกฝนมาแต่เด็ก แสดงออกมาให้ทุกคนได้เห็นเป็นประจักษ์ ถึงแม้จะหนักแค่ไหนก็ตาม อ๊ะอายก็ได้แสดงให้ทุกคนได้เห็นแล้ว</p>
                    </div>
                </div>
            </div>

            <div className={`${noto_S_TH.className} container mx-auto mt-0 md:mt-0 lg:mt-0 xl:mt-0`}>
                <div className="grid grid-cols-0 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                    <div className="p-4 md:p-4 lg:p-4 xl:p-0">
                        <p className="mt-0 md:mt-0 lg:mt-0 xl:mt-5 text-2xl md:text-lg lg:text-2xl ml:text-2xl text-center md:text-start lg:text-start xl:text-start">จากวันนั้นถึงวันนี้ อ๊ะอาย เป็นเด็กหญิงคนหนึ่งที่มีความทุ่มเทเป็นอย่างมากตั้งแต่เด็ก ค้นขว่าย ให้โอกาสและเคารพความฝันกับตัวเองเสมอ ถึงแม้จะยากจะเหนื่อยแค่ไหนก็ตาม ก็ไม่มีวันย่อท้อต่อสิ่งใด ๆ เพราะแฟนคลับของอ๊ะอาย อย่างเหล่าไออุ่น เป็นเหมือนกำลังใจสำคัญของอ๊ะอายเป็นอย่างมาก แต่เหนือสิ่งอีกใด ครอบครัวและคนรอบข้างของอ๊ะอาย เป็นคนที่คอย Support ทุกความฝันของอ๊ะอายให้เป็นจริงอยู่เสมอ</p>
                    </div>

                    <div className="p-4 md:p-4 lg:p-4 xl:p-0">
                        <p className="mt-0 md:mt-0 lg:mt-0 xl:mt-5 text-2xl md:text-lg lg:text-2xl ml:text-2xl text-center md:text-start lg:text-start xl:text-start">ถึงจุด ๆ นี้แล้ว เชื่อว่าผู้ที่อ่านที่อ่านถึงจุด ๆ นี้  คงจะประทับใจกับเธอคนนี้เป็นอย่างมาก เราอยากย้ำให้ทุกคนที่อ่านถึงตรงนี้ได้รู้ว่า เจ้าเด็กหญิงคนนี้มีอายุเพียงแค่ 18 ปีเท่านั้น แต่ประสบการณ์ได้ผลัดพาเธอมาไกลถึงกว่า 10 ปีแล้ว เชื่อได้เลยว่าอ๊ะอายจะมีอนาคตที่สดใสในสายนี้อย่างสวยงาม และสมสง่า ดั่งที่อ๊ะอายได้ปราถนาไว้อย่างแน่นอน</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AheyeB6