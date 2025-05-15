import Benefits from '@/components/Home/Benefits';
import FAQ from '@/components/Home/FAQ';
import Footer from '@/components/Home/Footer';
import HeroSection from '@/components/Home/HeroSection';
import Introduction from '@/components/Home/Introduction';
import Patners from '@/components/Home/Patners';
import Pricing from '@/components/Home/Pricing';
import Solutions from '@/components/Home/Solutions';
import Start from '@/components/Home/Start';
import Testimonials from '@/components/Home/Testimonials';
import React from 'react';

export default function page() {
  return (
    <div className="flex flex-col gap-16 ">
      <HeroSection />
      <Patners />
      <Introduction />
      <Solutions />
      <Benefits />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Start />
      <Footer />
    </div>
  );
}
