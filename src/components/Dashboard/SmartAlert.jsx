import React from 'react';
import ContentCards from '../cards/ContentCards';
import DangerIcon from '../../../public/icons/DangerIcon';
import CheckedIcon from '../../../public/icons/CheckedIcon';

export default function SmartAlert() {
  return (
    <div className="manrope flex flex-col gap-5">
      <h3 className="text-black-100 font-medium text-xl">Smart Alerts</h3>
      <div className="w-full border-[1px]   rounded-2xl border-gray-300">
        <div className="flex gap-5 items-center py-5 px-3 border-b-[1px] border-gray-300 ">
          <DangerIcon />
          <h3 className="text-black-100">
            Product X is $12 above market average – high risk of cart
            abandonment
          </h3>
        </div>
        <div className="flex gap-5 items-center py-5 px-4 border-b-[1px] border-gray-300 ">
          <CheckedIcon />
          <h3 className="text-black-100">Product Z is optimally priced</h3>
        </div>
        <div className="flex gap-5 items-center py-5 px-3 border-b-[1px] border-gray-300 ">
          <DangerIcon />
          <h3 className="text-black-100">
            Product X is $12 above market average – high risk of cart
            abandonment
          </h3>
        </div>
      </div>
    </div>
  );
}
