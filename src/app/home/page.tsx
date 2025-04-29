import React from 'react';
import HeroSection from './components/HeroSection';
import WaitlistForm from './components/WaitlistForm';
import FeaturesSection from './components/FeaturesSection';
import FooterSection from './components/FooterSection';

export default function HomePage() {
  return (
    <main className="bg-[#f7fafd] min-h-screen">
      <HeroSection />
      <WaitlistForm />
      <FeaturesSection />
      <FooterSection />
    </main>
  );
}
