import React from 'react';
import ContentCards from '../cards/ContentCards';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 3000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 3800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 2800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 1390,
    pv: 2800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 1490,
    pv: 2300,
    amt: 2100,
  },
];
export default function MarketOverview() {
  return (
    <ContentCards>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col md:flex-row gap-10 justify-between w-full">
          <select className=" focus:outline-none">
            <option>Price trends over time for product X</option>
            <option>Price trends over time for product X</option>
            <option>Price trends over time for product X</option>
            <option>Price trends over time for product X</option>
          </select>
          <div className="flex gap-3">
            <span className="bg-lemon-100 text-xs flex justify-center items-center text-black-100 px-2 rounded-md">
              Last 7 days
            </span>
            <span className="border-[1px] px-2 text-xs flex justify-center items-center text-black-100 rounded-md border-[#F1F1F1]">
              This month
            </span>
            <span className="border-[1px] px-2 text-xs flex justify-center items-center text-black-100 rounded-md border-[#F1F1F1]">
              Years
            </span>
          </div>
        </div>

        <div className="w-full h-[300px] md:h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="95%" stopColor="#E5E5E5" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#DCFC3680" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#DCFC3680" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" color="#A2A3A5" />
              <YAxis />
              <CartesianGrid
                vertical={false} // Show vertical grid lines (X-axis direction)
                horizontal={true} // Hide horizontal grid lines (Y-axis direction)
              />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#E5E5E5"
                fillOpacity={5}
                fill="url(#colorUv)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="pv"
                stroke="#70FA29"
                fillOpacity={1}
                fill="url(#colorPv)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </ContentCards>
  );
}
