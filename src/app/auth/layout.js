import Navbar from '@/components/Home/Navbar';
import Image from 'next/image';
import React from 'react';
import cards from '../../../public/images/cards.png'; 
import cardfram from '../../../public/images/cardfra.png';

export default function Homelayout({ children }) {
  return (
    <div className="flex justify-between w-full">
      <div className="w-full bg-[#050505] pb-6 overflow-y-scroll h-[100dvh] hide-scrollbar flex flex-col gap-14">
        <div className="text-white px-10 py-6">Logo</div>
        {children}
      </div>
      <div className="bg-yellow-200 overflow-y-scroll hide-scrollbar pt-42 manrope flex-col justify-center items-center hidden md:flex w-full h-[100dvh]">
        <h3 className="text-2xl font-medium">
          Smarter Commerce. Visible Results.
        </h3>
        <p className="text-center w-[394px] text-sm mt-2 text-[#00000099]">
          The future of intelligent commerce see real data, not just dummy
          screens
        </p>
        <Image src={cards} alt="" className="object-contain mt-10 h-[400px]" />
        <Image
          src={cardfram}
          alt=""
          className="-mt-26 h-[200px] w-full object-cover"
        />
      </div>
    </div>
  );
}
