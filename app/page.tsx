"use client";
import React, { useState, useEffect } from "react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";

//Page 
import Hero from "./components/Hero";
import Aheyechildren from "./components/Aheye-children";

import Img1 from "./assets/images/loader/1.jpg"
import Img2 from "./assets/images/loader/2.jpg"
import Img3 from "./assets/images/loader/3.jpg"
import Img4 from "./assets/images/loader/4.jpg"
import Img5 from "./assets/images/loader/5.jpg"
import Img6 from "./assets/images/loader/6.jpg"
import Img7 from "./assets/images/loader/7.jpg"
import Img8 from "./assets/images/loader/8.jpg"
import Img9 from "./assets/images/loader/9.jpg"
import Img10 from "./assets/images/loader/10.jpg"


const imagePaths = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10]

const len = Object.values(imagePaths).length;
const imgs: any[] = (Object.values(imagePaths) as unknown as string[]).slice(0, len);

const parentVariants = {
  removed: {
    y: "-100%",
    transition: {
      y: {
        type: "tween",
        duration: 0.3,
      },
    },
  },
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 2,
      delayChildren: 2,
      staggerChildren: 0.2,
      type: "tween",
      duration: 1,
      opacity: {
        type: "tween",
        duration: 0.4,
      },
    },
  },
};

const childrenVariants = {
  hidden: {
    height: "0",
  },
  show: {
    height: "100%",
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

export default function Home() {
  const [isAnimatingStart, setIsAnimatingStart] = useState<boolean>(false);
  const [isLandingTime, setIsLandingTime] = useState<boolean>(true);

  useEffect(() => {
    Promise.all(imgs.map((src) => fetch(src.src))).then(() => {
      setIsAnimatingStart(true);
      setTimeout(() => setIsLandingTime(false), 1000);
    });
  }, []);

  useEffect(() => {
    if (isAnimatingStart) {
      setTimeout(() => {
        setIsAnimatingStart(false);
      }, 5000);
    }
  }, [isAnimatingStart]);

  return (
    <>
      {isLandingTime && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLandingTime ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid place-items-center h-screen"
        >
          Loading...
        </motion.div>
      //<div className="grid place-items-center h-screen">Loading...</div>
      )}

      <AnimatePresence>
        {isAnimatingStart && (
          <motion.div
            style={{
              zIndex: 999,
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
            variants={parentVariants}
            initial="hidden"
            animate="show"
            exit="removed"
          >
            {imgs.map((src: any, i) => (
              <motion.div
                variants={childrenVariants}
                key={src.src}
                style={{
                  bottom: 0,
                  overflow: "hidden",
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                }}
              >
                <motion.img
                  style={{
                    position: "absolute",
                    width: "100vw",
                    height: "100vh",
                    objectFit: "cover",
                    objectPosition: "center",
                    bottom: 0,
                  }}
                  src={src.src}
                ></motion.img>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {!isAnimatingStart && (
        <> 
          <Hero/>
          <Aheyechildren />
        </>
      )}
    </>
  );
}
