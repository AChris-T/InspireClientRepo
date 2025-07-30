import React from 'react';
import ContentCards from '../cards/ContentCards';
import BarData from '../../../public/icons/BarData';

export default function SmartSuggestions() {
  return (
    <div className="manrope flex flex-col gap-4 w-full max-w-full">
      <h3 className="text-black-100 font-medium text-xl">Smart Suggestions</h3>
      <ContentCards>
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-black-100">
            Apply 10% Discount to Premium Tier
          </h3>
          <div>
            <span className="text-lemon-100 bg-[#A9C7110D] text-xs px-4 py-2 rounded-full">
              Market recon
            </span>
            <span className="text-lemon-100 bg-[#A9C7110D] text-xs px-4 py-2 rounded-full">
              Voice pulse
            </span>
          </div>
          <h3 className="text-[#00000099] text-xs">
            Competitor launched a 15% promotion for similar service tier.
            Customer sentiment analysis shows 12% decrease in satisfaction with
            current pricing model. Strategic discount will maintain competitive
            edge while preserving margin.
          </h3>
          <div className="flex items-center justify-between">
            <div className="flex gap-4 items-center">
              <BarData />
              <h3 className="text-black-200 font-medium text-sm">
                Opportunity Confidence
              </h3>
            </div>
          </div>
          <div className="gap-2 flex ">
            <button className="bg-lemon-100 text-xs h-[30px] rounded-lg w-full">
              Apply
            </button>
            <button className="border-[1px] text-xs h-[30px] rounded-lg w-full border-gray-300">
              View Logic
            </button>
          </div>
        </div>
      </ContentCards>
    </div>
  );
}
