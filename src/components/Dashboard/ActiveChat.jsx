'use client';
import React from 'react';
import ContentCards from '../cards/ContentCards';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

const data = [
  { name: 'View', value: 2313 },
  { name: 'Cart', value: 1800 },
  { name: 'Checkout', value: 1700 },
  { name: 'Purchase', value: 1600 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black text-white px-2 py-1 rounded shadow text-sm">
        {payload[0].value.toLocaleString()}
      </div>
    );
  }
  return null;
};
export default function ActiveChat() {
  return (
    <ContentCards>
      <h3>Activity Funnel</h3>
      <div className="w-full h-[400px] pt-12">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) =>
                value >= 1000 ? `${value / 1000}k` : value
              }
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: 'transparent' }}
            />
            <Bar dataKey="value" radius={[8, 8, 0, 0]}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={index === 0 ? '#00FF00' : '#D3D3D3'}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ContentCards>
  );
}
