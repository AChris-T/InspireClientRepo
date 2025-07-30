'use client';
import Header from '@/components/Dashboard/Header';
import React from 'react';
import dynamic from 'next/dynamic';
import DownloadIcon from '../../../../public/icons/DownloadIcon';
import InsightCards from '@/components/Dashboard/InsightCards';
import ActiveChat from '@/components/Dashboard/ActiveChat';
import RecoveryScore from '@/components/Dashboard/RecoveryScore';
import FrictionPoints from '@/components/Dashboard/FrictionPoints';
import ProductPerformance from '@/components/Dashboard/ProductPerformance';
import InsightEdge from '@/components/Dashboard/InsightEdge';

const HeatChart = dynamic(() => import('@/components/Dashboard/HeatChart'), {
  ssr: false,
});

export default function page() {
  return (
    <div className="flex flex-col gap-7 manrope">
      <div className="flex justify-between items-center flex-col gap-3 md:flex-row ">
        <Header
          title={'Customers pulse'}
          subText={
            'Listen deeper, respond faster. Capture what customers feel  before it becomes a  risk'
          }
        />
        <button className="border-gray-300 cursor-pointer flex gap-3 items-center border-[1px] px-5 rounded-lg py-2">
          Export Report <DownloadIcon />
        </button>
      </div>
      <InsightCards />
      <div className="flex gap-4 flex-col md:flex-row">
        <div className="flex-1">
          <ActiveChat />
        </div>
        <div className="flex-1">
          <HeatChart />
        </div>
      </div>
      <RecoveryScore />
      <FrictionPoints />
      <ProductPerformance />
      <InsightEdge />
    </div>
  );
}
