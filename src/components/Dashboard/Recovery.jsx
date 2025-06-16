'use client';
import React, { useEffect, useState } from 'react';
import ContentCards from '../cards/ContentCards';
import Progressbar from './Progressbar';

export default function Recovery() {
  const currentRecoveryRate = 48;
  const potentialRecoveryRate = 60;

  return (
    <div className="flex flex-col gap-3 manrope">
      <h3 className="text-xl font-medium text-black-100">AI Recovery Score</h3>
      <ContentCards>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-7 w-full">
            {/* Current Recovery Rate */}
            <div className="flex flex-col gap-3">
              <h3 className="text-black-100 font-medium">
                Current Recovery Rate
              </h3>
              <div className="flex w-full flex-col gap-2">
                <label
                  htmlFor="file"
                  className="text-3xl font-medium flex items-center gap-2"
                >
                  {currentRecoveryRate}%
                  <span className="text-sm text-[#00000099]">
                    of abandoned carts
                  </span>
                </label>
                <Progressbar target={currentRecoveryRate} />
              </div>
            </div>

            {/* Potential Recovery Rate */}
            <div className="flex flex-col gap-3">
              <h3 className="text-black-100 font-medium">
                Potential Recovery Rate
              </h3>
              <label
                htmlFor="file"
                className="text-3xl font-medium flex items-center gap-2"
              >
                {potentialRecoveryRate}%
                <span className="text-sm text-[#00000099]">
                  of abandoned carts
                </span>
              </label>
              <div className="flex w-full flex-col gap-2">
                <Progressbar target={potentialRecoveryRate} />
              </div>
            </div>
          </div>

          {/* Placeholder section */}
          <div className="w-full manrope flex flex-col justify-between">
            <div className="flex gap-3 flex-col">
              <h3 className="text-black-100 text-lg font-medium">
                Recommended Campaign
              </h3>
              <div className="flex flex-col gap-2">
                <p className="text-black-100 text-sm">
                  10% Off First Purchase Email
                </p>
                <p className="text-[#00000099]">
                  Target at first-time visitors who abandoned carts with items
                  over $50
                </p>
                <span className="text-[#AE8905]">68% likely to convert</span>
              </div>
            </div>
            <div className="flex w-full gap-4 mt-4 md:mt-0">
              <button className="font-medium text-sm py-2 cursor-pointer rounded-lg bg-lemon-200 w-full">
                Activate Campaign
              </button>
              <button className="font-medium text-sm py-2 cursor-pointer rounded-lg border-[1px] border-gray-500 w-full">
                Customize
              </button>
            </div>
          </div>
        </div>
      </ContentCards>
    </div>
  );
}
