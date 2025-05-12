import Benefits from '@/components/Home/Benefits';
import HeroSection from '@/components/Home/HeroSection';
import Introduction from '@/components/Home/Introduction';
import Patners from '@/components/Home/Patners';
import Solutions from '@/components/Home/Solutions';
import React from 'react';

export default function page() {
  return (
    <div className="flex flex-col gap-16 ">
      <HeroSection />
      <Patners />
      <Introduction />
      <Solutions />
      <Benefits />
    </div>
  );
}
