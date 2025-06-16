'use client';
import React, { useEffect, useState } from 'react';
import ArrowUp from '../../../public/icons/ArrowUp';
import ArrowDown from '../../../public/icons/ArrowDown';
import Graph from '../../../public/icons/Graph';
import SmallCards from '@/components/cards/SmallCards';
import WalletIcon from '../../../public/icons/WalletIcon';
import CartIcon from '../../../public/icons/CartIcon';
import Recovery from '@/components/Dashboard/Recovery';
import Reasons from '@/components/Dashboard/Reasons';
import ConnectStore from '@/components/Dashboard/ConnectStore';
import Header from '@/components/Dashboard/Header';

const CardData = [
  {
    id: '1',
    textColor: 'text-black-100',
    bgColor: 'bg-lemon-200',
    icon: <Graph />,
    topic: 'Current Recovery rate',
    percentage: '28%',
    price: '28%',
  },
  {
    id: '2',
    textColor: 'text-white',
    bgColor: 'bg-black-200',
    icon: <CartIcon />,
    topic: 'Abandoned Carts',
    percentage: '28%',
    price: '700',
  },
  {
    id: '3',
    textColor: 'text-black-100',
    bgColor: 'bg-lemon-400',
    icon: <WalletIcon />,
    topic: 'Recoverable Revenue',
    percentage: '28%',
    price: '$ 7000',
  },
];

export default function Dashboard() {
  const [status, setStatus] = useState(false);
  const originalPrice = 20000;
  const price = 3000;

  useEffect(() => {
    const threshold = originalPrice * 0.2;
    if (price < threshold) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, [price, originalPrice]);
  const name = 'john';

  return (
    <div className="flex flex-col gap-7 manrope">
      <Header
        title={`Welcome back ${name}`}
        subText={'See your cart abandonment insights and opportunities'}
      />
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
          />
        ))}
      </div>
      <Recovery />
      <Reasons />
      <ConnectStore />
    </div>
  );
}
