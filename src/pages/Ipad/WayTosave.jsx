// WayTosave.jsx
import React, { useRef } from "react";

// FIXED: Renamed list array to saveItems to avoid collision with the main export function name
const saveItems = [
  {
    id: 1,
    tag: "APPLE TRADE IN",
    title: "Get $180–$580 in credit when you trade in iPad Pro or iPad Air.²",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-tax-holiday-202606?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=cFEvalhFakpZVzg4RFZsWktqbXFNZXZWL0crRTJLWVZ6bUFvMjhKOEJDYjJtaE9nejNBS0FrclhJMVJoVXB1MUprY3crUWRsN1dqVjRnMHR5S1hVbk15aXA4bS9PcHRGQXdCZ3ZGenB1MWl4S2IwUHBvanVidlNKOGY1aVVTbUc",
    titleColor: "text-[#1d1d1f]",
    isSpecialTitle: false,
  },
  {
    id: 2,
    tag: "REFURBISHED",
    title: "Shop Certified Refurbished iPad models with a one‑year warranty.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-card-50-trade-in-202405?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=d2QyQmhrRGxtdkU2ZW5uVDBRMHNEL09JL1lmWTJyYitoWTJVUGxoakpNMEF3Wk1qdTlJUXpYbmUrMWJwLzZvbTJTaS9RTTYzTWg5VUhTM1Ara0JyS1BEWitLSUJxTWIxd1NiRktDNHh5VjQ",
    titleColor: "text-[#1d1d1f]",
    isSpecialTitle: false,
  },
  {
    id: 3,
    tag: "WATCH AND LEARN",
    title: "How to trade in your Mac.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-50-tradein-video-card-202405?wid=960&hei=1000&fmt=png-alpha&.v=bnBGZmQyZENCQjV2MDY0V0laRVBEUDNCU2VJaDFNK0RNZnB0MWJFTHY1d2NzUzFKVm1zRnByUUY2REZlU2UyRjVWTTUydGFjaHVyNmxPYUZmTE1aZjR3T1YxQk9BejJUSjhWSm1mcHpjS2pUOWcyL2RnbzB6aXFNcjF0cTVhOFg",
    titleColor: "text-[#1d1d1f]",
    isSpecialTitle: false,
    isVideoCard: true,
    bottomText: "Get a quick overview in this video.",
  },
  {
    id: 4,
    tag: "EDUCATION",
    title: "Save on a new iPad with special education pricing.³",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-card-50-monthly-installments-202405?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=dmNtNCtodDJvQTBIQ0d3WHg4bUVxMzhEc29tTzFZcVJzWmpnd0dqTS82cFVUdUlQWnBVNnFZcDkrcmQ5M1RMelVrc1JZVkQ0S2s0elFpK2Y1K2lCS1NsOG1PN3FBRzN3cEphZ2ZrZllTNFpTTTBoUnlSYWVMR1VsbW1xVGYwaGM",
    titleColor: "text-[#1d1d1f]",
    isSpecialTitle: false,
  },
  {
    id: 5,
    tag: "EDUCATION",
    title: "Save on a new iPad with special education pricing.³",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-50-apple-card-202108?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=TFU2UzByZjhMakduTVVUMVptdlJxTHJmczB4SkMrc3cxN2RvZ3hBRkdYNmo2Z1ptREdBenZRTjZuSCtBemFnUTRHeXB5TnVsU3R6Qjd0Y2JzbURyWEJWUGhpYllQZ2NhZkV4SWRUNUk4eE4rYWpGdS9XeFgvbS9ITnNYOEhYaG4",
    titleColor: "text-[#1d1d1f]",
    isSpecialTitle: false,
  },
  {
    id: 6,
    tag: "EDUCATION",
    title: "Save on a new iPad with special education pricing.³",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/all-card-50-refurb-202408?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=NFFMT1ArR3loRjNadGhIYVNjS1FaYS9Uc1VQMFhKcmt1dHBBL1RWcWorTjRPaGhDdnpwSW51YmYvWU84cDZnMlMrR3RSUk9nckZNSURSVTdTTTRtUVhBK09zdkpKd1NtV2hlNHpLL0NQaDQ",
    titleColor: "text-[#1d1d1f]",
    isSpecialTitle: false,
  },
  {
    id: 7,
    tag: "EDUCATION",
    title: "Save on a new iPad with special education pricing.³",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-card-50-education-202504?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=TU51NU1iT1cxQ1dpR0oxQnhkU0NmRVk2TkFYSFdPb0NuRmkrWGNuL1padWo2Z1ptREdBenZRTjZuSCtBemFnUTRHeXB5TnVsU3R6Qjd0Y2JzbURyWEdqT3JDSUhRd3N4MkpTV25SR3lVYjErYWpGdS9XeFgvbS9ITnNYOEhYaG4",
    titleColor: "text-[#1d1d1f]",
    isSpecialTitle: false,
  },
];

