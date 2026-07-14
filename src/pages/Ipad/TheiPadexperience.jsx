// TheiPadexperience.jsx
import React, { useRef } from "react";

const experienceCards = [
  {
    id: 1,
    tag: "TODAY AT APPLE",
    title: "Join the fun at Apple Camp",
    description: "Create a helpful superhero in a free session on iPad. For kids 6–10.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-apple-camp-202606?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=SFNxMjRYSTFLdjBJZG1UYjBKRUNDam1TODJXV1VvWThkUCtsNm45c3ZCTWsrNUZoNXdjRTN6Qk9kZzJzT0IxWnNtS0NkZnlUKzBRdlpRai9zMDR0cTNmSzgwVGdaZklpSGlibzkzVDJCM3oxNGJUQmRCaG15WHZobHM3MTZ3anA",
    isDarkText: true,
  },
  {
    id: 2,
    tag: "IPADOS",
    title: "Powerfully redesigned. Game-changing capabilities.",
    description: "",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-card-50-ipadOS-202510?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=dHRVd2pXOW5yTjVkK2x3R1o2RXdZWDhTNW8xSEpIb05ReGV4bUdFeUo4cEx0QXRvdnJ4V1dBNW1Qd2w2K1l1dlMwV0hhcmdVdXZzZ1NwTlFUaEgwTHdpMkV6V3I5cHpyWVJKbjZob0tadkk",
    isDarkText: true,
  },
  {
    id: 3,
    tag: "ICLOUD+",
    title: "More space for what matters.",
    description: "Get plenty of storage for all your photos, files, and backups, plus great privacy features.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-card-50-continuity-202510_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=azRqUzlVU0xmdjF6dXZZZktlNUx2dVZaT3ZRZzlCSUxsSmdrQ1IwYlZUalV6YkxCN29rYWlPV3JIeUFBLzFxVm1td3JHMmlHM0d0VzBMMGs5ZHR4WnhIbXN3MVh5OWhsQ0lJOXJGZytXTThXUExVV21ZbEtGa1RhVkwvUkxuamI",
    isDarkText: true,
  },
  {
    id: 4,
    tag: "APPLE ONE",
    title: "Six Apple services. One easy subscription.",
    description: "",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-card-50-subscriptions-202605_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=QXpjOVhQcms2dkVkWndobVROeENJemhGUktYeVR0aUd0NER6c1dVblhhQkl6RDgwZ2ZkekpZb2dCNDU4NlB1YVVrc1JZVkQ0S2s0elFpK2Y1K2lCS1NsOG1PN3FBRzN3cEphZ2ZrZllTNGF0ZXByczRhTE40d0UvR2ltOFZyQmI",
    isDarkText: true,
  },
  {
    id: 5,
    tag: "APPLE CREATOR STUDIO",
    title: "Get 3 months free when you buy an iPad.‡",
    description: "Apple Creator Studio includes Final Cut Pro, Logic Pro, Pixelmator Pro, supercharged productivity apps, and more.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-apple-creator-studio-202601?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=SFNxMjRYSTFLdjBJZG1UYjBKRUNDb0ZNZHk1UXhCTHR3UERnSjI5Q21VWWQrcVdSdUJxZzFZNjFaSWtzc25ySWVEb1lRcjg2U0o3bTMvMkR2S2VvTmt2aHJVVVRvS3hUQ0EwVk8wak9Ka0ZwRVY0VlkyVnBUNmFYK0tKQnIrSFU", 
    isLightText: true,
  },
  {
    id: 6,
    isStackedCard: true,
    subCards: [
      {
        id: "6-top",
        tag: "APPLE AT COLLEGE",
        title: "Light in your backpack. Heavy on features.",
        description: "",
        img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-card-25-apple-at-college-202210?wid=960&hei=480&fmt=p-jpg&qlt=95&.v=a0lTalRKTndCNWg1elFhSExhWHdCbWpOa2R4WVdMdzNITDMrOVdnQ2FrU05BanFRa01UM3lVWktCV2c1NjZleCtqU01BdWpuR2pLSk5OaDZDdWtoVG1TSXlXb2FZeWFvTitrUXcrczdnMUl1SG9aT2VxbHlEeEp0ME9zNjllTjc",
      },
      {
        id: "6-bottom",
        tag: "APPLE AT WORK",
        title: "Breeze through your workflow.",
        description: "",
        img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-card-25-apple-at-work-202410?wid=960&hei=480&fmt=p-jpg&qlt=95&.v=a0lTalRKTndCNWg1elFhSExhWHdCaFBEVFRsK3JreUxGU1hoQ0ZPb1F1SjJWam1lUTE3R2JzdlNWbS91SE5WTkprY3crUWRsN1dqVjRnMHR5S1hVbkxXQk1RblQwT29Cd3hlUWJTNFB6VnQzQ25YaTdPNUNzckIrV005VnhIZ08",
      }
    ]
  },
  {
    id: 7,
    tag: "CREATOR STUDIO",
    title: "Bring your big ideas to life.",
    description: "iPad gives you the tools to shape your creativity.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-subscriptions-202605?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=WW05TjdlcC83b2p3NDlrR3ZVbk1xYk4zaUxnUFVTeUlGeUNxWkhYTVpQc3l0U1ZtOFgzWEVDRzk0cFh3T2wrcVN5aWNYUFpIbkFhdm03T3BzSjdVSTI2SnE5cVJVVzdjaUpRbUpzRk5lMEZYWTd1bDlYVlB5S1l0U0hTeGxwTi8",
    isDarkText: true,
  },
];

