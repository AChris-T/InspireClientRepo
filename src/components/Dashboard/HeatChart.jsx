'use client';
import React from 'react';
import { ResponsiveHeatMap } from '@nivo/heatmap';
import ContentCards from '../cards/ContentCards';

const data = [
  {
    id: 'Scroll',
    data: [
      { x: 'Home', y: 80 },
      { x: 'Product details', y: 80 },
      { x: 'Confirmation', y: 90 },
      { x: 'Checkout', y: 90 },
    ],
  },
  {
    id: 'Hover',
    data: [
      { x: 'Home', y: 90 },
      { x: 'Product details', y: 80 },
      { x: 'Confirmation', y: 80 },
      { x: 'Checkout', y: 90 },
    ],
  },
  {
    id: 'Dwell',
    data: [
      { x: 'Home', y: 90 },
      { x: 'Product details', y: 80 },
      { x: 'Confirmation', y: 90 },
      { x: 'Checkout', y: 80 },
    ],
  },
  {
    id: 'Click',
    data: [
      { x: 'Home', y: 90 },
      { x: 'Product details', y: 80 },
      { x: 'Confirmation', y: 90 },
      { x: 'Checkout', y: 90 },
    ],
  },
];

export default function HeatChart() {
  return (
    <ContentCards>
      <h3>Activity Funnel</h3>
      <div className="w-full h-[400px] min-h-[400px] ">
        <ResponsiveHeatMap
          data={data}
          keys={['Home', 'Product details', 'Confirmation', 'Checkout']}
          indexBy="id"
          margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
          axisTop={{
            orient: 'top',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legendPosition: 'middle',
            legendOffset: -40,
          }}
          axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Interaction Types',
            legendPosition: 'middle',
            legendOffset: -80,
          }}
          axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
          }}
          axisRight={{
            orient: 'right',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
          }}
          colors={{
            type: 'sequential',
            scheme: 'greens',
          }}
          cellOpacity={1}
          cellBorderColor={{ from: 'color', modifiers: [['darker', 0.4]] }}
          labelTextColor={{ from: 'color', modifiers: [['darker', 1.8]] }}
          animate={true}
          motionConfig="gentle"
          hoverTarget="cell"
          cellHoverOthersOpacity={0.25}
          tooltip={({ xKey, yKey, value }) => (
            <div className="bg-white p-2 border border-gray-200 rounded shadow-lg">
              <strong>{yKey}</strong> on <strong>{xKey}</strong>:{' '}
              <strong>{value}%</strong>
            </div>
          )}
        />
      </div>
    </ContentCards>
  );
}
