'use client';
import React from 'react';
import ContentCards from '../cards/ContentCards';

const data = [
  {
    sku: 'Competitor Alpha',
    price: '20 % off holiday salees',
    threatLevel: 'Low',
    suggestedAction: 'Hold',
  },
  {
    sku: 'Competitor Alpha',
    price: '20 % off holiday salees',
    threatLevel: 'Medium',
    suggestedAction: 'Promote',
  },
  {
    sku: 'Competitor Alpha',
    price: '20 % off holiday salees',
    threatLevel: 'High',
    suggestedAction: 'Adjust Price',
  },
  {
    sku: 'Competitor Alpha',
    price: '20 % off holiday salees',
    threatLevel: 'Low',
    suggestedAction: 'Hold',
  },
];

const getThreatColor = (level) => {
  switch (level) {
    case 'Low':
      return 'bg-[#EDFCF2] text-[#50C878]';
    case 'Medium':
      return 'bg-[#FEFDF0] text-[#FFC107]';
    case 'High':
      return 'bg-[#FEF2F2] text-[#FF4D4F]';
    default:
      return '';
  }
};
export default function FrictionPoints() {
  return (
    <div className="manrope flex flex-col gap-4 w-full max-w-full">
      <h3 className="text-black-100 font-medium text-xl">
        Friction Points
      </h3>
        <table className="min-w-full border rounded-md border-[#F1F1F1] divide-y divide-[#F1F1F1]">
          <thead className="bg-[#F9F9F9] rounded-md">
            <tr className="rounded-md h-[56px]  ">
              <th className="p-5 text-left text-sm font-medium text-black-200">
                Issue
              </th>
              <th className="p-3 text-left text-sm font-medium text-black-200">
                Location
              </th>
              <th className="p-3 text-left text-sm font-medium text-black-200">
                Frequency
              </th>
              <th className="p-3 text-left text-sm font-medium text-black-200">
                Threat Score
              </th>
              <th className="p-3 text-left text-sm font-medium text-black-200">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y-1 divide-[#F1F1F1]  bg-white">
            {data.map((item, idx) => (
              <tr key={idx} className="bg-white transition">
                <td className="p-5 font-medium text-black-300">{item.sku}</td>
                <td className="p-5 font-medium text-black-300">
                  Checkout page
                </td>
                <td className="p-5 font-medium text-black-300">45%</td>
                <td className="p-5 font-medium text-black-300">
                  <span
                    className={`px-10 py-3 rounded-full text-sm font-medium ${getThreatColor(
                      item.threatLevel
                    )}`}
                  >
                    {item.threatLevel}
                  </span>
                </td>
                <td className="p-5 font-medium text-black-200">
                  <button className="px-10 py-2 rounded-lg border-[1px] border-lemon-100">
                    Action
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
}
