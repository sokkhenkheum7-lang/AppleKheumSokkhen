import React, { useRef, useState, useEffect } from "react";

export default function WhyApple() {
  const scrollContainerRef = useRef(null);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(true);

  const cards = [
    {
      category: "Way to Buy",
      title: "Pay over time, interest-Free.",
      description: "When you choose to check out at Apple with Apple Card Monthly Installments.",
      imageUrl: "https://learn.applecard.apple/mdsa/assets/storage/blobs/images/657221f503f8b3000786da35/en-us-large@1x.png",
      imageAlt: "Devices for education lineup",
      imageStyle: "w-full h-full object-contain pt-4 transition-transform duration-500 group-hover:scale-105",
      isFullCardImage: false,
    },
    {
      category: "Education",
      title: "Save on Mac with education pricing.",
      description: "College students and educators can save through the Apple Store.",
      imageUrl: "https://www.apple.com/assets-www/en_WW/mac/06_value_props/large/education_9d319824e_2x.jpg",
      imageAlt: "Devices for education lineup",
      imageStyle: "w-full h-full object-contain pt-4 transition-transform duration-500 group-hover:scale-105",
      isFullCardImage: false,
    },
    {
      category: "Personal Setup",
      title: "Meet your new Mac with Personal Setup.",
      description: "Get one-on-one help with data transfer, the latest features, and more.",
      imageUrl: "https://www.apple.com/assets-www/en_WW/mac/03_value_props/large/setup_f2645f30d_2x.jpg",
      imageAlt: "Setup vectors icons mock",
      imageStyle: "w-[95%] h-full object-contain transition-transform duration-500 group-hover:scale-105",
      isFullCardImage: false,
    },
    {
      category: "Customize Your Mac",
      title: "Customize your Mac.",
      description: "Choose your chip, memory, storage, even color.",
      imageUrl: "https://www.apple.com/v/macbook-pro/ax/images/overview/incentive/incentive_customize__engu79ixnnsm_large.jpg",
      imageAlt: "Multiple customized Macs grid",
      imageStyle: "w-full h-full object-contain transition-transform duration-500 group-hover:scale-105",
      isFullCardImage: false,
    },
    {
      category: "Delivery & Pickup",
      title: "Get flexible delivery and easy pickup.",
      description: "Choose from two-hour delivery from an Apple Store, free delivery, or easy pickup options.",
      imageUrl: "https://www.apple.com/assets-www/en_WW/mac/03_value_props/large/delivery_f43650245_2x.jpg",
      imageAlt: "Apple shopping bag",
      imageStyle: "w-[90%] h-full object-contain transition-transform duration-500 group-hover:scale-105",
      isFullCardImage: false,
    },
    {
      category: "Guide Shopping",
      title: "Shop live with a Specialist.",
      description: "Get answers to your questions and find the right Mac for you.",
      imageUrl: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-card-50-specialist-help-202512_FMT_WHH?wid=618&hei=900&fmt=p-jpg&qlt=95",
      imageAlt: "Apple Specialist Help",
      imageStyle: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
      isFullCardImage: true,
    },
    {
      category: "App Store App",
      title: "Explore a shopping experience designed around you.",
      description: "Use the Apple Store app to get a more personal way to shop.",
      imageUrl: "https://www.apple.com/assets-www/en_WW/ipad/03_value_props/medium/app_0f8f45997_2x.jpg",
      imageAlt: "App Store apps on Mac",
      imageStyle: "w-full h-full object-contain transition-transform duration-500 group-hover:scale-105",
      isFullCardImage: false,
    },
  ];

  // គ្រប់គ្រងការឆែកស្ថានភាព Scroll ដើម្បីបង្ហាញ ឬលាក់ប៊ូតុង
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setShowLeftBtn(scrollLeft > 5);
      setShowRightBtn(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  // មុខងារបញ្ជាឱ្យ Scroll
  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -392 : 392; // ស្មើនឹងទំហំ Card + Space
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      handleScroll();
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <section className="bg-[#f5f5f7] pt-1 pb-20 w-full overflow-hidden font-sans antialiased">
      <div className="max-w-[1264px] mx-auto px-6 md:px-0">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-9">
          <h2 className="text-[32px] md:text-[48px] font-semibold text-[#1d1d1f] tracking-tight leading-tight max-w-[500px]">
            Why Apple is the best place to buy Mac.
          </h2>
          <a
            href="/Mac"
            className="text-[#0066cc] hover:underline text-[14px] font-medium mt-4 md:mt-0 inline-flex items-center group"
          >
            Shop Mac
            <span className="ml-1 text-[12px] transition-transform group-hover:translate-x-0.5">&gt;</span>
          </a>
        </div>

        {/* Swipe Horizontal Grid Track */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-5 overflow-x-auto scrollbar-none pb-8 pt-2 w-full snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-white rounded-3xl w-[310px] md:w-[372px] min-w-[310px] md:min-w-[372px] h-[500px] snap-start shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out relative overflow-hidden group"
            >
              
              <div className="p-7 z-10 relative pointer-events-none">
                <span className="text-[12px] md:text-[14px] font-semibold text-gray-800 tracking-normal block mb-1.5">
                  {card.category}
                </span>
                <h3 className="text-[20px] md:text-[24px] font-semibold text-[#1d1d1f] tracking-tight leading-tight mb-1 max-w-[210px]">
                  {card.title}
                </h3>
                <p className="text-[13px] md:text-[15px] text-gray-700 font-normal tracking-wide leading-relaxed max-w-[280px]">
                  {card.description}
                </p>
              </div>

              {/* Bottom Image Showcase (Grounded to bottom edge) */}
              <div 
                className={`w-full overflow-hidden flex justify-center ${
                  card.isFullCardImage 
                    ? "absolute inset-0 h-full w-full" 
                    : "h-[280px] items-end px-6 pb-2"   
                }`}
              >
                <img
                  src={card.imageUrl}
                  alt={card.imageAlt}
                  className={card.imageStyle}
                />
              </div>

              {/* Apple Plus Action Circle icon overlay */}
              <button 
                className="absolute bottom-6 right-6 w-7 h-7 bg-[#f5f5f7]/90 hover:bg-[#e8e8ed] rounded-full flex items-center justify-center transition-colors duration-200 z-20 shadow-sm"
                aria-label="More details"
              >
                <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* ផ្នែកប៊ូតុងបញ្ជាឆ្វេង ស្តាំ នៅខាងក្រោម (Navigation Buttons Container) */}
        <div className="flex justify-end space-x-3 mt-4 px-6 md:px-0">
          
          <button
            onClick={() => scroll("left")}
            disabled={!showLeftBtn}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
              showLeftBtn 
                ? "bg-[#e8e8ed] text-gray-700 hover:bg-[#dcdcdc]" 
                : "bg-[#f5f5f7] text-gray-300 cursor-not-allowed opacity-50"
            }`}
            aria-label="Scroll left"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          
          <button
            onClick={() => scroll("right")}
            disabled={!showRightBtn}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
              showRightBtn 
                ? "bg-[#e8e8ed] text-gray-700 hover:bg-[#dcdcdc]" 
                : "bg-[#f5f5f7] text-gray-300 cursor-not-allowed opacity-50"
            }`}
            aria-label="Scroll right"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}