export default function TheiPadexperience() {
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
        <span className="text-[#1d1d1f]">The iPad experience.</span> Designed to connect with everything Apple.
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
          {experienceCards.map((card) => {
            if (card.isStackedCard) {
              return <StackedExperienceCard key={card.id} card={card} />;
            }
            return <ExperienceCard key={card.id} card={card} />;
          })}
        </div>
      </div>
    </div>
  );
}

// ១. Component សម្រាប់កាតទោលធម្មតា
function ExperienceCard({ card }) {
  // ប្តូរពណ៌អក្សរទៅតាមលក្ខខណ្ឌ (isLightText ? ពណ៌ស : ពណ៌ខ្មៅ)
  const tagColor = card.isLightText ? "text-zinc-400" : "text-gray-500";
  const titleColor = card.isLightText ? "text-white" : "text-[#1d1d1f]";
  const descColor = card.isLightText ? "text-zinc-300" : "text-gray-600";
  const borderStyle = card.isLightText ? "border-zinc-800" : "border-[#e8e8ed]";

  return (
    <div className={`relative w-[380px] sm:w-[460px] h-[479px] rounded-[24px] bg-white border ${borderStyle} overflow-hidden snap-start shrink-0 transition-all duration-300 hover:shadow-md hover:scale-[1.005] select-none flex flex-col justify-between group/card`}>
      <div className="p-7 pl-10 relative z-10 flex flex-col max-w-[360px]">
        <span className={`text-[11px] font-semibold tracking-wider uppercase mb-1 ${tagColor}`}>
          {card.tag}
        </span>
        <h4 className={`text-[26px] sm:text-[28px] font-semibold tracking-tight leading-[30px] sm:leading-[34px] text-left ${titleColor}`}>
          {card.title}
        </h4>
        {card.description && (
          <p className={`text-[14px] leading-relaxed mt-3 text-left font-normal ${descColor}`}>
            {card.description}
          </p>
        )}
      </div>

      {/* បង្ហាញរូបភាពពេញផ្ទៃកាតពីក្រោយអក្សរ */}
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

// ២. Component សម្រាប់កាតតម្រួតពីរជាន់ (Stacked Layout Card)
function StackedExperienceCard({ card }) {
  return (
    <div className="flex flex-col gap-[14px] w-[380px] sm:w-[460px] h-[479px] snap-start shrink-0 select-none">
      {card.subCards.map((sub) => (
        <div 
          key={sub.id} 
          className="relative flex-1 rounded-[20px] bg-white border border-[#e8e8ed] overflow-hidden transition-all duration-300 hover:shadow-md hover:scale-[1.003] flex flex-col justify-between group/subcard"
        >
          <div className="p-6 pl-8 relative z-10 flex flex-col max-w-[260px]">
            <span className="text-[10px] font-semibold tracking-wider text-gray-400 uppercase mb-0.5">
              {sub.tag}
            </span>
            <h4 className="text-[20px] sm:text-[22px] font-semibold tracking-tight leading-[24px] text-left text-[#1d1d1f]">
              {sub.title}
            </h4>
          </div>

          <div className="absolute inset-0 z-0 flex items-center justify-end pointer-events-none pr-0">
            <img
              src={sub.img}
              alt={sub.title}
              className="w-[450px] h-[300px] object-contain transition-transform duration-500 group-hover/subcard:scale-[1.02]"
            />
          </div>
        </div>
      ))}
    </div>
  );
}