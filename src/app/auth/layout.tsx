// app/auth/layout.tsx
import Image from 'next/image';
import React from 'react';
import frame from "../../../public/image/Frame.png"
import framefoot from "../../../public/image/Framefoot.png"
import logo from "../../../public/image/logo.png"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-[1500px] mx-auto  robot">
      <div className="flex">
        <div className='w-full py-[21px] px-10 lg:px-[81px]'>
        <Image src={logo} alt='frame' className='object-cover w-[250px] mb-[40px] mt-[61px] '/>
        {children}
        </div>
        <div className='w-full hidden md:flex flex-col bg-lightPurple-100 font-bold pl-2 lg:pl-[57px] py-[37px]'>
          <h3 className='text-[30px] text-white mb-10'>Unlock the Power of AI for Your Business!</h3>
          <Image src={frame} alt='frame' className='object-cover w-full '/>
          <Image src={framefoot} alt='frame' className='object-cover w-full mt-[61px] '/>
        </div>
      </div>
    </div>
  );
}
