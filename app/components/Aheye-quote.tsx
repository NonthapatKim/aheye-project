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
  visible: { opacity: 1, transition: { duration: 0.5 } },
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
            <Image src={bgSm} className="block md:hidden lg:hidden xl:hidden" alt="Bg-Sm" />
            <Image src={bgMd} className="hidden md:block lg:hidden xl:hidden" alt="Bg-Md" />
            <Image src={bgLg} className="hidden md:hidden lg:block xl:hidden" alt="Bg-Lg" />
            <Image src={bgXl} className="hidden md:hidden lg:hidden xl:block" alt="Bg-Xl" />

            {/* sm */}
            <div className="absolute text-center block md:hidden lg:hidden xl:hidden p-8 mt-10">
                <h2 className="italic text-white text-2xl leading-normal mb-5">“หนูอยากเป็นศิลปินและนักแสดงที่ดี <br/> เป็นแบบอย่างที่ดีให้กับสังคมค่ะ”</h2>

                <p className="text-white/75 text-sm">ข้อความส่วนหนึ่งจากแฟ้มสะสมผลงาน (Portfolio) ของ <br/> อ๊ะอาย กรณิศ เล้าสุบินประเสริฐ <br/> ในการยื่นเข้ารอบที่ 1 แฟ้มสะสมผลงาน (Portfolio) <br/> วิชาเอกการแสดงและกำกับการแสดง <br /> วิทยาลัยนวัตกรรมสื่อสารสังคม มหาวิทยาลัยศรีนครินทรวิโรฒ</p>
            </div>

            {/* md */}
            <div className="absolute text-center hidden md:block lg:hidden xl:hidden ps-40 pe-40 mt-20">
                <h2 className="italic text-white text-3xl leading-normal mb-5">“หนูอยากเป็นศิลปินและนักแสดงที่ดี <br/> เป็นแบบอย่างที่ดีให้กับสังคมค่ะ”</h2>

                <p className="text-white/75 text-sm">ข้อความส่วนหนึ่งจากแฟ้มสะสมผลงาน (Portfolio) ของ <br/> อ๊ะอาย กรณิศ เล้าสุบินประเสริฐ <br/> ในการยื่นเข้ารอบที่ 1 แฟ้มสะสมผลงาน (Portfolio) <br/> วิชาเอกการแสดงและกำกับการแสดง <br /> วิทยาลัยนวัตกรรมสื่อสารสังคม มหาวิทยาลัยศรีนครินทรวิโรฒ</p>
            </div>

            {/* lg */}
            <div className="absolute mt-40 ms-[30rem] hidden md:hidden lg:block xl:hidden">
                <h2 className="italic text-white text-center text-3xl leading-normal mb-10">“หนูอยากเป็นศิลปินและนักแสดงที่ดี <br/> เป็นแบบอย่างที่ดีให้กับสังคมค่ะ”</h2>

                <p className="text-white text-center text-white/75">ข้อความส่วนหนึ่งจากแฟ้มสะสมผลงาน (Portfolio) ของ <br/> อ๊ะอาย กรณิศ เล้าสุบินประเสริฐ <br/> ในการยื่นเข้ารอบที่ 1 แฟ้มสะสมผลงาน (Portfolio) <br/> วิชาเอกการแสดงและกำกับการแสดง <br /> วิทยาลัยนวัตกรรมสื่อสารสังคม มหาวิทยาลัยศรีนครินทรวิโรฒ</p>
            </div>

            {/* xl */}
            <div className="absolute mt-32 ms-[32rem] hidden md:hidden lg:hidden xl:block">
                <h2 className="italic text-white text-center text-5xl leading-normal mb-10">“หนูอยากเป็นศิลปินและนักแสดงที่ดี <br/> เป็นแบบอย่างที่ดีให้กับสังคมค่ะ”</h2>

                <p className="text-white text-center text-white/75">ข้อความส่วนหนึ่งจากแฟ้มสะสมผลงาน (Portfolio) ของ <br/> อ๊ะอาย กรณิศ เล้าสุบินประเสริฐ <br/> ในการยื่นเข้ารอบที่ 1 แฟ้มสะสมผลงาน (Portfolio) <br/> วิชาเอกการแสดงและกำกับการแสดง <br /> วิทยาลัยนวัตกรรมสื่อสารสังคม มหาวิทยาลัยศรีนครินทรวิโรฒ</p>
            </div>
        </div>
      </div>
    </>
  );
}

export default AheyeQ;
