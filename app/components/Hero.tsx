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
        <section className="h-S5">
          {/* sm */}
          <div className="block md:hidden lg:hidden xl:hidden 2xl:hidden">
            <div className="cloud -mt-24 -ms-56"></div>
            <div className="cloud mt-14 ms-24"></div>
            <div className="cloud mt-56 -ms-48"></div>

            <div className="cricle-letters-l block md:hidden lg:hidden xl:hidden 2xl:hidden w-28 -ms-2 -mt-3 absolute">
              <Image src={imgC} alt="..." />
            </div>
          </div>

          {/* md */}
          <div className="hidden md:block lg:hidden xl:hidden 2xl:hidden">
            <div className="cloud -mt-16 -ms-56"></div>
            <div className="cloud mt-14 ms-24"></div>
            <div className="cloud mt-60 -ms-52"></div>

            <div className="cricle-letters-l block md:block lg:hidden xl:hidden 2xl:hidden w-28 -ms-2 -mt-3 absolute">
              <Image src={imgC} alt="..." />
            </div>
          </div>

          {/* lg */}
          <div className="hidden lg:block">
            <div className="cloud -mt-36 ms-S4"></div>
            <div className="cloud -mt-10 -ms-64"></div>
            <div className="cloud -mt-60 -ms-S2"></div>
            <div className="cloud mt-52 -ms-S1"></div>
            <div className="cloud mt-36 ms-72"></div>

            <div className="cricle-letters-l hidden lg:block xl:hidden lg:w-32 lg:mt-64 lg:ms-60 absolute">
              <Image src={imgC} alt="..." />
            </div>

            <div className="cricle-letters-r max-w-screen-lg hidden lg:block xl:hidden lg:w-24 lg:mt-S0 lg:ms-S5 absolute">
              <Image src={imgC} alt="..." />
            </div>
          </div>

          {/* xl */}
          <div className="hidden xl:block">
            <div className="cloud -mt-36 ms-S4"></div>
            <div className="cloud -mt-10 -ms-64"></div>
            <div className="cloud -mt-60 -ms-S2"></div>
            <div className="cloud mt-52 -ms-S1"></div>
            <div className="cloud mt-36 ms-72"></div>

            <div className="cricle-letters-l hidden xl:block xl:w-32 xl:mt-64 xl:ms-96 absolute">
              <Image src={imgC} alt="..." />
            </div>

            <div className="cricle-letters-r max-w-screen-lg hidden xl:block xl:w-24 xl:mt-S0 xl:ms-S3 absolute">
              <Image src={imgC} alt="..." />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8 mt-10 md:mt-6 lg:mt-5">
            <div className={`${glorifyReg.className} col-span-12 text-center text-5xl md:text-6xl lg:text-6xl text-color1 md:mb-6 lg:mb-0 xl:mb-0`}>
              Korranid <br></br> Laosubinprasoet
            </div>

            <div className="col-span-12 max-w-screen-lg mx-auto img-hero w-80 lg:w-96">
              <Image src={imgP} className="mx-auto" priority={true} alt="hero-img" />
            </div>
          </div>
        </section>
    </>
  );
}

export default Hero;
