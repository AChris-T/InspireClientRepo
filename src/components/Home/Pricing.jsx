'use client';
import React, { useState } from 'react';
import ArrowCheck from '../../../public/icons/ArrowCheck';

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true);

  const plans = {
    free: { monthly: 0, yearly: 0 },
    premium: { monthly: 970, yearly: 776 },
    standard: { monthly: 406, yearly: 325 },
  };

  const formatPrice = (price) => (price === 0 ? '$0' : `$${price}`);
  return (
    <div className="flex flex-col space justify-center items-center w-full">
      <h3 className="text-2xl uppercase md:text-[58px] text-[#CACACE]">
        Pricing
      </h3>
      <p className="text-[#AFB3CA] px-2 text-center mt-4 md:w-[503px]">
        You can stay on the $56 plan until you have enough active user to
        justify managing their data or you start settings things.
      </p>
      <div className="flex yearly border-[1px] p-2 border-[#454F14] rounded-2xl justify-center my-8">
        <button
          className={`px-4 py-2 space font-medium  ${
            isYearly
              ? 'yearly border-1 rounded-xl border-[#70717A] text-white'
              : ''
          }`}
          onClick={() => setIsYearly(true)}
        >
          Billed yearly -20%
        </button>
        <button
          className={`px-4 py-2  ${
            !isYearly
              ? 'yearly border-1 rounded-xl border-[#70717A] text-white'
              : ''
          }`}
          onClick={() => setIsYearly(false)}
        >
          Billed monthly
        </button>
      </div>
      <div className="flex flex-col items-center md:flex-row w-full px-2 justify-center gap-6">
        {/* Free Plan */}
        <div className="border-[#1C1C21] border-[1px] rounded-4xl py-[51px] px-5 flex flex-col items-center w-full  md:w-80">
          <h3 className="space mb-2 text-[#CAD1E9]">Free plan</h3>
          <p className="text-[56px] text-[#CAD1E9] font-bold">
            {formatPrice(plans.free[isYearly ? 'yearly' : 'monthly'])}
          </p>
          <h2 className=" font-bold text-white">
            <span className="text-sm text-[#CAD1E9] mb-4">
              {!isYearly ? 'Per month' : 'Per year'}
            </span>
          </h2>{' '}
          <ul className="my-4 space-y-5">
            <li className="flex gap-2 items-center">
              <ArrowCheck /> Abandoned cart alerts (limited)
            </li>
            <li className="flex gap-2 items-center">
              <ArrowCheck />
              Access to core recovery modules
            </li>
            <li className="flex gap-2 items-center">
              <ArrowCheck /> Basic insight dashboard
            </li>
            <li className="flex gap-2 items-center">
              <ArrowCheck /> Up to 5 brand websites
            </li>
            <li className="flex gap-2 items-center">
              <ArrowCheck /> AI-driven trigger flows
            </li>
            <li className="flex gap-2 items-center">
              <ArrowCheck /> 1 website integration
            </li>
          </ul>
          <button className="bg-[#262626] rounded-xl px-4 w-full mt-[60px] py-[14px]">
            Request access
          </button>
          <h3 className="font-medium space text-[#AFB3CA] mt-3">
            Get 2 months free when billed yearly
          </h3>
        </div>

        {/* Premium Plan */}
        <div className="border-[#DCFC36] border-[0.5px]  rounded-4xl py-[80px] px-5 flex flex-col items-center w-full md:w-80">
          <h3 className="space mb-2 text-[#CAD1E9]">Premium plan</h3>
          <p className="text-3xl text-[#DCFC36] mb-4">
            {formatPrice(plans.premium[isYearly ? 'yearly' : 'monthly'])}
          </p>
          <h2 className=" font-bold text-white">
            <span className="text-sm text-[#CAD1E9] mb-4">
              {!isYearly ? 'Per month' : 'Per year'}
            </span>
          </h2>
          <ul className="my-4 space-y-5">
            <li className="flex gap-2 items-center">
              <ArrowCheck /> Unlimited cart recovery alerts
            </li>
            <li className="flex gap-2 items-center">
              <ArrowCheck />
              Advanced recovery insights
            </li>
            <li className="flex gap-2 items-center">
              <ArrowCheck /> Email & SMS integrations
            </li>
            <li className="flex gap-2 items-center">
              <ArrowCheck />
              Up to 5 brand websites
            </li>
            <li className="flex gap-2 items-center">
              <ArrowCheck />
              AI-driven trigger flows
            </li>
            <li className="flex gap-2 items-center">
              <ArrowCheck /> Real-time revenue dashboard
            </li>
            <li className="flex gap-2 items-center">
              <ArrowCheck /> Up to 20 websites & apps
            </li>
          </ul>
          <button className="bg-[#262626] rounded-xl px-4 w-full mt-[55px] py-[14px]">
            Request access
          </button>
          <h3 className="font-medium space text-[#AFB3CA] mt-3">
            Get 2 months free when billed yearly
          </h3>
        </div>

        {/* Standard Plan */}
        <div className="border-[#1C1C21] border-[1px] rounded-4xl py-[51px] px-5 flex flex-col items-center w-full  md:w-80">
          <h3 className="space mb-2 text-[#CAD1E9]">Standard plan</h3>
          <p className="text-[56px] text-[#CAD1E9] font-bold">
            {formatPrice(plans.standard[isYearly ? 'yearly' : 'monthly'])}
          </p>
          <h2 className=" font-bold text-white">
            <span className="text-sm text-[#CAD1E9] mb-4">
              {!isYearly ? 'Per month' : 'Per year'}
            </span>
          </h2>
          <ul className="my-4 space-y-5">
            <li className="flex gap-2 items-center">
              <ArrowCheck /> Unlimited cart recovery alerts
            </li>
            <li className="flex gap-2 items-center">
              <ArrowCheck /> Advanced recovery insights
            </li>
            <li className="flex gap-2 items-center">
              <ArrowCheck />
              Email & SMS integrations
            </li>
            <li className="flex gap-2 items-center">
              <ArrowCheck /> Up to 5 brand websites
            </li>
            <li className="flex gap-2 items-center">
              <ArrowCheck /> AI-driven trigger flows
            </li>
            <li className="flex gap-2 items-center">
              <ArrowCheck /> Real-time revenue dashboard
            </li>
            <li className="flex gap-2 items-center">
              <ArrowCheck /> Compliance & audit toolkit
            </li>
          </ul>
          <button className="bg-[#262626] rounded-xl px-4 w-full mt-[35px] py-[14px]">
            Request access
          </button>
          <h3 className="font-medium space text-[#AFB3CA] mt-3">
            Get 2 months free when billed yearly
          </h3>
        </div>
      </div>
    </div>
  );
}
