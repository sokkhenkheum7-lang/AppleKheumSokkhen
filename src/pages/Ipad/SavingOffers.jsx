// SavingOffers.jsx
import React, { useRef } from "react";

const savingCards = [
  
  {
    id: 1,
    tag: "GOVERNMENT",
    title: "Special pricing is available for state, local, and federal agencies.²",
    description: "",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-card-40-education-202405?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=UDBEVzZoRzJySHJxc1Vob2tuQURVaTZNSlJWWktSTTVOclMxdi80TE1TcjZXYXJlRUd1cTBYTnRnbTNlazIvMzRHeXB5TnVsU3R6Qjd0Y2JzbURyWExxNlZYZHZXTm9tMTA2SjVpZVpvYXArYWpGdS9XeFgvbS9ITnNYOEhYaG4",
    isBlackCard: false,
  },  
  {
    id: 2,
    tag: "SMALL BUSINESS",
    title: "From enterprise to small business, we'll work with you.²",
    description: "",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-card-40-business-202405?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=ZjNrcjBZRW54aHFiRHhiVUNmSW54aktLVkF0YXVSbEZFdFcxNWM5OGlla2QxYXI4a0J1dmxHNzJaeEFoWmI5RHVUb3VPa2FUZVhQMFhDQnVBMWhwQS9yTmxkUjVHN0dGTXZnUzBWSWFpSzA", 
    isBlackCard: true, 
  },
  {
    id: 3,
    tag: "GOVERNMENT",
    title: "Special pricing is available for state, local, and federal agencies.²",
    description: "",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-card-40-government-202405?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=d0tRUWR4NjRpdTJxMHd6UG4rVGFPS3R1bVlOK3ZQOXkwam9kMUkzQzBnWDkvamYzRzRvcFlnajNacmhEOC9BeHg4ZHpEbm5XWGdaM3BiNVRDaG55Uk9ncVQrRGNhOHhUajY1L040cmFBbXVIaWV5SG1KWWRSb1RMSkNqUDJYZHY",
    isBlackCard: false,
  },
  {
    id: 4,
    tag: "VETERANS AND MILITARY",
    title: "Active and veteran members may be eligible for exclusive savings.²",
    description: "",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-veteran-202509?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=d01hbVp2TEdlMG9Memp2N1liaFpVK0VtZHJxNHNCcDlSRnVhZkNXeTJhc2QxYXI4a0J1dmxHNzJaeEFoWmI5RDJTaS9RTTYzTWg5VUhTM1Ara0JyS09TMGQyVTZTbVh5ekYyU1hDTHhHdE0",
    isBlackCard: false,
  },
];

export default function SavingOffers() {
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 480; 
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
        <span className="text-[#1d1d1f]">Savings and offers.</span> Exclusive deals, special stores and more.
      </h3>

      {/* Card Slider Wrapper */}
      <div className="relative w-full">
        {/* Left Button */}
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#e8e8ed]/90 hover:bg-[#d2d2d7] active:bg-[#b0b0b5] flex items-center justify-center text-[#1d1d1f] shadow-md transition-all duration-300 z-20 cursor-pointer opacity-0 group-hover:opacity-100 backdrop-blur-sm"
          aria-label="Scroll left"
        >
          <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Button */}
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
          {savingCards.map((card) => (
            <SavingCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SavingCard({ card }) {
 
  const bgColor = card.isBlackCard ? "bg-black text-white" : "bg-white text-[#1d1d1f]";
  const tagColor = card.isBlackCard ? "text-zinc-400" : "text-gray-500";
  const titleColor = card.isBlackCard ? "text-white" : "text-[#1d1d1f]";
  const borderStyle = card.isBlackCard ? "border-zinc-900" : "border-[#e8e8ed]";

  return (
    <div className={`relative w-[380px] sm:w-[400px] h-[500px] rounded-[24px] ${bgColor} border ${borderStyle} overflow-hidden snap-start shrink-0 transition-all duration-300 hover:shadow-md hover:scale-[1.005] select-none flex flex-col justify-between group/card`}>
      <div className="p-7 pl-10 relative z-10 flex flex-col max-w-[380px]">
        <span className={`text-[11px] font-semibold tracking-wider uppercase mb-1 ${tagColor}`}>
          {card.tag}
        </span>
        <h4 className={`text-[24px] sm:text-[26px] font-semibold tracking-tight leading-[28px] sm:leading-[32px] text-left ${titleColor}`}>
          {card.title}
        </h4>
      </div>

      
      <div className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none p-6 pt-24">
        <img
          src={card.img}
          alt={card.title}
          className="w-full h-auto object-contain transition-transform duration-500 group-hover/card:scale-[1.01]"
        />
      </div>
    </div>
  );
}