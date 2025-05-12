import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

export default function Navbar() {
  return (
    <div className="border flex justify-between items-center border-[#242323ed] border-opacity-10  w-full px-3 md:px-10 py-3 rounded-full">
      <h3 className="sora text-2xl font-bold">InspireEdge</h3>
      <div className="md:flex hidden items-center gap-6">
        <Link href={''} className="font-bold space  underline">
          InspireEdge AI
        </Link>
        <Link href={''} className="font-bold space hover:underline">
          InspireCraft
        </Link>
      </div>
      <button className="bg-yellow-100 gap-2 rounded-full px-4 text-black-100 flex cursor-pointer items-center h-[48px] font-medium text-sm group">
        Contact Us
        <div className="bg-black-100 text-yellow-100 p-3 rounded-full transform rotate-[-40deg] transition-transform duration-300 group-hover:rotate-0">
          <FaArrowRight />
        </div>
      </button>
    </div>
  );
}
