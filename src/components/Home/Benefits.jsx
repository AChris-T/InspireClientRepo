import Image from 'next/image';
import React from 'react';
import edge from '../../../public/images/Bar.png';
import user from '../../../public/images/plug.png';
import refresh from '../../../public/images/Refresh.png';
import frame from '../../../public/images/Frame.png';
import framechat from '../../../public/images/FrameChat.png';
import frametools from '../../../public/images/Frametools.png';
import frameflow from '../../../public/images/Frameflow.png';
import framedash from '../../../public/images/Framedash.png';
import guild from '../../../public/images/guild.png';
import recov from '../../../public/images/fly.png';

export default function Benefits() {
  return (
    <div className="px-3 space gap-5 lg:px-[121px] flex  flex-col  justify-between">
      <h3 className="text-2xl uppercase md:text-[58px] text-[#CACACE]">
        Key Benefits{' '}
      </h3>
      <div className="flex flex-col ">
        <div className="grid  grid-cols-1 md:grid-cols-3 ">
          <div className="border-[#1C1C21] border-l-[1px] border-y-[1px] flex flex-col gap-8 rounded-tl-lg-2xl px-6 py-5">
            <Image
              src={edge}
              alt=""
              className="w-[71x] h-[79px] object-cover"
            />
            <div className="flex flex-col gap-3">
              <h3 className="text-xl md:text-2xl font-medium">
                Real-Time Insights{' '}
              </h3>
              <p className="text-[#8A8A8A] text-sm">
                Understand why customers leave and how to bring them back{' '}
              </p>
            </div>
          </div>
          <div className="border-[#1C1C21] border-y-[1px] flex flex-col gap-8  px-6 py-5">
            <Image
              src={user}
              alt=""
              className="w-[71x] h-[79px] object-cover"
            />
            <div className="flex flex-col gap-3">
              <h3 className="text-xl md:text-2xl font-medium">Plug & Play </h3>
              <p className="text-[#8A8A8A] text-sm">
                Fast setup with Shopify, WooCommerce, and more.{' '}
              </p>
            </div>
          </div>
          <div className="border-[#1C1C21] border-r-[1px] border-y-[1px] flex flex-col gap-8 rounded-tr-2xl px-6 py-5">
            <Image
              src={refresh}
              alt=""
              className="w-[71x] h-[79px] object-cover"
            />
            <div className="flex flex-col gap-3">
              <h3 className="text-xl md:text-2xl font-medium">
                Win Back Revenue{' '}
              </h3>
              <p className="text-[#8A8A8A] text-sm">
                Boost cart recovery rates up to 35% using AI-optimized
                messaging.{' '}
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2 w-full">
          <div className="border-[#1C1C21]  border-b-[1px] flex flex-col gap-8  px-6 py-5">
            <Image
              src={guild}
              alt=""
              className="w-[71x] h-[79px] object-cover"
            />
            <div className="flex flex-col gap-3">
              <h3 className="text-xl md:text-2xl font-medium">
                Ethical by Design{' '}
              </h3>
              <p className="text-[#8A8A8A] text-sm">
                GDPR-ready, privacy-conscious AI tools built for trust.{' '}
              </p>
            </div>
          </div>
          <div className="border-[#1C1C21] border-l-[1px] border-b-[1px] flex flex-col gap-8  px-6 py-5">
            <Image
              src={recov}
              alt=""
              className="w-[71x] h-[79px] object-cover"
            />
            <div className="flex flex-col gap-3">
              <h3 className="text-xl md:text-2xl font-medium">
                Beyond the Cart{' '}
              </h3>
              <p className="text-[#8A8A8A] text-sm">
                Every recovery insight becomes a stepping stone for bigger
                strategic growth.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
