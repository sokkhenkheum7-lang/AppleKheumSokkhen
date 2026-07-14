import React, { useRef } from "react";

// ==========================================
// Mock Data
// ==========================================
const guideCards = [
  {
    id: 1,
    tag: "COMPARE ALL MODELS",
    title: "Which iPad is right for you?",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-card-50-compare-202410?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=M3lSVmFUMUZBN2ROWUZKMWNoYUJPMVArK1BMQkNMdGlyQzh1ZkEyWXJpY2YzUHRVc053YldlK2NuZForb0M1V0tRNjVHZTlIV04vVjZjbEh0Rm5SYzNNUXpLcVIzNFk3K3pyYXpQZ2taZjA",
    titleColor: "text-[#1d1d1f]",
    isSpecialTitle: false,
  },
  {
    id: 2,
    tag: "", 
    title: "Create, communicate, and get things done effortlessly.¹",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-card-50-ai-202503?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=UUlmQ1d1MmRxQjU4M1VWeFJ5VmZYK29SdGt5QTdaRWFxQnJpbit3ZTRoS3kvYVhHUzZnbTdlRlQ4aGhRUUYyVUNwdjgxNzdjcnlUVy83S0w5bWJ2Tm5DOUVIYnB5OWg3aytuZUtrK2haSkE",
    titleColor: "text-[#1d1d1f]",
    isSpecialTitle: true, 
  },
  {
    id: 3,
    tag: "IPAD SPECIALIST",
    title: "Shop with a Specialist over video.",
    description: "Choose your next iPad in a guided, one-way video session.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-card-50-specialist-video-202601?wid=1920&hei=2000&fmt=jpeg&qlt=90&.v=c1RGYjRQVDVMN3hGSzliYUNmUSs1bm1GMnNuei96WTNqTjYvWnVsK1FWOWtYL0VVSStmQU1KZEtIZU40azl5RG00SXc4OGpkT1FJVTFOWThQYVFrdHZ1TlY0OW1aSGR0UGhyWGZuQXRNYSszdng2NSsxT1JXcDlNMlE4ODVpWk0",
    titleColor: "text-[#1d1d1f]",
    isSpecialTitle: false,
  },
  {
    id: 4,
    tag: "IPAD SPECIALIST",
    title: "Shop one on one with a Specialist. Online or in a store.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-card-50-specialist-help-202512?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=c1RGYjRQVDVMN3hGSzliYUNmUSs1c2RrdEh4YTIveWZCZmVFS1MxUDNPT3VMN2ZzYTU1OERiMnlnSE96Y1ViY2Nva0xZQWFEV2ljOWRGNWZJRk4vWHF3UGtuVVJ0TUxWZWw5ajU4VXlDMWFrNkNjODc4VHlvWWU4WnJSZFlrVUs",
    titleColor: "text-[#1d1d1f]",
    isSpecialTitle: false,
  },
  {
    id: 5,
    tag: "TODAY AT APPLE",
    title: "Learn how to go further with your iPad.",
    description: "Discover free sessions at your local Apple Store.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-taa-ai-202604?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=cFEvalhFakpZVzg4RFZsWktqbXFNYnZ0eGJDYUF3MFBoaDZXSkNFUHdVMGYzUHRVc053YldlK2NuZForb0M1V0tRNjVHZTlIV04vVjZjbEh0Rm5SY3lUYnhvZ1E5cUxEbkpTSXJFc0NYcVU",
    titleColor: "text-[#1d1d1f]",
    isSpecialTitle: false,
  }
];

// ==========================================
// Main Component
// ==========================================
export default function ShoppingGuides1() {
  const sliderRef = useRef(null);

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      // Matches the width of the card (440px) + gap space (20px)
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
        <span className="text-[#1d1d1f]">Shopping guides.</span> Can’t decide? Start here.
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
          {guideCards.map((card) => (
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
        {card.isSpecialTitle ? (
          <span className="text-[12px] font-semibold tracking-wider uppercase mb-1">

          </span>
        ) : card.tag ? (
          <span className="text-[12px] text-gray-800 font-semibold tracking-wider uppercase mb-1">
            {card.tag}
          </span>
        ) : (
          <div className="h-[18px]" />
        )}

        <h4 className="text-[28px] font-semibold tracking-tight leading-[34px] mt-1 text-left">
          {card.isSpecialTitle ? (
            <>
              <span className="bg-gradient-to-r from-[#d53f8c] via-[#7928ca] to-[#ff0080] bg-clip-text text-transparent font-bold">
                Apple Intelligence.{" "}
              </span>
              <span className="text-[#1d1d1f] font-semibold">{card.title}</span>
            </>
          ) : (
            <span className={card.titleColor}>{card.title}</span>
          )}
        </h4>

        {card.description && (
          <p className="text-[14px] sm:text-[16px] text-[#1d1d1f] leading-[20px] sm:leading-[22px] mt-2 text-left font-normal max-w-[320px]">
            {card.description}
          </p>
        )}
      </div>

      {/* Image Layer */}
      <div className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none">
        <img
          src={card.img}
          alt={card.title}
          className="w-[380px] object-cover object-bottom transition-transform duration-500"
        />
      </div>

    </div>
  );
}