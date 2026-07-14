// TheiPadexperience.jsx
import React, { useRef } from "react";

const experienceCards = [
  {
    id: 1,
    tag: "TODAY AT APPLE",
    title: "Join the fun at Apple Camp",
    description: "Create a helpful superhero in a free session on iPad. For kids 6–10.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-card-50-apple-camp-202407?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1718222045580",
    isDarkText: true,
  },
  {
    id: 2,
    tag: "IPADOS",
    title: "Powerfully redesigned. Game-changing capabilities.",
    description: "",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-card-50-ipados20-202410?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1728415714399",
    isDarkText: true,
  },
  {
    id: 3,
    tag: "ICLOUD+",
    title: "More space for what matters.",
    description: "Get plenty of storage for all your photos, files, and backups, plus great privacy features.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-card-50-icloud-202405?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1713554160416",
    isDarkText: true,
  }
];

export default function TheiPadexperience() {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 480; // ទំហំកាត + គម្លាត Gap
      if (direction === "left") {
        scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="space-y-6 w-full relative group">
      {/* Title Section */}
      <h3 className="text-[24px] md:text-[28px] font-semibold tracking-tight text-[#6e6e73]">
        <span className="text-[#1d1d1f]">The iPad experience.</span> Designed to connect with everything Apple.
      </h3>

      {/* Card Slider Wrapper */}
      <div className="relative w-full">
        
        {/* ប៊ូតុងបញ្ជាឆ្វេងអណ្តែត */}
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#e8e8ed]/90 hover:bg-[#d2d2d7] active:bg-[#b0b0b5] flex items-center justify-center text-[#1d1d1f] shadow-md transition-all duration-300 z-20 cursor-pointer opacity-0 group-hover:opacity-100 backdrop-blur-sm"
          aria-label="Scroll left"
        >
          <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* ប៊ូតុងបញ្ជាស្តាំអណ្តែត */}
        <button
          onClick={() => handleScroll("right")}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#e8e8ed]/90 hover:bg-[#d2d2d7] active:bg-[#b0b0b5] flex items-center justify-center text-[#1d1d1f] shadow-md transition-all duration-300 z-20 cursor-pointer opacity-0 group-hover:opacity-100 backdrop-blur-sm"
          aria-label="Scroll right"
        >
          <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Scrollable Container */}
        <div 
          ref={scrollContainerRef}
          className="flex flex-row overflow-x-auto gap-5 pb-5 scrollbar-none snap-x snap-mandatory w-full scroll-smooth"
        >
          {experienceCards.map((card) => (
            <ExperienceCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ExperienceCard({ card }) {
  return (
    <div className="relative w-[380px] sm:w-[460px] h-[500px] rounded-[24px] bg-white border border-[#e8e8ed] overflow-hidden snap-start shrink-0 transition-all duration-300 hover:shadow-md hover:scale-[1.005] select-none flex flex-col justify-between group/card">
      
      {/* Text Layer */}
      <div className="p-7 pl-10 relative z-10 flex flex-col max-w-[360px]">
        <span className="text-[11px] font-semibold tracking-wider text-gray-500 uppercase mb-1">
          {card.tag}
        </span>
        <h4 className="text-[26px] sm:text-[28px] font-semibold tracking-tight leading-[30px] sm:leading-[34px] text-left text-[#1d1d1f]">
          {card.title}
        </h4>
        
        {card.description && (
          <p className="text-[14px] text-gray-600 leading-relaxed mt-3 text-left font-normal">
            {card.description}
          </p>
        )}
      </div>

      {/* Image Background Layer */}
      <div className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none">
        <img
          src={card.img}
          alt={card.title}
          className="w-full h-full object-cover object-bottom transition-transform duration-500 group-hover/card:scale-[1.01]"
        />
      </div>

    </div>
  );
}