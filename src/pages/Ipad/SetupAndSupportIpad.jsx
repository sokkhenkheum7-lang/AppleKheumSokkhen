// SetupAndSupportIpad.jsx
import React, { useRef } from "react";

const supportCards = [
  {
    id: 1,
    tag: "APPLECARE",
    title: "Handled with AppleCare.",
    description: "Protect your iPad with AppleCare+ with Theft and Loss. Or protect multiple products with AppleCare One.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-card-50-applecare-202311_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=QkF3d3h0Wm10ZzJ3L2t5cnNXMkdiRXBmam9nUmR3bjF3REVTd3VJcEwybGliOTBDYU5saG5qVVFqcjlWTi9hWnFmS3YvQ0doSFZENndQR0J4TTRqbnpLSjUwMGVwY1Y2MG5oSi9mdUgvTkpXbW9naVRaYk52T0tGSVB4ZENRZWw",
    isPlayable: false,
  },
  {
    id: 2,
    tag: "WATCH AND LEARN",
    title: "How AppleCare protects your iPad.",
    description: "Get a quick overview of what AppleCare+ and AppleCare One cover.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-card-50-applecare-one-video-card-202511?wid=960&hei=1000&fmt=png-alpha&.v=QkF3d3h0Wm10ZzJ3L2t5cnNXMkdiRGU3b3lPQ2k0MUtJNTAwTWZBSzB1MG13VFNXYWVJcWpybTNpWHlYUHJnR0FNR1RJN3ZTRU0xNTN2dFc2ZitxSnA4TndFSGFWdWZMa21CRXlrUm45emJKbDA3OTRLdWoxYkwrandNMW5rT2k",
    isPlayable: true,
  },
  {
    id: 3,
    tag: "PERSONAL SETUP",
    title: "Set up your new iPad with help from a Specialist.",
    description: "Let us guide you through data transfer, new features, and online, one-on-one sessions.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-card-50-setup-beyond-202408?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=Y2FBTVNSYktPQ3hOUm5wUVZBWW05WlQ5SkVLYlgwRTIrMkVCVDdQNDhGajJtaE9nejNBS0FrclhJMVJoVXB1MUprY3crUWRsN1dqVjRnMHR5S1hVbkI2NW1aN3VvVWZrazdOc2xHT20rL2w0QWI4N2RiSWRXTk0zNjRiMUdIY3M",
    isPlayable: false,
  },
  {
    id: 4,
    tag: "TODAY AT APPLE",
    title: "Join us to discover the best of iPad.",
    description: "Get started or explore what's new in free sessions at the Apple Store.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-card-50-quick-start-202509?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=M3JjbmVGWW96RCs5eUp0d2Q2Z0lhZUJmVGV4QjArZk1naVZqMmtxZEVOY2srNUZoNXdjRTN6Qk9kZzJzT0IxWnNtS0NkZnlUKzBRdlpRai9zMDR0cTZpbTBWUEtIRUhLbVJkNlR6VjhjU3p6S1RnRUpHeEFrTU9GQ0x6cDc5alk",
    isPlayable: false,
  },
  {
    id: 5,
    tag: "TODAY AT APPLE",
    title: "Join us to discover the best of iPad.",
    description: "Get started or explore what's new in free sessions at the Apple Store.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-card-50-data-transfer-202504?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=d1l4bzMrK2t1VVhDYm4zK0kyWGVnaUFBeERtelVPeXVYams0Sk5kallxZnJJVkxtcTFUYklXb3B2bWwxb1hOOFpwRE93ZVBDaGlEa25QZUpFTG9OUTJsS05tVlpUM1dwTCtRS1lCa1hPR0J5UjdmWHdnaGx0a052RzdSU1l4WjU",
    isPlayable: false,
  },
  {
    id: 6,
    tag: "TODAY AT APPLE",
    title: "Join us to discover the best of iPad.",
    description: "Get started or explore what's new in free sessions at the Apple Store.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-card-50-taa-202604?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=QitLUjg0Nk9HOVdDVjEweGFXNG5EY0J1V3dvVktGYkVJd0IwUzV6ck95dTdvcElKd0xhanU5QXNMN3gwbHkyMEJJeUFyK1dSR1VFclViVm5zcmtVTDZQSWdvUmVERUFjVFloZDNFUGFVbDQ",
    isPlayable: false,
  },
];

