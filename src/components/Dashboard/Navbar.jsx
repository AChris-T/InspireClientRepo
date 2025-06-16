import React from 'react';
import SideClose from '../../../public/icons/SideClose';
import SearchIcon from '../../../public/icons/SearchIcon';
import Notification from '../../../public/icons/Notification';
import user from '../../../public/images/user.jpg';

import Image from 'next/image';
import ArrowDownIcon from '../../../public/icons/ArrowDownIcon';

export default function Navbar() {
  return (
    <div className="h-[64px] inter border-[1px] border-gray-300 w-full flex justify-between px-3 items-center  gap-2">
      <div className="flex items-center gap-2">
        <div className="md:hidden flex items-center h-full z-50">
          <button>
            <SideClose />
          </button>
        </div>{' '}
        <div className="flex items-center gap-10 ">
          <h3>OverView</h3>
          <div className="w-[371px] border-[1px] rounded-lg px-3 border-gray-300 items-center hidden md:flex h-[40px]">
            <SearchIcon />
            <input
              className="w-full h-full px-3 focus:outline-none text-gray-200"
              placeholder="Global Search"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Notification />
        <div className="flex items-center">
          <Image
            src={user}
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
          <ArrowDownIcon />
        </div>
      </div>
    </div>
  );
}
