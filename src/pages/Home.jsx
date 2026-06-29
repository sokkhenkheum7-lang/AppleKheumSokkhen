import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import PromoBanner from "../components/home/PromoBanner";
import { ProductGrid } from "../components/home/ProductGrid";
import { AppleTV } from "../components/home/AppleTV";
import Footer from "../components/layout/Footer";

// Import images from assets
import iphoneLineup from "../assets/banner/iphone-lineup.png";
import collegeMacIpad from "../assets/banner/college-mac-ipad.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] font-sans antialiased text-[#1d1d1f]">
      <Navbar />

      <Hero />

      <main className="flex flex-col gap-4 mt-3">
        <PromoBanner
          title="iPhone"
          description="Meet the latest iPhone lineup."
          image={iphoneLineup}
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