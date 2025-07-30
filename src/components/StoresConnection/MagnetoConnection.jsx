'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../UI/Modal';
import Image from 'next/image';
import mangImage from '../../../public/images/magn.png';

export default function MagnetoConnection() {
  return (
    <div>
      <div className="border-2 flex md:flex-row flex-col items-start w-full md:w-[512px] justify-between md:items-center gap-5  border-gray-200 rounded-[20px] py-4 px-5 text-white">
        <div className="flex gap-6 items-center">
          <Image
            src={mangImage}
            alt="mangImage"
            width={40}
            height={40}
            className="object-cover"
          />
          <div>
            <h3 className="font-bold text-xl">Magento</h3>
            <h3 className="text-gray-200 text-sm">Instant one click connect</h3>
          </div>
        </div>
        <button
          className="bg-lemon-100 cursor-pointer text-sm rounded-lg font-medium text-black px-6 py-2"
          onClick={() => setModalOpen(true)}
        >
          Connect Now
        </button>
      </div>
    </div>
  );
}
