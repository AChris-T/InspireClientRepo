'use client';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import ContentCards from '../cards/ContentCards';
import Progressbar from './Progressbar';

const chartdata = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
];
const COLORS = ['#F5DE8C', '#70FA29', '#3A3A3A'];

const data = [
  {
    id: 1,
    percentage: 68,
    title: 'High shipping cost',
  },
  {
    id: 2,
    percentage: 60,
    title: 'Long checkout',
  },
  {
    id: 3,
    percentage: 48,
    title: 'Price too high',
  },
  {
    id: 4,
    percentage: 38,
    title: 'Payment issues',
  },
  {
    id: 5,
    percentage: 5,
    title: 'Other reasons',
  },
];
export default function Reasons() {
  const onPieEnter = (_, index) => {
    console.log('Hovering');
  };
  return (
    <ContentCards>
      <div className="flex flex-col md:flex-row gap-6 md:gap-3 w-full h-full">
        <div className="flex-1 flex flex-col gap-4 justify-between min-h-[200px]">
          <h3 className="text-base font-medium text-black-100">
            Top abandonment reasons
          </h3>
          {data.map((item) => (
            <div key={item.id} className="flex flex-col gap-1">
              <div className="flex justify-between text-sm">
                <h3 className="text-[#00000099]">{item.title}</h3>
                <p>{item.percentage}%</p>
              </div>
              <Progressbar target={item.percentage} />
            </div>
          ))}
        </div>

        <div className="flex-1 flex justify-center items-center min-h-[200px]">
          <div className="flex items-center md:items-end flex-col-reverse md:flex-row   gap-5 w-full justify-center">
            <div className="flex md:flex-col flex-row   gap-4">
              <div className="flex gap-1 items-center">
                <div className="w-4 h-4 rounded-full bg-[#191919]"></div>
                <h3 className="text-[#606C82] text-[10px]">Mobile</h3>
              </div>
              <div className="flex gap-1 items-center">
                <div className="w-4 h-4 rounded-full bg-[#70FA29]"></div>
                <h3 className="text-[#606C82] text-[10px]">Tablet</h3>
              </div>
              <div className="flex gap-1 items-center">
                <div className="w-4 h-4 rounded-full bg-[#F5DE8C]"></div>
                <h3 className="text-[#606C82] text-[10px]">Desktop</h3>
              </div>
            </div>
            <div className="chartbox rounded-full">
              <PieChart
                width={240}
                height={240}
                onMouseEnter={onPieEnter}
                className=""
              >
                <Pie
                  data={chartdata}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={10}
                  dataKey="value"
                >
                  {chartdata.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </div>
          </div>
        </div>
      </div>
    </ContentCards>
  );
}
