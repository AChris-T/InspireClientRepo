import Image from 'next/image';
import React from 'react';
import edge from '../../../public/images/edge.png';
import user from '../../../public/images/user.png';
import frame from '../../../public/images/Frame.png';
import framechat from '../../../public/images/FrameChat.png';
import frametools from '../../../public/images/Frametools.png';
import frameflow from '../../../public/images/Frameflow.png';
import framedash from '../../../public/images/Framedash.png';
import share from '../../../public/images/share.png';
import recov from '../../../public/images/recov.png';

export default function Solutions() {
  return (
    <div className="px-3 space gap-5 lg:px-[121px] flex  flex-col  justify-between">
      <h3 className="text-2xl uppercase md:text-[58px] text-[#CACACE]">
        Featured Solutions
      </h3>
      <div className="flex flex-col gap-2">
        <div className="grid gap-2 grid-cols-1 md:grid-cols-3 ">
          <div className="border-[#3c3e35] border-[1px] flex flex-col gap-8 rounded-2xl px-6 py-5">
            <Image
              src={edge}
              alt=""
              className="w-[71x] h-[79px] object-cover"
            />
            <div className="flex flex-col gap-3">
              <h3 className="text-xl md:text-2xl font-medium">
                InspireEdge AI Platform 
              </h3>
              <p className="text-[#8A8A8A] text-sm">
                Cart Recovery & Conversion Optimization
              </p>
            </div>
            <Image src={frame} alt="" />
          </div>
          <div className="border-[#3c3e35] border-[1px] flex flex-col gap-8 rounded-2xl px-6 py-5">
            <Image
              src={user}
              alt=""
              className="w-[71x] h-[79px] object-cover"
            />
            <div className="flex flex-col gap-3">
              <h3 className="text-xl md:text-2xl font-medium">
                Abandonment Insights Engine {' '}
              </h3>
              <p className="text-[#8A8A8A] text-sm">
                Behavior + friction analysis{' '}
              </p>
            </div>
            <Image src={framechat} alt="" />
          </div>
          <div className="border-[#3c3e35] border-[1px] flex flex-col gap-8 rounded-2xl px-6 py-5">
            <Image
              src={edge}
              alt=""
              className="w-[71x] h-[79px] object-cover"
            />
            <div className="flex flex-col gap-3">
              <h3 className="text-xl md:text-2xl font-medium">
                Compliance Toolkit {' '}
              </h3>
              <p className="text-[#8A8A8A] text-sm">
                Built-in audit, data, and consent control{' '}
              </p>
            </div>
            <Image src={frametools} alt="" />
          </div>
        </div>
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2 w-full">
          <div className="border-[#3c3e35] border-[1px] flex flex-col gap-8 rounded-2xl px-6 py-5">
            <Image
              src={share}
              alt=""
              className="w-[71x] h-[79px] object-cover"
            />
            <div className="flex flex-col gap-3">
              <h3 className="text-xl md:text-2xl font-medium">
                SmartFlow Recovery Triggers {' '}
              </h3>
              <p className="text-[#8A8A8A] text-sm">
                Multi-channel flows (email, SMS, WhatsApp){' '}
              </p>
            </div>
            <Image src={frameflow} alt="" />
          </div>
          <div className="border-[#3c3e35] border-[1px] flex flex-col gap-8 rounded-2xl px-6 py-5">
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
                Real-time conversion & ROI metrics{' '}
              </p>
            </div>
            <Image src={framedash} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