export default function WayTosaveItems() {
  const sliderRef = useRef(null);

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 460; 
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="space-y-6 w-full mt-8 relative group/slider">
      {/* Section Header */}
      <h3 className="text-[24px] md:text-[28px] font-semibold tracking-tight text-[#6e6e73]">
        <span className="text-[#1d1d1f]">Ways to save.</span> Find the option that works for you.
      </h3>

      <div className="relative w-full">
        {/* Left Arrow Button */}
        <button
          onClick={() => handleScroll("left")}
          aria-label="Scroll left"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 
                     w-12 h-12 rounded-full bg-[#e8e8ed]/80 backdrop-blur-md 
                     flex items-center justify-center border border-[#d2d2d7]
                     text-[#1d1d1f] hover:bg-[#d2d2d7] active:scale-95
                     transition-all duration-200 shadow-sm
                     opacity-0 group-hover/slider:opacity-100 max-md:opacity-100"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={() => handleScroll("right")}
          aria-label="Scroll right"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 
                     w-12 h-12 rounded-full bg-[#e8e8ed]/80 backdrop-blur-md 
                     flex items-center justify-center border border-[#d2d2d7]
                     text-[#1d1d1f] hover:bg-[#d2d2d7] active:scale-95
                     transition-all duration-200 shadow-sm
                     opacity-0 group-hover/slider:opacity-100 max-md:opacity-100"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Scrollable Slider Track */}
        <div 
          ref={sliderRef}
          className="flex gap-5 pb-7 overflow-x-auto snap-x snap-mandatory 
                     [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden 
                     w-full scroll-smooth"
        >
          {saveItems.map((card) => (
            <GuideCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// Card Sub-Component 
// ==========================================
function GuideCard({ card }) {
  return (
    <div className="relative w-[340px] sm:w-[480px] h-[500px] rounded-[24px] bg-white border border-[#e8e8ed] overflow-hidden snap-start shrink-0 transition-all duration-300 hover:shadow-md hover:scale-[1.005] select-none flex flex-col justify-between group">
      
      {/* Text Content Area */}
      <div className="p-8 sm:p-10 relative z-10 flex flex-col max-w-[380px]">
        {card.tag ? (
          <span className="text-[12px] text-[#6e6e73] font-semibold tracking-wider uppercase mb-1">
            {card.tag}
          </span>
        ) : (
          <div className="h-[18px]" />
        )}

         <h4 className="text-[27px] font-semibold tracking-tight leading-[30px] mt-1">
          {card.isSpecialTitle ? (
            <>
              <span className="text-[#1d1d1f] font-semibold">{card.title}</span>
            </>
          ) : (
            <span className={card.titleColor}>{card.title}</span>
          )}
          {card.description && (
            <p className="text-[14px] sm:text-[16px] text-[#1d1d1f] leading-[20px] sm:leading-[22px] mt-1 text-left font-normal max-w-[320px]">
              {card.description}
            </p>
          )}
        </h4>
      </div>

      {/* Image Layer */}
      <div className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none">
        <img
          src={card.img}
          alt={card.title}
          className="w-full h-full object-cover object-bottom transition-transform duration-500 group-hover:scale-[1.01]"
        />
      </div>
        {card.isVideoCard && (
        <div className="relative z-10 w-full flex items-center justify-between p-4 pl-10 bg-white pt-5">
          <p className="text-[14px] text-[#1d1d1f] font-normal max-w-[280px]">
            {card.bottomText}
          </p>
          
          <button 
            className="w-11 h-11 rounded-full bg-[#e8e8ed] hover:bg-[#d2d2d7] flex items-center justify-center transition-colors duration-200 shadow-sm cursor-pointer shrink-0"
            aria-label="Play Video"
            onClick={(e) => {
              e.stopPropagation();
              // Add video toggle or modal play functions here
            }}
          >
            <svg 
              className="w-4 h-4 text-[#1d1d1f] fill-current ml-0.5" 
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}