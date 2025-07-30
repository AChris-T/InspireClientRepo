import React from 'react';
import ContentCards from '../cards/ContentCards';
import Alert from '../../../public/icons/Alert';

export default function YourEdge() {
  return (
    <div className="manrope flex flex-col gap-4 w-full max-w-full">
      <h3 className="text-black-100 font-medium text-xl">Your Edge</h3>
      <ContentCards>
        <div className="flex gap-6">
          <Alert />
          <div className="flex flex-col gap-4">
            <h3 className="text-sm text-black-100">
              Competitor ABC dropped prices on 3 products and launched a
              Facebook ad campaign. Threat score: High
            </h3>
            <div className="flex gap-3 ">
              <button className="bg-lemon-200 px-2 rounded-sm py-1 text-black-100">
                Send to Engage X
              </button>
              <button className=" border-[1px] px-5 py-1 rounded-sm border-gray-300">
                Take Action
              </button>
            </div>
          </div>
        </div>
      </ContentCards>
    </div>
  );
}
