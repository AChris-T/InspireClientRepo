'use client';
import React, { useState } from 'react';

const data = [
  {
    sku: 'SKU-123',
    price: '$49.99',
    marketAvgPrice: '$45.00',
    priceGap: '$4.99',
    threatLevel: 'Low',
    suggestedAction: 'Hold',
  },
  {
    sku: 'SKU-123',
    price: '$49.99',
    marketAvgPrice: '$45.00',
    priceGap: '$4.99',
    threatLevel: 'Medium',
    suggestedAction: 'Promote',
  },
  {
    sku: 'SKU-123',
    price: '$49.99',
    marketAvgPrice: '$45.00',
    priceGap: '$4.99',
    threatLevel: 'High',
    suggestedAction: 'Adjust Price',
  },
  {
    sku: 'SKU-123',
    price: '$49.99',
    marketAvgPrice: '$45.00',
    priceGap: '$4.99',
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
export default function ProductTable() {
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
              <th className="p-3 text-left">
                <input
                  type="checkbox"
                  checked={selected.length === data.length}
                  onChange={toggleSelectAll}
                  className="form-checkbox h-4 w-4 text-blue-600"
                />
              </th>
              <th className="p-3 text-left text-sm font-medium text-black-200">
                SKU
              </th>
              <th className="p-3 text-left text-sm font-medium text-black-200">
                Price
              </th>
              <th className="p-3 text-left text-sm font-medium text-black-200">
                Market Average Price
              </th>
              <th className="p-3 text-left text-sm font-medium text-black-200">
                Price Gap
              </th>
              <th className="p-3 text-left text-sm font-medium text-black-200">
                Competitive Threat Level
              </th>
              <th className="p-3 text-left text-sm font-medium text-black-200">
                Suggested Action
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
                <td className="py-5 px-3">
                  <input
                    type="checkbox"
                    checked={selected.includes(idx)}
                    onChange={() => toggleRow(idx)}
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                </td>
                <td className="p-3 font-medium text-black-300">{item.sku}</td>
                <td className="p-3 font-medium text-black-300">{item.price}</td>
                <td className="p-3 font-medium text-black-300">
                  {item.marketAvgPrice}
                </td>
                <td className="p-3 font-medium text-black-300">
                  {item.priceGap}
                </td>
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
