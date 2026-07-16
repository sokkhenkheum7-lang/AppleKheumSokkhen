import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import PromoBanner from "../components/home/PromoBanner";
import ProductsGrid from "../components/home/TempProductsGrid";
import AppleTV from "../components/home/AppleTV";
import Footer from "../components/layout/Footer";
import iphonelineup from "../assets/banner/iphonelineup.jpg";
import collegeMacIpad from "../assets/banner/college-mac-ipad.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#1d1d1f] antialiased text-[17px] sm:text-[19px] font-sans selection:bg-neutral-200">
      <Navbar />

      <Hero />

      {/* Main stacked layout utilizing standard 12px responsive spacing */}
      <main className="mt-3 flex flex-col gap-3">
        {/* iPhone Full Width Section */}
        <PromoBanner
          title="iPhone 17"
          description="Magichromatic."
          image={iphonelineup}
          link1="Learn more"
          link2="Buy"
        />

        {/* Apple for College Full Width Section */}
        <PromoBanner
          title="MacBook Air"
          description="Now supercharged with M5."
          image={collegeMacIpad}
          link1="Learn more"
          link2="Buy"
        />
        
        {/* Secondary Promo Display / Product Matrix Grid */}
        <ProductsGrid />
      </main>

      {/* Media & TV+ Entertainment Showcase Slider */}
      <div className="mt-3">
        <AppleTV />
      </div>

      <Footer />
    </div>
  );
}