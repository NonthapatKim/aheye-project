import React from "react";
import Image from "next/image";
import imgP from "../assets/images/img-p.png";
import imgC from "../assets/images/cricle-letters.png";

import localfont from 'next/font/local'
const glorifyLight = localfont({ src: '../assets/fonts/glorify_light-webfont.woff2' })
const glorifyReg = localfont({ src: '../assets/fonts/glorify_regular-webfont.woff2' })

function Hero() {
  return (
    <>
        <section>
          <div className="cloud hidden xl:block -mt-36 ms-96"></div>
          <div className="cloud hidden xl:block -mt-10 -ms-64"></div>
          <div className="cloud hidden xl:block -mt-52 -ms-S2"></div>
          <div className="cloud hidden xl:block mt-52 -ms-S1"></div>
          <div className="cloud hidden xl:block mt-36 ms-72"></div>

          <div className="cricle-letters hidden xl:block xl:w-32 xl:mt-64 xl:ms-96 absolute">
            <Image src={imgC} alt="..." />
          </div>

          <div className="cricle-letters max-w-screen-lg hidden xl:block xl:w-24 xl:mt-S0 xl:ms-S3 absolute">
            <Image src={imgC} alt="..." />
          </div>

          <div className="grid grid-cols-12 gap-7 mt-10 md:mt-0 lg:mt-5">
            <div className={`${glorifyReg.className} col-span-12 text-center text-5xl md:text-6xl lg:text-6xl text-color1`}>
                Korranid <br></br> Laosubinprasoet
            </div>

            <div className="col-span-12 max-w-screen-lg mx-auto img-hero w-64 md:w-80 lg:w-96">
                <Image src={imgP} className="mx-auto" priority={true} alt="hero-img" />
            </div>
          </div>
        </section>
    </>
  );
}

export default Hero;
