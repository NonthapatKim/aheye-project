import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Noto_Serif_Thai } from "next/font/google";
import localfont from "next/font/local";
const glorifyLight = localfont({
  src: "../assets/fonts/glorify_light-webfont.woff2",
});
const glorifyReg = localfont({
  src: "../assets/fonts/glorify_regular-webfont.woff2",
});

import bgSm from "../assets/images/bg-c1-sm.png";
import bgMd from "../assets/images/bg-c1-md.png";
import bgLg from "../assets/images/bg-c1-lg.png";
import bgXl from "../assets/images/bg-c1.png";

const noto_S_TH = Noto_Serif_Thai({ subsets: ["thai"] });

const boxVariant = {
  visible: { opacity: 1, transition: { duration: 2 } },
  hidden: { opacity: 0 },
};

function AheyeQ() {
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
      <div className={`${noto_S_TH.className} container-fluid mx-auto`}>
        <div className="grid grid-cols-0 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-8">
            <Image src={bgSm} className="block md:hidden lg:hidden xl:hidden w-full" alt="Bg-Sm" />
            <Image src={bgMd} className="hidden md:block lg:hidden xl:hidden w-full" alt="Bg-Md" />
            <Image src={bgLg} className="hidden md:hidden lg:block xl:hidden w-full" alt="Bg-Lg" />
            <Image src={bgXl} className="hidden md:hidden lg:hidden xl:block w-full" alt="Bg-Xl" />


            <div className="absolute mt-10 md:mt-20 lg:mt-40 xl:mt-32 ms-0 md:ms-0 lg:ms-[30rem] xl:ms-[32rem] ps-8 md:ps-44 lg:ps-0 xl:ps-0 pe-8 md:pe-44 lg:pe-0 xl:pe-0">
                <motion.h2 
                  className="italic text-white text-center text-2xl md:text-3xl lg:text-3xl xl:text-5xl mb-5 md:mb-5 lg:mb-5 xl:mb-10 leading-normal md:leading-normal lg:leading-normal xl:leading-[1.5]"
                  ref={ref}
                  variants={boxVariant}
                  initial="hidden"
                  animate={control}
                >
                  “หนูอยากเป็นศิลปินและนักแสดงที่ดี <br/> เป็นแบบอย่างที่ดีให้กับสังคมค่ะ”
                </motion.h2>

                <p className="text-white text-center text-white/75">ข้อความส่วนหนึ่งจากแฟ้มสะสมผลงาน (Portfolio) ของ <br/> อ๊ะอาย กรณิศ เล้าสุบินประเสริฐ <br/> ในการยื่นเข้ารอบที่ 1 แฟ้มสะสมผลงาน (Portfolio) <br/> วิชาเอกการแสดงและกำกับการแสดง <br /> วิทยาลัยนวัตกรรมสื่อสารสังคม มหาวิทยาลัยศรีนครินทรวิโรฒ</p>
            </div>
        </div>
      </div>
    </>
  );
}

export default AheyeQ;
