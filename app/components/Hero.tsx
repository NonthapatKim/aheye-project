import React from "react";
import Image from "next/image";
import imgP from "../assets/images/img-p.png";
import imgC from "../assets/images/cricle-letters-1.png";

function Hero() {
  return (
    <div className="grid place-items-center h-screen">
      <div className="img-hero w-64 md:w-80 lg:w-1/4">
        <Image src={imgP} alt="hero-img" />
      </div>

      <div className="cricle-letters">
        <Image src={imgC} className="w-90 md:w-96 lg:w-128" priority={true} alt="..." />
      </div>
    </div>
  );
}

export default Hero;
