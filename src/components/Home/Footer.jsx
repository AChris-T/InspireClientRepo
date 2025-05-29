import Image from 'next/image';
import React from 'react';
import logo from '../../../public/images/InspireEdge.png';
import twi from '../../../public/images/twi.png';
import fac from '../../../public/images/fac.png';
import tw from '../../../public/images/tw.png';
import lin from '../../../public/images/lin.png';

export default function Footer() {
  return (
    <div className="px-3 my-10 space gap-5 lg:px-[121px] flex  flex-col items-center">
      <Image src={logo} alt="" />
      <div className="mt-[60px] w-full pl-5 border-b-1 items-center py-6 border-[#FFFFFF1A]  flex justify-between">
        <h3 className="text-[#cac6dd] hidden md:flex text-2xl font-bold">
          InspireEdge
        </h3>
        <div className="flex justify-between gap-8 items-center">
          <p className="text-[#CAC6DD] text-xs font-medium">InspireEdge</p>
          <p className="text-[#CAC6DD] text-xs font-medium">InspireCraft</p>
          <p className="text-[#CAC6DD] text-xs font-medium">Pricing</p>
          <p className="text-[#CAC6DD] text-xs font-medium">How To Use</p>
        </div>
      </div>
      <div className=" w-full  items-center py-2  flex justify-between">
        <h3 className="text-[#cac6dd] text-sm">
          © InspireEdge 2024. All rights reserved
        </h3>
        <div className="flex justify-between gap-3 items-center">
          <Image src={twi} alt="" />
          <Image src={fac} alt="" />
          <Image src={tw} alt="" />
          <Image src={lin} alt="" />
        </div>
      </div>
    </div>
  );
}
