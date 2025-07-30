import React from 'react';
import ContentCards from '../cards/ContentCards';
import Alert from '../../../public/icons/Alert';

export default function InsightEdge() {
  return (
    <div className="manrope flex flex-col gap-4 w-full max-w-full">
      <h3 className="text-black-100 font-medium text-xl">Your Edge</h3>
      <ContentCards>
        <div className="flex items-center justify-between gap-6">
          <div className="flex  items-center gap-4">
            <Alert />
            <h3 className="text-sm text-black-100">
              Improve packaging for Product B – 38% negative mentions
            </h3>
          </div>
          <div className="flex gap-3 ">
            <button className="bg-lemon-200 px-5 rounded-sm py-1 text-black-100">
              Apply
            </button>
            <button className=" border-[1px] px-5 py-1 rounded-sm border-gray-300">
              Ignore
            </button>
          </div>
        </div>
      </ContentCards>
    </div>
  );
}
