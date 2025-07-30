import React from 'react';
import ContentCards from '../cards/ContentCards';
import HeadIcons from '../../../public/icons/HeadIcons';
import Star from '../../../public/icons/Star';

export default function ProductPerformance() {
  return (
    <div className="manrope flex flex-col gap-4 w-full max-w-full">
      <h3 className="text-black-100 font-medium text-xl">
        Product Performance
      </h3>
      <div className="grid grid-cols-2 gap-6">
        <ContentCards>
          <div className="flex gap-6">
            <HeadIcons />
            <div className="flex flex-col gap-3">
              <h3 className="font-medium text-black-100">Premium Headphones</h3>
              <div className="flex gap-2">
                <Star />
                <h3 className="text-xs text-gray-200">4.5</h3>
              </div>
            </div>
          </div>
          <div className="flex mt-4 gap-2">
            <div className="bg-[#EDFCF2] rounded-full w-[120px] py-2 text-green-100 text-xs px-3">
              Great Sound
            </div>
            <div className="bg-[#EDFCF2] rounded-full w-[120px] py-2 text-green-100 text-xs px-3">
              Great Sound
            </div>
            <div className="bg-[#EDFCF2] rounded-full w-[120px] py-2 text-green-100 text-xs px-3">
              Great Sound
            </div>
          </div>
          <h3 className="text-gray-200  mt-4 text-xs">
            Customers love the sound quality and comfort , but some find the
            price point too high for the features offered
          </h3>
        </ContentCards>
        <ContentCards>
          <div className="flex gap-6">
            <HeadIcons />
            <div className="flex flex-col gap-3">
              <h3 className="font-medium text-black-100">Premium Headphones</h3>
              <div className="flex gap-2">
                <Star />
                <h3 className="text-xs text-gray-200">4.5</h3>
              </div>
            </div>
          </div>
          <div className="flex mt-4 gap-2">
            <div className="bg-[#EDFCF2] rounded-full w-[120px] py-2 text-green-100 text-xs px-3">
              Great Sound
            </div>
            <div className="bg-[#EDFCF2] rounded-full w-[120px] py-2 text-green-100 text-xs px-3">
              Great Sound
            </div>
            <div className="bg-[#EDFCF2] rounded-full w-[120px] py-2 text-green-100 text-xs px-3">
              Great Sound
            </div>
          </div>
          <h3 className="text-gray-200  mt-4 text-xs">
            Customers love the sound quality and comfort , but some find the
            price point too high for the features offered
          </h3>
        </ContentCards>
      </div>
    </div>
  );
}
