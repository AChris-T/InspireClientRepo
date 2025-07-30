'use client';
import React, { useState } from 'react';
import SmallCards from '../cards/SmallCards';
import Graph from '../../../public/icons/Graph';
import HandClick from '../../../public/icons/HandClick';
import WarningIcon from '../../../public/icons/WarningIcon';

const CardData = [
  {
    id: '1',
    textColor: 'text-black-100',
    bgColor: 'bg-lemon-200',
    icon: <Graph />,
    topic: 'Active Threats',
    price: '28%',
  },
  {
    id: '2',
    textColor: 'text-white',
    bgColor: 'bg-black-200',
    icon: <HandClick />,
    topic: 'Competitor’s Actions',
    percentage: '28%',
    price: '700',
  },
  {
    id: '3',
    textColor: 'text-black-100',
    bgColor: 'bg-lemon-400',
    icon: <WarningIcon />,
    topic: 'Response Rate',
    percentage: '28%',
    price: '$ 7000',
  },
];

export default function CommandCards() {
  const [status, setStatus] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <div className="flex w-full flex-col md:flex-row gap-5">
      {CardData.map((item) => (
        <SmallCards
          status={status}
          icon={item.icon}
          key={item.id}
          textColor={item.textColor}
          backgroundColor={item.bgColor}
          price={item.price}
          topic={item.topic}
          percentage={item.percentage}
          show={show}
        />
      ))}
    </div>
  );
}
