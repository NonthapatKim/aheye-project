import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import dykIcon from "../assets/images/dyk-logo.png";
import { Noto_Serif_Thai } from "next/font/google";
import localfont from "next/font/local";
const glorifyLight = localfont({
  src: "../assets/fonts/glorify_light-webfont.woff2",
});
const glorifyReg = localfont({
  src: "../assets/fonts/glorify_regular-webfont.woff2",
});

const noto_S_TH = Noto_Serif_Thai({ subsets: ["thai"] });

const boxVariant = {
  visible: { opacity: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0 },
};

/* eslint-disable react/no-unescaped-entities */

function AheyeDyk1() {
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
      <motion.div 
        className="container-fluid mx-auto p-4 md:p-4 lg:p-4 xl:p-5 pb-10 bg-[#27374D]"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <div className="grid grid-cols-0 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          <div>
            <Image src={dykIcon} className="w-36 mx-auto md:mx-0 lg:mx-0 xl:mx-0" alt="..." />
          </div>
          <div
            className={`${noto_S_TH.className} text-white text-center md:text-start lg:text-start xl:text-start text-xl leading-relaxed mt-0`}
          >
            <b>ในปี พ.ศ. 2565</b> <br></br>
            อ๊ะอาย ได้รับโอกาสพากย์เสียงให้กับภาพยนตร์เรื่อง <b>Turning Red | เขินแรงแดงเป็นแพนด้า</b> โดยอ๊ะอายพากย์เสียงเป็น "เหมยลี่" ตัวละครหลักของภาพยนตร์เรื่องนี้ ซึ่งสามารถรับชมภาพยนตร์เรื่องนี้ได้ทาง Disney + Hotstar
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default AheyeDyk1;
