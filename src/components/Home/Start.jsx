import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

export default function Start() {
  return (
    <div className="px-3 mt-10 space gap-5 lg:px-[121px] flex  flex-col md:flex-row  justify-between">
      <div className="w-full">
        <h3 className="text-2xl uppercase md:text-[48px] text-[#CACACE]">
          Start Recovering revenue today{' '}
        </h3>
        <button className="hidden md:flex bg-yellow-100 mt-[40px] gap-2 rounded-full px-4 text-black-100  cursor-pointer items-center h-[48px] font-medium text-sm group">
          Start your free trial
          <div className="bg-black-100 text-yellow-100 p-3 rounded-full transform rotate-[-40deg] transition-transform duration-300 group-hover:rotate-0">
            <FaArrowRight />
          </div>
        </button>
      </div>
      <div className="w-full flex items-center justify-center ">
        <form className="w-full flex gap-4 flex-col  md:px-10">
          <input
            placeholder="First name"
            className="border-[#FFFFFF14] py-4 px-3 rounded-2xl border-[1px] w-full"
          />
          <input
            placeholder="Email"
            className="border-[#FFFFFF14] py-4 px-3 rounded-2xl border-[1px] w-full"
          />
          <input
            placeholder="Store Url"
            className="border-[#FFFFFF14] py-4 px-3 rounded-2xl border-[1px] w-full"
          />
          <input
            placeholder="Platform"
            className="border-[#FFFFFF14] py-4 px-3 rounded-2xl border-[1px] w-full"
          />
          <button className="flex md:hidden bg-yellow-100 mt-[40px] gap-2 rounded-full px-4 text-black-100  cursor-pointer items-center h-[48px] font-medium text-sm group">
            Start your free trial
            <div className="bg-black-100 text-yellow-100 p-3 rounded-full transform rotate-[-40deg] transition-transform duration-300 group-hover:rotate-0">
              <FaArrowRight />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
