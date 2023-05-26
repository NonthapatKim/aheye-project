import React from "react";
import Image from "next/image";
import imgP from "../assets/images/img-p.png";
import imgC from "../assets/images/cricle-letters-1.png";

import localfont from 'next/font/local'
const glorifyLight = localfont({ src: '../assets/fonts/glorify_light-webfont.woff2' })
const glorifyReg = localfont({ src: '../assets/fonts/glorify_regular-webfont.woff2' })

function Hero() {
  return (
    <>
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-7 mt-14 md:mt-0 lg:mt-0">
            <div className={`${glorifyReg.className} col-span-12 text-center text-5xl md:text-6xl lg:text-6xl text-color1`}>
                Korranid <br></br> Laosubinprasoet
            </div>

            <div className="col-span-12 max-w-screen-lg mx-auto img-hero w-72 md:w-80 lg:w-96">
                <Image src={imgP} className="mx-auto" priority={true} alt="hero-img" />
            </div>
          </div>
        </div>

        {/* <div className="grid place-items-center h-screen">
            <div className="img-hero w-64 md:w-80">
                <Image src={imgP} alt="profile-img" />
            </div>

            <div className="cricle-letters absolute w-96">
                <Image src={imgC} priority={true} alt="..." />
            </div>
        </div> */}
    </>
  );
}

export default Hero;
