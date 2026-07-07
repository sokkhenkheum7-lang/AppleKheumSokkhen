import React, { useRef, useState, useEffect } from "react";

// Mock data សម្រាប់ categories (រក្សាទុកដដែល ឬប្ដូររូបភាព)
const categories = [
  { name: "Mac", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-mac-nav-202603?wid=400&hei=260&fmt=png-alpha&.v=M1Q3OGxnb1lBaHhqNjZ2OVRXZmx4V2duSGVkdTVncGZYc0RnS1paU3IySCsrUlZaSVRoWVYzU0Qra0FoTmUwNng2bitObzZwQzk4cEorV1dZdzhIazAreDNWYWNLK1lESGRXY25VRzdWVTQ" },
  { name: "iPhone", img: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=120&h=120&q=80" },
  { name: "iPad", img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=120&h=120&q=80" },
  { name: "Apple Watch", img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=120&h=120&q=80" },
  { name: "Apple Vision Pro", img: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=120&h=120&q=80" },
  { name: "AirPods", img: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?auto=format&fit=crop&w=120&h=120&q=80" },
  { name: "AirTag", img: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&w=120&h=120&q=80" },
  { name: "Apple TV 4K", img: "https://images.unsplash.com/photo-1585647347483-22b66260dfff?auto=format&fit=crop&w=120&h=120&q=80" },
  { name: "HomePod", img: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=120&h=120&q=80" },
];

const latestProducts = [
  {
    tag: "",
    title: "iPhone 17 Pro",
    subtitle: "All out Pro.",
    price: "From $1099 or $45.79/mo. for 24 mo.²",
    bgClass: "bg-black text-white",
    img: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=400&h=300&q=80",
  },
  {
    tag: "NEW",
    title: "MacBook Neo",
    subtitle: "The magic of Mac at a surprising price.",
    price: "From $699 or $58.25/mo. for 12 mo.⁴",
    bgClass: "bg-white text-[#1d1d1f] border border-[#e8e8ed]",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&h=300&q=80",
  },
  {
    tag: "",
    title: "iPhone 17e",
    subtitle: "Feature stacked. Value packed.",
    price: "From $599 or $24.95/mo. for 24 mo.⁵",
    bgClass: "bg-white text-[#1d1d1f] border border-[#e8e8ed]",
    img: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=400&h=300&q=80",
  },
];

function Store() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);


  const checkScrollLimits = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScrollLimits);
      // បើកមកភ្លាម check ភ្លាម
      checkScrollLimits();
    }
    return () => {
      if (scrollContainer) scrollContainer.removeEventListener("scroll", checkScrollLimits);
    };
  }, []);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth * 0.6 : clientWidth * 0.6;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] font-sans antialiased pb-24 pt-11">

      {/* 1. Global Announcement Ribbon */}
      <div className="w-full bg-white py-5 text-center text-[14px] tracking-normal ">
        <p className="inline-flex items-center justify-center gap-1 px-4 font-normal text-[#1d1d1f]">
          <span>
            Now you can buy Apple Watch
            <sup className="mx-[1px] text-[9px] font-normal">◊</sup>{" "}
            with education savings.
            <sup className="mx-[1px] text-[9px] font-normal">Δ</sup>
          </span>

          <a
            href="#learn-more"
            className="group ml-0.5 inline-flex items-center gap-0.5 text-[#0066cc] hover:underline"
          >
            Learn more
            <svg
              className="h-3 w-3 text-[#0066cc] transition-transform duration-200 group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <circle cx="12" cy="12" r="10" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v8M8 12h8"
              />
            </svg>
          </a>
        </p>
      </div>

      {/* Main Layout Content */}
      <div className="mx-auto max-w-[1160px] px-6 lg:px-0">

        {/* 2. Page Header Area */}
        <div className="pt-20 pb-10 flex flex-col md:flex-row md:justify-between md:items-baseline gap-4">
          <h1 className="text-[40px] md:text-[48px] font-semibold tracking-tight text-[#1d1d1f] leading-none">
            Store<span className="text-[#6e6e73]">.</span>
          </h1>
          <div className="md:text-right max-w-sm">
            <h2 className="text-[20px] md:text-[24px] font-semibold text-[#6e6e73] leading-tight tracking-tight">
              The best way to buy the <br className="hidden md:block" /> products you love.
            </h2>
            <div className="mt-4 space-y-1.5 text-[14px] font-normal">
              <a href="#specialist" className="text-[#0066cc] hover:underline block group">
                Connect with a Specialist <span className="inline-block transform transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a href="#find-store" className="text-[#0066cc] hover:underline block group">
                Find an Apple Store <span className="inline-block transform transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>
          </div>
        </div>

       
        <div className="relative group/slider mb-20">
          {/* ប៊ូតុងឆ្វេង */}
          {canScrollLeft && (
            <button
              onClick={() => handleScroll("left")}
              className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/80 backdrop-blur border border-[#e8e8ed] shadow-sm text-[#1d1d1f] hover:bg-white transition"
            >
              ‹
            </button>
          )}

          {/* កុងតឺន័រ Slider */}
          <div
            ref={scrollRef}
            className="overflow-x-auto flex gap-8 py-4 scroll-smooth snap-x no-scrollbar"
            style={{ scrollbarWidth: "none" }}
          >
            {categories.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center min-w-[120px] snap-start cursor-pointer group/item">
                <div className="w-[120px] h-[90px] flex items-center justify-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="max-h-[76px] max-w-full object-contain mix-blend-multiply transition-transform duration-300 group-hover/item:scale-105"
                  />
                </div>
                <span className="mt-3 text-[13px] font-semibold tracking-tight text-[#1d1d1f] group-hover/item:text-[#0066cc] transition-colors">
                  {item.name}
                </span>
              </div>
            ))}
          </div>

          {/* ប៊ូតុងស្តាំ */}
          {canScrollRight && (
            <button
              onClick={() => handleScroll("right")}
              className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/80 backdrop-blur border border-[#e8e8ed] shadow-sm text-[#1d1d1f] hover:bg-white transition"
            >
              ›
            </button>
          )}
        </div>

        {/* 4. "The latest" Grid View */}
        <div className="mt-12">
          <h3 className="text-[24px] md:text-[28px] font-semibold tracking-tight text-[#6e6e73]">
            <span className="text-[#1d1d1f]">The latest.</span> Take a look at what’s new, right now.
          </h3>

          <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-5">
            {latestProducts.map((product, idx) => (
              <div
                key={idx}
                className={`rounded-[28px] p-8 flex flex-col justify-between h-[480px] relative overflow-hidden transition-all duration-400 hover:scale-[1.01] shadow-sm hover:shadow-md ${product.bgClass}`}
              >
                <div>
                  {product.tag && (
                    <span className="text-[10px] font-bold text-[#bf4800] uppercase tracking-wider block mb-1">
                      {product.tag}
                    </span>
                  )}
                  <h4 className="text-[24px] md:text-[28px] font-semibold tracking-tight leading-tight">
                    {product.title}
                  </h4>
                  <p className="text-[17px] mt-1.5 opacity-90 font-normal leading-snug max-w-[90%]">
                    {product.subtitle}
                  </p>
                </div>

                {/* រូបភាពផលិតផល កំណត់ឱ្យមាន animation តិចៗ */}
                <div className="w-full h-[220px] flex items-end justify-center mt-auto mb-12 overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="max-w-full max-h-full object-contain transform transition-transform duration-500 hover:scale-102"
                  />
                </div>

                {/* តម្លៃនៅខាងក្រោម */}
                <div className="absolute bottom-6 left-8 right-8">
                  <p className="text-[13px] opacity-80 font-normal tracking-wide">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Store;