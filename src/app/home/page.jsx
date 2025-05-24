import Benefits from '@/components/Home/Benefits';
import Blog from '@/components/Home/Blog';
import FAQ from '@/components/Home/FAQ';
import Footer from '@/components/Home/Footer';
import HeroSection from '@/components/Home/HeroSection';
import Introduction from '@/components/Home/Introduction';
import Patners from '@/components/Home/Patners';
import Pricing from '@/components/Home/Pricing';
import Solutions from '@/components/Home/Solutions';
import Start from '@/components/Home/Start';
import Testimonials from '@/components/Home/Testimonials';
import SEO from '@/components/SEO';
import React from 'react';

export default function page() {
  return (
    <div>
      <SEO
        title="InspireEdge AI - Smart Cart Recovery & Business Growth Solutions"
        description="Transform abandoned carts into revenue with InspireEdge AI's intelligent recovery solutions. Leverage predictive analytics and ethical AI for smarter business growth."
        type="website"
      />
      <main className="flex flex-col gap-16">
        <section aria-label="Hero Section">
          <HeroSection />
        </section>
        <section aria-label="Partners">
          <Patners />
        </section>
        <section aria-label="Introduction">
          <Introduction />
        </section>
        <section aria-label="Solutions">
          <Solutions />
        </section>
        <section aria-label="Benefits">
          <Benefits />
        </section>
        <section aria-label="Pricing">
          <Pricing />
        </section>
        <section aria-label="Blog">
          <Blog />
        </section>
        <section aria-label="Testimonials">
          <Testimonials />
        </section>
        <section aria-label="FAQ">
          <FAQ />
        </section>
        <section aria-label="Get Started">
          <Start />
        </section>
        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  );
}
