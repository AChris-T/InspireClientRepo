import Navbar from '@/components/Home/Navbar';
import React from 'react';

export default function Homelayout({ children }) {
  return (
    <div className="bg-black-100 h-full text-white ">
      <div className=" py-3 px-3 lg:px-[141px]">
        <Navbar />
      </div>
      {children}
    </div>
  );
}
