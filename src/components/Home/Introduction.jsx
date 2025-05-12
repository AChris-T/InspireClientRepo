'use client';
import React, { useState } from 'react';
import play from '../../../public/images/pay.png';
import Image from 'next/image';

export default function Introduction() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="px-3 space gap-5 lg:px-[121px] flex items-center flex-col md:flex-row justify-between">
      <div className="w-full">
        <h3 className="text-2xl md:text-[58px] text-[#CACACE]">INTRODUCTION</h3>
        <p className="text-[#AFB0B6] text-sm leading-9 lg:w-[513px] w-full">
          At InspireEdge AI, we help e-commerce brands recover lost revenue,
          simplify decision-making, and grow with confidence.We use advanced
          behavior triggers, real-time data, and intelligent automation to turn
          abandoned carts into loyal customers—ethically and at scale.
        </p>
      </div>
      <div className="w-full ">
        <div className="mt-[30px] w-full items-center flex justify-center">
          <div className="w-full  h-[300px] bg-transparent border-[1.5px] border-[#3c3e35] rounded-2xl flex items-center justify-center">
            {isPlaying ? (
              <iframe
                className="rounded-2xl w-full h-full"
                src="https://www.youtube.com/embed/PL-7PVhv0UI?autoplay=1"
                title="YouTube video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            ) : (
              <div className="relative flex items-center justify-center">
                <div className="absolute w-[100px] h-[100px] rounded-full bg-yellow-300 opacity-10 animate-ping"></div>
                <div className="absolute w-[80px] h-[80px] rounded-full bg-yellow-300 opacity-20 animate-ping delay-700"></div>
                <div className="absolute w-[60px] h-[60px] rounded-full bg-yellow-300 opacity-30 animate-ping delay-700"></div>
                <div
                  onClick={() => setIsPlaying(true)}
                  className="cursor-pointer w-[89px] h-[89px]  text-black rounded-full flex items-center justify-center  z-10"
                >
                  <Image
                    onClick={() => setIsPlaying(true)}
                    src={play}
                    alt=""
                    className="object-cover cursor-pointer w-[200px]"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
