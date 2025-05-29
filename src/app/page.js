import Benefits from '@/components/Home/Benefits';
import Blog from '@/components/Home/Blog';
import FAQ from '@/components/Home/FAQ';
import Footer from '@/components/Home/Footer';
import HeroSection from '@/components/Home/HeroSection';
import Introduction from '@/components/Home/Introduction';
import Navbar from '@/components/Home/Navbar';
import Patners from '@/components/Home/Patners';
import Pricing from '@/components/Home/Pricing';
import Solutions from '@/components/Home/Solutions';
import Start from '@/components/Home/Start';
import Testimonials from '@/components/Home/Testimonials';

export default function Home() {
  return (
    <div className="bg-black-100 h-full text-white ">
      <div className=" py-3 px-3 lg:px-[141px]">
        <Navbar />
      </div>
      <div className="flex flex-col gap-16 ">
        <HeroSection />
        <Patners />
        <Introduction />
        <Solutions />
        <Benefits />
        <Pricing />
        <Blog />
        <Testimonials />
        <FAQ />
        <Start />
        <Footer />
      </div>
    </div>
  );
}
