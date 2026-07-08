import React, { useRef, useState, useEffect } from "react";

// ==========================================
// Mock Data Configurations
// ==========================================
const categories = [
  { name: "Mac", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-mac-nav-202603?wid=400&hei=260&fmt=png-alpha&.v=M1Q3OGxnb1lBaHhqNjZ2OVRXZmx4V2duSGVkdTVncGZYc0RnS1paU3IySCsrUlZaSVRoWVYzU0Qra0FoTmUwNng2bitObzZwQzk4cEorV1dZdzhIazAreDNWYWNLK1lESGRXY25VRzdWVTQ" },
  { name: "iPhone", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-watch-nav-202509?wid=400&hei=260&fmt=png-alpha&.v=S0tSVzBtSkRkSFFhMm1zS1NmeWtkeUdJZTE2SHMxcG9uUER3YTRFOUZ6ckh5NTJ6cGtEemJOblBHR043ZjFkZzAzOVFHb3N0MkVmS01ZcFh0d1Y4R2k5NGJENldmZ3lMeGxpSDNmeE9hd2s" },
  { name: "iPad", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-ipad-nav-202405?wid=400&hei=260&fmt=png-alpha&.v=dW5XbHI1eDVpd01qWUU4bFRtWGZXNGFLQTJVNnlNQmQrVmRBYnZYei9jckUzelNmMnRxajE0NHhmMWtLazl6eG53M0FRZHBXNTh1U1lFVEtSR2YzTm5qbE56RWRpRFNIRXZvbkd2S0l5dTg" },
  { name: "Apple Watch", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-watch-nav-202509?wid=400&hei=260&fmt=png-alpha&.v=S0tSVzBtSkRkSFFhMm1zS1NmeWtkeUdJZTE2SHMxcG9uUER3YTRFOUZ6ckh5NTJ6cGtEemJOblBHR043ZjFkZzAzOVFHb3N0MkVmS01ZcFh0d1Y4R2k5NGJENldmZ3lMeGxpSDNmeE9hd2s" },
  { name: "Apple Vision Pro", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-vision-pro-nav-202401?wid=400&hei=260&fmt=png-alpha&.v=VzVpanYvTldHb05iVXFhc0xveWRLM25jd0w4dXFwc1hFbWZkNm9IcUR2bytSMWt1ZUNyTGx4SjRKL1pSL0ZDeGpCeVFkSWhuN0RJazJDeHBqaFFac0hlZzcwajlwb1R2dHNlazl1dldSUGQ5RzBLTDk5c25YRG5wR2ZpUlI4RFM" },
  { name: "AirPods", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-airpods-nav-202509?wid=400&hei=260&fmt=png-alpha&.v=Q0Z1bWFqMUpRRnp3T0Y0VWJpdk1yMDhFUStvWHB3SDlDa3VrdUZORWRqeld1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VGZUMjJQZFhhT2thWmkxZjhra3FyZEk" },
  { name: "AirTag", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-airtags-nav-202601?wid=400&hei=260&fmt=png-alpha&.v=Q0Z1bWFqMUpRRnp3T0Y0VWJpdk1yL1FqZ2pobDV2bDUyWU1XVmNnMmx3VFd1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VFg3OVE4VE5ic3VkUXEzS3pERTg2am8" },
  { name: "Apple TV 4K", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=T0wvM1N3YUcxQ09qK0VNRkl1RU1BZFM5WnN0RmVZRmVXQ0FCUWJjbnJDald1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VFZ3YmJrVi9SakQxWUcrYWQwVXc5VTA" },
  { name: "HomePod", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=WVcvamRucHVMMWs5SXZ3bVJ3Q2hpZGR0czFXNWdCUW14eTN2U29pLzNMcld1aTN5QlRYNG5PRjJxc2d1RklXbVM0TjRWdzF2UjRGVEY0c3dBQVZ6VFJmbWU0TjJLamxsdTltNkZVZ1RhbDA" },
  { name: "Accessories", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-accessories-nav-202603?wid=400&hei=260&fmt=png-alpha&.v=QnhsNk96S0o4R1dkN2FveStNM1hwNzZGMHVrNGw2NTM5Vmk2bHZzMXQ3aUlac2ROMkdFNG0rMXdMQ0t2WTVlSFBrcjVFNVdueFRVbVY3TGtiL2RjUWVXQ0tWTWFGNXA2NmlzMmRVQ1l6WmlFMHVWQmxPTEFhTVNvVStGSjlxajM" },
  { name: "Apple Gift Card", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-holiday-giftcards-asit-agc-nav-202111?wid=400&hei=260&fmt=png-alpha&.v=WVcvamRucHVMMWs5SXZ3bVJ3Q2hpWWJZU3c1a04rNW9Zem5ScTRJL25qWnlvS2lBUzZZRytsa2hkcGtRYVFoZnJYVFd2aTZFN3pZenpyR0NkbGY4em93Y2tIU0laK3d5Sk5nc2FZNFVHYkJPaG9jNFJLV2crNENpUkQzZ3ZTOHBSOW02S2NIS2N2ZkNWTVZOSXFRUmln" },
];

const latestProducts = [
  { tag: "", title: "iPhone 17 Pro", subtitle: "All out Pro.", price: "From $1099 or $45.79/mo. for 24 mo.²", bgClass: "bg-black text-white", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-iphone-17-pro-202509?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXQjVOVStZaG1ncWFjNXVUZkZ4anVIYlNab1lJcUZwSFVRK1htYlNmZUtPTG54cStVNU5BQmhzbkxYRGxDWUc3R2RBR0JWVHBRN0NKVm11SFZzeU45T2VCTXFJbjVIbEFUN05pTHFFYldZYzg" 

  },
  { tag: "NEW", title: "MacBook Neo", subtitle: "The magic of Mac at a surprising price.", price: "From $699 or $58.25/mo. for 12 mo.⁴", bgClass: "bg-white text-[#1d1d1f] border border-[#e8e8ed]", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-macbook-neo-202603?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=MjhMcWJ2MGZwbXEwdnBkcUN6ZnhyMENkWWUxVnpsancwa2o0MWNIbE5maHFTRjNxbmh1UnU2R29ibGdpZUFXcy85S3R4M0M3WGhIQVNOK3lBdUI5K1FXa3hqWStLWVR2OTJXWDRleXhWMk1OZnVPWGRXSForVW95dWNpSkZQMzM" 

  },
  { tag: "", title: "iPhone 17e", subtitle: "Feature stacked. Value packed.", price: "From $599 or $24.95/mo. for 24 mo.⁵", bgClass: "bg-white text-[#1d1d1f] border border-[#e8e8ed]", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-iphone-17e-202603?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=UzBXQnlhUWdraTNvNU1Kb3pEQlpXSWR4NURmaFZzeVFCV2YrK0tMRnRIam45S05qekNUdVUwMVFyK1pKaERUd2JGcXNRQnFCV0w3WVRjTExvdm1ic2FLdHJsdDVjbmVudndGelN0a3hvL21IaWV5SG1KWWRSb1RMSkNqUDJYZHY" 

  },
  { tag: "FREE ENGRAVING", title: "AirPods Max 2", subtitle: "New intelligent features. More immersive listening.", price: "$549 or $91.50/mo. for 6 mo.±", bgClass: "bg-white text-[#1d1d1f] border border-[#e8e8ed]", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-airpods-max-202409_GEO_US?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=WlczMnlkejNQakk5eW14MEJjQmdLd0hoakxSaUU2WUtGRGZ1cmhVSERsSFUvdWo0OXUzR2x0Z0haVDFBUVBIV3AwckMxbExydC8yeDhtUjlFVHdKVmx4TFU0OVFoVWdhN0VnWk1QaFFQYVZpZmNYV2ZGcUQ4by8rbTNjSFBvNDE" 
    
  },
  { tag: "", title: "MacBook Pro", subtitle: "Now with M5 Pro, and M5 Max.", price: "From $1999 or $166.58/mo. for 12 mo.²", bgClass: "bg-black text-white", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-macbook-pro-202510?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=MjhMcWJ2MGZwbXEwdnBkcUN6ZnhyMm9DK3hwOFVzTGV2T3V6VkdGOUQ2UnFTRjNxbmh1UnU2R29ibGdpZUFXcy85S3R4M0M3WGhIQVNOK3lBdUI5K2Y4SzF3VVVnM3dRTzBQL1ZyY3gwWHUrMGx1Q25JQkNxd1JGSU5VN3RGS0M" 

  },
  { title: "Apple Watch Series 11", subtitle: "The ultimate way to watch your health", price: "$399 or $33.25/mo. for 12 mo.±", bgClass: "bg-white text-[#1d1d1f] border border-[#e8e8ed]", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-watch-s11-202509?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=QWhYaUFuRS9hTUliZ3N5RWVCV09vdjl0SUx3WU51YXRxeHB6bWVJK2RrWDkvamYzRzRvcFlnajNacmhEOC9BeDE1UUxLT2t0cW42N3FvQzVqaGhrVVJwNWRPNWF1Mm83OEFlanlxWkZGemwrYWpGdS9XeFgvbS9ITnNYOEhYaG4" 

  },
];

const helpCards = [
  { 
    tag: "APPLE SPECIALIST", 
    title: "Shop one-on-one with a Specialist online.", 
    bgClass: "bg-white text-[#1d1d1f] border border-[#e8e8ed]", 
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-specialist-help-202512?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=TkJLQU9OWTZMS1N4dlhoOWl3SEhrUkxnN3NTOHN5WTV1c3NEYkc1TXhDMzcydVEyUlBCcVdrTlBkR2FhK21pbHFmS3YvQ0doSFZENndQR0J4TTRqbjgrNmpqVmh2a0c2MlRXb08ybVRkM0NWOE1zYXkzaFJITUw1Ris0SGh3UVM" 
  },
  { 
    title: "Shop with a Specialist over video.", 
    subtitle: "Choose your next device in a guided, one-way video session.", 
    bgClass: "bg-white text-[#1d1d1f] border border-[#e8e8ed]", 
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-specialist-video-202601?wid=1920&hei=2000&fmt=p-jpg&qlt=95&.v=TkJLQU9OWTZMS1N4dlhoOWl3SEhrYnlpTHAvaU1TZWJjTXg3K2FoelBrYk5sRmNjK1N0dXBDbXowSWF0cVFwZVg5Q3VJVDBEemVlRFFTOGhJM3laNkVJNXhuR1BDU3J2UlY3TmhuYkFSb1RYd1dRYXg5aUxQRkJEcjRSU2FKWGU" 
  },
  { 
    tag:"Today at Apple",
    title: "Explore Apple Intelligence", 
    subtitle: "Come try it for yourself in a free session at the Apple Store.",
    bgClass: "bg-white text-[#1d1d1f] border border-[#e8e8ed]", 
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-taa-ai-202604?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=cFEvalhFakpZVzg4RFZsWktqbXFNYnZ0eGJDYUF3MFBoaDZXSkNFUHdVMGYzUHRVc053YldlK2NuZForb0M1V0tRNjVHZTlIV04vVjZjbEh0Rm5SY3lUYnhvZ1E5cUxEbkpTSXJFc0NYcVU" 
  },
  { 
    tag: "Today at Apple", 
    title: "Join free sessions at the Apple Store.", 
    subtitle: "Learn about the latest features and how to go further with your Apple device.",
    bgClass: "bg-white text-[#1d1d1f] border border-[#e8e8ed]", 
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-taa-202604?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=cFEvalhFakpZVzg4RFZsWktqbXFNWTRVSDFQSG9PTUEyd0dDYzl5b1A1WlNTeEZoVVBncVRqTkNMNS9uNklFcEtYeVk3dW9BYmZDa2xxQitSOWhMaGtGR1RDYlJrb1hnbkovRndCVTNoVHM" 
  },
  { 
    tag: "PERSONAL SETUP", 
    title: "Join free sessions at the Apple Store.", 
    subtitle: "Let us guide your through data trasfer, the latest feature, and more in an online, one-on-one session.",
    bgClass: "bg-white text-[#1d1d1f] border border-[#e8e8ed]", 
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-personal-setup-202408_GEO_US?wid=960&hei=1000&fmt=jpeg&qlt=90&.v=cFhHZjJBWFBWT2pMQnNFR2RGWlEwWlNLRUlsMkFxY1ZMQzZzY0tkenJrbmI1cVh6QzJWMGpQUWdRbS9zcU1Sa1M3UUxhTDY4VmxnT1pqOEpldm1McndYUldRZVYxMHFkRFZrQVZuaWMwSkNUT1Foa1VGN1hndkM5QXFCTUlseGM" 
  },
  { 
    title: "Get expert service and support.", 
    bgClass: "bg-white text-[#1d1d1f] border border-[#e8e8ed]", 
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-genius-202603?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=UjZWNjB3VDZRK09HelFpSjJDWXROT1VoTEZOOTlsOXlzakplYVFmYzJiRWYzUHRVc053YldlK2NuZForb0M1V0tRNjVHZTlIV04vVjZjbEh0Rm5SY3o5YUVOYzBseFQwdWVQRXVkLzUzMzA" 
  },
];

// ==========================================
// Main Store Component
// ==========================================
function Store() {
  const scrollRef = useRef(null);
  const productScrollRef = useRef(null); 
  const helpScrollRef = useRef(null);

  const [activeCategory, setActiveCategory] = useState(0);
  const [scrollState, setScrollState] = useState({ left: false, right: true });
  const [productScrollState, setProductScrollState] = useState({ left: false, right: true });
  const [helpScrollState, setHelpScrollState] = useState({ left: false, right: true });

  const checkScrollLimits = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setScrollState({
        left: scrollLeft > 10,
        right: scrollLeft + clientWidth < scrollWidth - 10,
      });
    }
  };

  const checkProductScrollLimits = () => {
    if (productScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = productScrollRef.current;
      setProductScrollState({
        left: scrollLeft > 10,
        right: scrollLeft + clientWidth < scrollWidth - 10,
      });
    }
  };

  const checkHelpScrollLimits = () => {
    if (helpScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = helpScrollRef.current;
      setHelpScrollState({
        left: scrollLeft > 10,
        right: scrollLeft + clientWidth < scrollWidth - 10,
      });
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const productContainer = productScrollRef.current;
    const helpContainer = helpScrollRef.current;

    if (scrollContainer) scrollContainer.addEventListener("scroll", checkScrollLimits);
    if (productContainer) productContainer.addEventListener("scroll", checkProductScrollLimits);
    if (helpContainer) helpContainer.addEventListener("scroll", checkHelpScrollLimits);

    const timer = setTimeout(() => {
      checkScrollLimits();
      checkProductScrollLimits();
      checkHelpScrollLimits();
    }, 100);

    return () => {
      if (scrollContainer) scrollContainer.removeEventListener("scroll", checkScrollLimits);
      if (productContainer) productContainer.removeEventListener("scroll", checkProductScrollLimits);
      if (helpContainer) helpContainer.removeEventListener("scroll", checkHelpScrollLimits);
      clearTimeout(timer);
    };
  }, []);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const amount = direction === "left" ? -clientWidth * 0.5 : clientWidth * 0.5;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  const handleProductScroll = (direction) => {
    if (productScrollRef.current) {
      const { clientWidth } = productScrollRef.current;
      const amount = direction === "left" ? -clientWidth * 0.5 : clientWidth * 0.5;
      productScrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  const handleHelpScroll = (direction) => {
    if (helpScrollRef.current) {
      const { clientWidth } = helpScrollRef.current;
      const amount = direction === "left" ? -clientWidth * 0.5 : clientWidth * 0.5;
      helpScrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] font-sans antialiased pb-24 pt-11">
      <AnnouncementRibbon />

      <div className="mx-auto max-w-[89%] px-6 lg:px-0">
        <StoreHeader />

        {/* Categories Horizontal Slider Container */}
        <div className="relative group/slider -mt-16">
          {scrollState.left && (
            <button
              onClick={() => handleScroll("left")}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-[#e8e8ed]/80 hover:bg-[#e8e8ed] backdrop-blur-md shadow-sm opacity-0 group-hover/slider:opacity-100 transition-all duration-200 cursor-pointer"
              aria-label="Scroll Left"
            >
              <svg className="w-6 h-6 stroke-[#1d1d1f]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
          )}

          <div
            ref={scrollRef}
            className="text-[14px] flex gap-6 overflow-x-auto scroll-smooth snap-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {categories.map((item, index) => (
              <CategoryCard
                key={index}
                item={item}
                active={activeCategory === index}
                onClick={() => setActiveCategory(index)}
              />
            ))}
          </div>

          {scrollState.right && (
            <button
              onClick={() => handleScroll("right")}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-[#e8e8ed]/80 hover:bg-[#e8e8ed] backdrop-blur-md shadow-sm opacity-0 group-hover/slider:opacity-100 transition-all duration-200 cursor-pointer"
              aria-label="Scroll Right"
            >
              <svg className="w-6 h-6 stroke-[#1d1d1f]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          )}
        </div>

        {/* Product Cards Slider */}
        <div className="mt-12 overflow-hidden relative group/product-slider">
          <h3 className="text-[24px] md:text-[28px] font-semibold tracking-tight text-[#6e6e73]">
            <span className="text-[#1d1d1f]">The latest.</span> Take a look at what’s new, right now.
          </h3>

          {productScrollState.left && (
            <button
              onClick={() => handleProductScroll("left")}
              className="absolute left-4 top-[60%] -translate-y-1/2 z-30 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-[#e8e8ed]/80 hover:bg-[#e8e8ed] backdrop-blur-md shadow-sm opacity-0 group-hover/product-slider:opacity-100 transition-all duration-200 cursor-pointer"
              aria-label="Scroll Product Left"
            >
              <svg className="w-6 h-6 stroke-[#1d1d1f]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
          )}

          <div
            ref={productScrollRef}
            className="mt-7 flex gap-4 overflow-x-auto scroll-smooth snap-x pb-6 scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {latestProducts.map((product, idx) => (
              <ProductCard key={idx} product={product} />
            ))}
          </div>

          {productScrollState.right && (
            <button
              onClick={() => handleProductScroll("right")}
              className="absolute right-4 top-[60%] -translate-y-1/2 z-30 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-[#e8e8ed]/80 hover:bg-[#e8e8ed] backdrop-blur-md shadow-sm opacity-0 group-hover/product-slider:opacity-100 transition-all duration-200 cursor-pointer"
              aria-label="Scroll Product Right"
            >
              <svg className="w-6 h-6 stroke-[#1d1d1f]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          )}
        </div>

        {/* Help Cards Slider Section */}
        <div className="mt-12 overflow-hidden relative group/help-slider">
          <h3 className="text-[28px] md:text-[28px] font-semibold tracking-tight text-[#6e6e73]">
            <span className="text-[#1d1d1f]">Help is here.</span> Whenever and however you need it.
          </h3>

          {helpScrollState.left && (
            <button
              onClick={() => handleHelpScroll("left")}
              className="absolute left-4 top-[69%] -translate-y-1/2 z-30 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-[#e8e8ed]/80 hover:bg-[#e8e8ed] backdrop-blur-md shadow-sm opacity-0 group-hover/help-slider:opacity-100 transition-all duration-200 cursor-pointer"
              aria-label="Scroll Help Left"
            >
              <svg className="w-6 h-6 stroke-[#1d1d1f]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
          )}

          <div
            ref={helpScrollRef}
            className="mt-7 flex gap-4 overflow-x-auto scroll-smooth snap-x pb-6 scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {helpCards.map((card, idx) => (
              <HelpCard key={idx} card={card} />
            ))}
          </div>

          {helpScrollState.right && (
            <button
              onClick={() => handleHelpScroll("right")}
              className="absolute right-4 top-[60%] -translate-y-1/2 z-30 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-[#e8e8ed]/80 hover:bg-[#e8e8ed] backdrop-blur-md shadow-sm opacity-0 group-hover/help-slider:opacity-100 transition-all duration-200 cursor-pointer"
              aria-label="Scroll Help Right"
            >
              <svg className="w-6 h-6 stroke-[#1d1d1f]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          )}
        </div>
       
      </div>
    </div>
  );
}

// ==========================================
// Helper Sub-Components
// ==========================================

function AnnouncementRibbon() {
  return (
    <div className="w-full bg-white py-5 text-center">
      <p className="inline-flex items-center justify-center gap-1 px-4 font-normal text-[#1d1d1f] text-[14px] leading-[21px]">
        <span>Now you can buy Apple Watch<sup className="mx-[1px] text-[9px]">◊</sup> with education savings.<sup className="mx-[1px] text-[9px]">Δ</sup></span>
        <a href="#learn-more" className="group ml-0.5 inline-flex items-center gap-0.5 text-[#0066cc] hover:underline">
          Learn more
          <svg className="h-3 w-3 text-[#0066cc] transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <circle cx="12" cy="12" r="10" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8M8 12h8" />
          </svg>
        </a>
      </p>
    </div>
  );
}

function StoreHeader() {
  return (
    <div className="pt-21 pb-1 flex flex-col md:flex-row md:justify-between md:items-baseline gap-4">
      <h1 className="text-[80px] md:text-[80px] font-semibold tracking-tight text-[#1d1d1f] leading-none">Store</h1>
      <div className="md:text-right max-w-sm pb-12 md:-translate-y-[32%]">
        <h2 className="text-[28px] font-semibold leading-[32px] tracking-[0.196px] text-[#1d1d1f]">
          The best way to buy the<br className="hidden md:block" />products you love.
        </h2>
        <div className="mt-4 space-y-2">
          <a href="#specialist" className="inline-flex items-center text-[14px] text-[#0066cc] hover:underline group">
            Connect with a Specialist
            <svg className="ml-1 w-[12px] h-[12px] stroke-current transition-transform duration-200 group-hover:-translate-y-[1px] group-hover:translate-x-[1px]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
            </svg>
          </a>
          <br />
          <a href="#find-store" className="inline-flex items-center text-[14px] text-[#0066cc] hover:underline group">
            Find an Apple Store
            <svg className="ml-1 w-[12px] h-[12px] stroke-current transition-transform duration-200 group-hover:-translate-y-[1px] group-hover:translate-x-[1px]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

function CategoryCard({ item, active, onClick }) {
  return (
    <div onClick={onClick} className="flex flex-col items-center text-center min-w-[120px] snap-start cursor-pointer group/item select-none">
      <div className="w-[120px] h-[90px] flex items-center justify-center">
        <img src={item.img} alt={item.name} className="max-h-[76px] max-w-full object-contain transition-transform duration-300 group-hover/item:scale-105" />
      </div>
      <span className="mt-3 text-[13px] font-semibold tracking-tight text-[#1d1d1f]">{item.name}</span>
    </div>
  );
}

function ProductCard({ product }) {
  const isDarkBg = product.bgClass.includes("bg-black");
  return (
    <div className={`relative w-[400px] h-[500px] rounded-[25px] px-8 pt-8 pb-8 overflow-hidden snap-start shrink-0 transition-all duration-500 hover:scale-[1.01] shadow-sm hover:shadow-md ${product.bgClass}`}>
      <div className="relative z-20 flex flex-col">
        {product.tag && <span className="mb-2 text-[14px] font-semibold uppercase tracking-[0.12em] text-[#bf4800]">{product.tag}</span>}
        <h4 className={`text-[28px] font-bold leading-[32px] tracking-[0.196px] ${isDarkBg ? "text-white" : "text-[#1d1d1f]"}`}>{product.title}</h4>
        <p className={`mt-1 text-[14px] font-bold leading-[18px] ${isDarkBg ? "text-white/90" : "text-[#1d1d1f]"}`}>{product.subtitle}</p>
        <p className={`mt-[3px] text-[14px] font-normal leading-[20px] ${isDarkBg ? "text-[#a1a1a6]" : "text-[#6e6e73]"}`}>{product.price}</p>
      </div>
      <div className="absolute inset-x-0 bottom-0 top-[18%] z-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <img src={product.img} alt={product.title} className="w-[100%] h-auto object-contain -translate-y-6 transition-transform duration-500 group-hover:scale-[1.03]" />
      </div>
    </div>
  );
}

function HelpCard({ card }) {
  const isDarkBg = card.bgClass.includes("bg-black");
  return (
    <div className={`relative w-[480px] h-[500px] rounded-[25px] px-8 pt-8 pb-8 overflow-hidden snap-start shrink-0 transition-all duration-500 hover:scale-[1.01] shadow-sm hover:shadow-md ${card.bgClass}`}>
      <div className="relative z-20 flex flex-col max-w-[320px]">
        {/* 1. Category Tag */}
        {card.tag && (
          <span className={`text-[12px] font-semibold tracking-wider text-[#6e6e73] mb-2 ${isDarkBg ? "text-white/60" : "text-[#6e6e73]"}`}>
            {card.tag}
          </span>
        )}
        
        {/* 2. Main Large Card Title */}
        <h4 className={`text-[28px] font-semibold tracking-tight leading-[34px] ${isDarkBg ? "text-white" : "text-[#1d1d1f]"}`}>
          {card.title}
        </h4>

        {/* 3. Small Explanatory Subtitle */}
        {card.subtitle && (
          <p className={`mt-2 text-[14px] font-medium leading-[20px] ${isDarkBg ? "text-white/70" : "text-[#6e6e73]"}`}>
            {card.subtitle}
          </p>
        )}
      </div>
      <div className="absolute inset-0 z-0">
        <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default Store;