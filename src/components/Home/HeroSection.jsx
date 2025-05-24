'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import play from '../../../public/images/pay.png';
import Arrow from '../../../public/icons/Arrow';
import ArrowLeft from '../../../public/icons/ArrowLeft';

export default function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const calculateTransform = (baseX, baseY) => {
    if (!isClient) return `translate(${baseX}px, ${baseY}px)`;

    const moveX = (mousePosition.x - window.innerWidth / 2) * 0.01;
    const moveY = (mousePosition.y - window.innerHeight / 2) * 0.01;
    return `translate(${baseX + moveX}px, ${baseY + moveY}px)`;
  };

  return (
    <div className="flex flex-col min-h-[750px] lg:min-h-[780px] items-center relative overflow-hidden">
      <div className="mt-[40px] flex flex-col items-center gap-10 w-full text-center">
        <div className="w-full hidden lg:flex">
          <div
            className="absolute z-80 flex justify-end items-end flex-col top-36 left-42 transition-transform duration-300 ease-out hover:scale-110"
            style={{ transform: calculateTransform(0, 0) }}
          >
            <Arrow className="transition-all duration-300 hover:opacity-80" />
            <h3 className="mr-3 border-[#1F1F1F] rounded-lg font-medium text-[13px] border-[0.5px] p-2 transition-all duration-300">
              Insight engine
            </h3>
          </div>
          <div
            className="absolute z-80 flex items-start flex-col top-36 right-42 transition-transform duration-300 ease-out hover:scale-110"
            style={{ transform: calculateTransform(0, 0) }}
          >
            <ArrowLeft className="transition-all duration-300 hover:opacity-80" />
            <h3 className="mr-3 border-[#1F1F1F] z-80 rounded-lg font-medium text-[13px] border-[0.5px] p-2 transition-all duration-300">
              Recovery dashboard
            </h3>
          </div>
          <div
            className="absolute z-80 top-[350px] flex flex-col items-end left-28 transition-transform duration-300 ease-out hover:scale-110"
            style={{ transform: calculateTransform(0, 0) }}
          >
            <Arrow className="transition-all duration-300 hover:opacity-80" />
            <h3 className="mr-3 border-[#1F1F1F] z-100 rounded-lg font-medium text-[13px] border-[0.5px] p-2 transition-all duration-300">
              Smartflow recovery
            </h3>
          </div>
          <div
            className="absolute z-80 top-[300px] right-28 transition-transform duration-300 ease-out hover:scale-110"
            style={{ transform: calculateTransform(0, 0) }}
          >
            <ArrowLeft className="transition-all duration-300 hover:opacity-80" />
            <h3 className="ml-3 border-[#1F1F1F] rounded-lg font-medium text-[13px] border-[0.5px] p-2 transition-all duration-300">
              Compliance toolkit
            </h3>
          </div>
        </div>
        <div className="flex flex-col gap-10 w-full md:w-[691px] text-center">
          <h1 className="text-4xl md:text-[60px] space font-medium md:leading-16">
            Recover More. Grow Smarter.
          </h1>
          <p className="text-[#808080] text-lg md:text-xl">
            Turn abandoned carts into new income streams with AI-powered
            recovery, predictive analytics, and ethical precision.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 justify-center z-20">
            <button 
              className="bg-yellow-100 gap-2 rounded-full px-4 text-black-100 flex cursor-pointer items-center h-[48px] font-medium text-sm group"
              aria-label="Get your free audit now"
            >
              Get your free audit now
              <div className="bg-black-100 text-yellow-100 p-3 rounded-full transform rotate-[-40deg] transition-transform duration-300 group-hover:rotate-0">
                <FaArrowRight />
              </div>
            </button>
            <button 
              className="gap-2 rounded-full border-[#242323ed] border-[1px] px-4 text-white flex cursor-pointer items-center h-[48px] font-medium text-sm group"
              aria-label="Book a Demo with InspireEdge AI"
            >
              Book a Demo with InspireEdge AI{' '}
              <div className="bg-white text-black-100 p-3 rounded-full transform rotate-[-40deg] transition-transform duration-300 group-hover:rotate-0">
                <FaArrowRight />
              </div>
            </button>
          </div>
        </div>
        <div className="w-full flex top-[300px] justify-center absolute">
          <div className="w-[539px] h-[539px] rotate-circle absolute"></div>
          <div className="w-[450px] h-[450px] top-[50px] rotate-circle absolute"></div>
          <div className="w-[361px] h-[361px] top-[100px] rotate-circle absolute"></div>
          <div className="w-[272px] h-[272px] top-[150px] rotate-circle absolute"></div>
          <div className="w-[183px] h-[183px] top-[200px] rotate-circle absolute"></div>
        </div>

        <div className="pat mt-[-160px] pt-[200px] flex justify-center z-0">
          <div className="mt-[30px] w-full items-center flex justify-center px-2">
            <div className="w-full lg:w-[550px] h-[300px] bg-transparent border-[1.5px] border-[#3c3e35] rounded-2xl flex items-center justify-center">
              {isPlaying ? (
                <iframe
                  className="rounded-2xl w-full h-full"
                  src="https://player.vimeo.com/video/1085643440?h=f068b91aac&autoplay=1&autopause=0&badge=0&player_id=0&app_id=58479"
                  title="InspireEdge AI Product Demo"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-[100px] h-[100px] rounded-full bg-yellow-300 opacity-10 animate-ping"></div>
                  <div className="absolute w-[80px] h-[80px] rounded-full bg-yellow-300 opacity-20 animate-ping delay-700"></div>
                  <div className="absolute w-[60px] h-[60px] rounded-full bg-yellow-300 opacity-30 animate-ping delay-700"></div>
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="cursor-pointer w-[89px] h-[89px] text-black rounded-full flex items-center justify-center z-10"
                    aria-label="Play video"
                  >
                    <Image
                      src={play}
                      alt="Play video"
                      className="object-cover cursor-pointer w-[200px]"
                      width={200}
                      height={200}
                    />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
