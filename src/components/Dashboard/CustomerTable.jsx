'use client';
import React, { useState } from 'react';

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
export default function CustomerTable() {
  const [selected, setSelected] = useState([]);

  const toggleSelectAll = () => {
    if (selected.length === data.length) {
      setSelected([]);
    } else {
      setSelected(data.map((_, i) => i));
    }
  };

  const toggleRow = (index) => {
    setSelected((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  return (
    <div className="manrope">
      <h3 className="text-black-100 font-medium text-xl">
        Product Performance
      </h3>
      <div className="overflow-x-auto mt-5 ">
        <table className="min-w-full border rounded-md border-[#F1F1F1] divide-y divide-[#F1F1F1]">
          <thead className="bg-[#F9F9F9] rounded-md">
            <tr className="rounded-md h-[56px]  ">
              <th className="p-3 text-left text-sm font-medium text-black-200">
                Competitor
              </th>
              <th className="p-3 text-left text-sm font-medium text-black-200">
                Recent Price Changes
              </th>
              <th className="p-3 text-left text-sm font-medium text-black-200">
                Threat Score
              </th>
              <th className="p-3 text-left text-sm font-medium text-black-200">
                New Campaign Detected
              </th>
            </tr>
          </thead>
          <tbody className="divide-y-1 divide-[#F1F1F1]  bg-white">
            {data.map((item, idx) => (
              <tr
                key={idx}
                className={`hover:bg-gray-50 transition ${
                  selected.includes(idx) ? 'bg-blue-50' : ''
                }`}
              >
                <td className="p-3 font-medium text-black-300">{item.sku}</td>
                <td className="p-3 font-medium text-black-300">{item.price}</td>
                <td className="p-3 font-medium text-black-300">
                  <span
                    className={`px-10 py-3 rounded-full text-sm font-medium ${getThreatColor(
                      item.threatLevel
                    )}`}
                  >
                    {item.threatLevel}
                  </span>
                </td>
                <td className="p-3 font-medium text-black-200">
                  {item.suggestedAction}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
