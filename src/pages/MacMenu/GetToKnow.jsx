import React, { useRef, useState, useEffect } from "react";

export default function GetToKnow() {
  const scrollContainerRef = useRef(null);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(true);

  const cards = [
    {
      category: "Performance and Battery Life",
      title: "Go fast. Go far.",
      imageUrl: "https://www.apple.com/assets-www/en_WW/mac/feature_card/large/fc_performance_694dcddce_2x.jpg",
      imageAlt: "A person working outside at night using MacBook",
      isDarkText: false, 
    },
    {
      category: "Built for AI",
      title: "Smart. Secure. On device.",
      imageUrl: "https://www.apple.com/assets-www/en_WW/mac/01_feature_card/large/fc_intelligence_789c458fb_2x.jpg",
      imageAlt: "Vibrant visual showing AI on Mac",
      isDarkText: false, 
    },
    {
      category: "macOS and Apple Intelligence",
      title: "Easy to use. Easy to love.",
      imageUrl: "https://www.apple.com/assets-www/en_WW/mac/04_feature_card/large/fc_macos_310b3e6a0_2x.jpg",
      imageAlt: "Mac screen showing widgets and photos",
      isDarkText: true, 
    },
    {
      category: "Mac + iPhone",
      title: "Together they work wonders.",
      imageUrl: "https://www.apple.com/assets-www/en_WW/mac/04_feature_card/large/fc_iphone_1a4c9f1e5_2x.jpg",
      imageAlt: "iPhone mirroring screen on Mac layout",
      isDarkText: true, 
    },
    {
      category: "Compatibility",
      title: "Mac runs your favorite apps.",
      imageUrl: "https://www.apple.com/assets-www/en_WW/mac/03_feature_card/large/fc_compatibility_e94c0f8a8_2x.jpg",
      isDarkText: true, 
    },
     {
      category: "Privacy and Security",
      title: "Your business is nobody else's.",
      imageUrl: "https://www.apple.com/assets-www/en_WW/mac/feature_card/large/fc_security_4edf4d348_2x.jpg",
      imageAlt: "Vibrant visual showing AI on Mac",
      isDarkText: false, 
    },
    {
      category: "Durability",
      title: "Built to stand the test of time.",
      imageUrl: "https://www.apple.com/assets-www/en_WW/mac/03_feature_card/large/fc_durability_44004299a_2x.jpg",
      imageAlt: "Vibrant visual showing AI on Mac",
      isDarkText: false, 
    },
    {
      category: "Apple Values",
      title: "Our values drive everything we do.",
      imageUrl: "https://www.apple.com/assets-www/en_WW/mac/feature_card/large/fc_values_e5b10a05a_2x.jpg",
      imageAlt: "Vibrant visual showing AI on Mac",
      isDarkText: false, 
    },
  ];

  
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setShowLeftBtn(scrollLeft > 5);
      setShowRightBtn(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  
  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -352 : 352; // 
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
  
    <section className="bg-[#f5f5f7] md:bg-white pt-14 pb-9 w-full overflow-hidden font-sans antialiased">
      <div className="max-w-[1264px] mx-auto px-6 md:px-0">
        
        {/* Title Area */}
        <div className="mb-9">
          <h2 className="text-[32px] md:text-[48px] font-semibold text-[#1d1d1f] tracking-tight leading-tight">
            Get to know Mac.
          </h2>
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
              className="flex flex-col justify-between bg-white rounded-3xl w-[280px] md:w-[332px] min-w-[280px] md:min-w-[372px] h-[480px] md:h-[680px] snap-start shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-all duration-500 ease-out relative overflow-hidden group"
            >
              
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={card.imageUrl}
                  alt={card.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {!card.isDarkText && (
                  <div className="absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-black/40 via-black/10 to-transparent pointer-events-none" />
                )}
              </div>

              <div className="p-7 z-10 relative pointer-events-none">
                <span 
                  className={`text-[14px] font-semibold tracking-normal block mb-1.5 ${
                    card.isDarkText ? "text-gray-800" : "text-gray-300"
                  }`}
                >
                  {card.category}
                </span>
                <h3 
                  className={`text-[24px] md:text-[28px] font-semibold tracking-tight leading-tight max-w-[210px] ${
                    card.isDarkText ? "text-[#1d1d1f]" : "text-white"
                  }`}
                >
                  {card.title}
                </h3>
              </div>

              <button 
                className={`absolute bottom-6 right-6 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 z-20 shadow-sm ${
                  card.isDarkText 
                    ? "bg-[#f5f5f7]/90 hover:bg-[#e8e8ed] text-gray-600" 
                    : "bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/10"
                }`}
                aria-label="More details"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* Navigation Buttons Control (ឆ្វេង - ស្តាំ) */}
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
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}