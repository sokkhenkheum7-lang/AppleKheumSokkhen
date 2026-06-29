import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import PromoBanner from "../components/home/PromoBanner";
import ProductGrid from "../components/home/ProductGrid";
import { AppleTV } from "../components/home/AppleTV";
import Footer from "../components/layout/Footer";

import iphonelineup from "../assets/banner/iphonelineup.jpg";
import collegeMacIpad from "../assets/banner/college-mac-ipad.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] antialiased">
      <Navbar />

      <Hero />

      <main className="mt-3 flex flex-col gap-3">
        <PromoBanner
          title="iPhone"
          description="Meet the latest iPhone lineup."
          image={iphonelineup}
          link1="Learn more"
          link2="Shop iPhone"
        />

        <PromoBanner
          title="Apple for College"
          description="Mac and iPad. Major in any field."
          image={collegeMacIpad}
          link1="Learn more"
        />

        <ProductGrid />

        <AppleTV />
      </main>

      <Footer />
    </div>
  );
}