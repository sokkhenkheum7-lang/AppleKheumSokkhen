import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import PromoBanner from "../components/home/PromoBanner";
// 1. Capitalize the imported reference variable
import Productsgrid from "../components/home/productsgrid"; 
import { AppleTV } from "../components/home/AppleTV";
import Footer from "../components/layout/Footer";

import iphonelineup from "../assets/banner/iphonelineup.jpg";
import collegeMacIpad from "../assets/banner/college-mac-ipad.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#1d1d1f] antialiased">
      <Navbar />

      <Hero />

      <main className="mt-3 flex flex-col gap-3">
        {/* iPhone Full Width Section */}
        <PromoBanner
          title="iPhone"
          description="Meet the latest iPhone lineup."
          image={iphonelineup}
          link1="Learn more"
          link2="Shop iPhone"
        />

        {/* Apple for College Full Width Section */}
        <PromoBanner
          title="Apple for College"
          description="Mac and iPad. Major in any field."
          image={collegeMacIpad}
          link1="Learn more"
        />
        
        {/* 2. Capitalize the tag here */}
        <Productsgrid />
        
        {/* Apple TV Endless Entertainment Carousel */}
        <AppleTV />
      </main>

      <Footer />
    </div>
  );
}