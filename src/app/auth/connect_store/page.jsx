'use client';
import { useConnectShopifyQuery } from '@/redux/DashboardApi';
import React from 'react';

export default function page() {
  const { data, isloading, error } = useConnectShopifyQuery();
  console.log(data);
  return (
    <div className="text-white flex flex-col items-center justify-center ">
      page
    </div>
  );
}
