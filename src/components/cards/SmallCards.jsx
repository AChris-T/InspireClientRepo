import React from 'react';
import ArrowUp from '../../../public/icons/ArrowUp';
import ArrowDown from '../../../public/icons/ArrowDown';

export default function SmallCards({
  status,
  icon,
  textColor,
  backgroundColor,
  price,
  topic,
  percentage,
}) {
  return (
    <div
      className={`${backgroundColor} w-full  rounded-xl flex justify-between px-5 py-4`}
    >
      <div className={`${textColor}`}>
        <h3 className={`${textColor}`}>{topic}</h3>
        <h3 className="text-3xl font-medium ">{price}</h3>
        <div className="mt-3 text-xs flex items-center gap-2">
          {status ? <ArrowDown /> : <ArrowUp />}
          <h3 className=" flex gap-1">
            <span className={`${status ? 'text-red-100' : 'text-green-100'}  `}>
              -2.1%
            </span>
            Since last week
          </h3>
        </div>
      </div>
      {icon}
    </div>
  );
}
