import React from 'react'
import localfont from 'next/font/local'
const glorifyLight = localfont({ src: '../assets/fonts/glorify_light-webfont.woff2' })
const glorifyReg = localfont({ src: '../assets/fonts/glorify_regular-webfont.woff2' })

function Aheyechildren() {
  return (
    <div className="container mx-auto mt-10">
      <div className="grid grid-cols-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
        <div className={`${glorifyReg.className} text-5xl`}>Aheye</div>
        <div>One of three columns</div>
      </div>
    </div>
  )
}

export default Aheyechildren