export default function SetupAndSupportIpad() {
  const scrollContainerRef = useRef(null);

  // មុខងារសម្រាប់ចុចរមូរឆ្វេងស្តាំ
  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 480; // ប្រវែងរមូរ (ទំហំកាត + គម្លាត Gap)
      if (direction === "left") {
        scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="space-y-6 w-full relative group">
      {/* ផ្នែកចំណងជើង */}
      <h3 className="text-[24px] md:text-[28px] font-semibold tracking-tight text-[#6e6e73]">
        <span className="text-[#1d1d1f]">Setup and support.</span> Our Specialists are here to help.
      </h3>

      {/* wrapper សម្រាប់ដាក់ប៊ូតុងអណ្តែត */}
      <div className="relative w-full">
        
        {/* 1. ប៊ូតុងឆ្វេង (Left Floating Arrow Button) */}
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#e8e8ed]/90 hover:bg-[#d2d2d7] active:bg-[#b0b0b5] flex items-center justify-center text-[#1d1d1f] shadow-md transition-all duration-300 z-20 cursor-pointer opacity-0 group-hover:opacity-100 backdrop-blur-sm"
          aria-label="Scroll left"
        >
          <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* 2. ប៊ូតុងស្តាំ (Right Floating Arrow Button) */}
        <button
          onClick={() => handleScroll("right")}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#e8e8ed]/90 hover:bg-[#d2d2d7] active:bg-[#b0b0b5] flex items-center justify-center text-[#1d1d1f] shadow-md transition-all duration-300 z-20 cursor-pointer opacity-0 group-hover:opacity-100 backdrop-blur-sm"
          aria-label="Scroll right"
        >
          <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Scroll Container សម្រាប់បង្ហាញកាត */}
        <div 
          ref={scrollContainerRef}
          className="flex flex-row overflow-x-auto gap-5 pb-5 scrollbar-none snap-x snap-mandatory w-full scroll-smooth"
        >
          {supportCards.map((card) => (
            <SupportCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SupportCard({ card }) {
  return (
    <div className="relative w-[380px] sm:w-[460px] h-[500px] rounded-[24px] bg-white border border-[#e8e8ed] overflow-hidden snap-start shrink-0 transition-all duration-300 hover:shadow-md hover:scale-[1.005] select-none flex flex-col justify-between group/card">
      
      {/* Upper Content Layer */}
      <div className="p-7 pl-10 relative z-10 flex flex-col max-w-[340px]">
        <span className="text-[11px] font-semibold tracking-wider text-gray-800 uppercase mb-1">
          {card.tag}
        </span>
        <h4 className="text-[26px] sm:text-[28px] font-semibold tracking-tight leading-[30px] sm:leading-[34px] text-left text-[#1d1d1f]">
          {card.title}
        </h4>
        
        {!card.isPlayable && (
          <p className="text-[14px] text-gray-800 leading-relaxed mt-3 text-left font-normal">
            {card.description}
          </p>
        )}
      </div>

      {/* Image Layer */}
      <div className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none">
        <img
          src={card.img}
          alt={card.title}
          className="w-full h-full object-cover object-bottom transition-transform duration-500 group-hover/card:scale-[1.01]"
        />
      </div>

      {/* Bottom overlay for video playable cards */}
      {card.isPlayable && (
        <div className="relative z-10 w-full flex items-center justify-between p-4 pl-10 bg-white border-t border-[#e8e8ed]">
          <p className="text-[14px] text-[#1d1d1f] font-normal leading-normal max-w-[270px] text-left">
            {card.description}
          </p>
          <button 
            aria-label="Play video"
            className="w-10 h-10 rounded-full bg-[#f5f5f7] border border-[#d2d2d7] flex items-center justify-center text-[#1d1d1f] hover:bg-white transition-colors shrink-0 shadow-sm"
          >
            <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}