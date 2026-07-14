// AllModel1.jsx
import React, { useState, useRef } from "react";

const ipadModels = [
  {
    id: "ipad-pro",
    title: "iPad Pro",
    colors: ["#232426", "#E3E4E5"], 
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-card-40-pro-202405?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=aDFmUE8yL0ZIcG1CVlF3ejZoSTBUbTF4V1ZRMnQ3VUZxOW9XbE84blhkazJzUm9kdjFCbFNETWhUL0NFUjdrYUVnTTR0dy9GMG1wdkgrK3EyQ1ZzOVk5emI2RVlYSVRkMzZLOS9VQVhQeWM",
    price: "From $1999 or $99.91/mo. for 12 mo.Δ",
    hasHoverEffect: true,
  },
  {
    id: "ipad-air",
    title: "iPad Air",
    colors: ["#232426", "#E3E4E5", "#D1D5DB", "#E0E7FF"], 
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-card-40-air-202405?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=U0psRWR6Z2xkY3dwRTZYSCtyQXNFVzF4V1ZRMnQ3VUZxOW9XbE84blhkazJzUm9kdjFCbFNETWhUL0NFUjdrYUVnTTR0dy9GMG1wdkgrK3EyQ1ZzOWE5aFE4VmtCSkdBUVZYOWx3MEhPK1E",
    price: "From $599 or $49.91/mo. for 12 mo.Δ",
    hasHoverEffect: true,
  },
  {
    id: "ipad-1",
    title: "iPad (10th generation)",
    colors: ["#4B5563", "#FCA5A5", "#FDE047", "#3B82F6"], 
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-card-40-ipad-202210?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1664912195431",
    price: "From $349 or $29.08/mo. for 12 mo.Δ",
    hasHoverEffect: true,
  },
  {
    id: "ipad-mini",
    title: "iPad mini",
    colors: ["#4B5563", "#E5E7EB", "#E0E7FF", "#FCA5A5"], 
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-card-40-ipad-mini-202109?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1630612132000",
    price: "From $499 or $41.58/mo. for 12 mo.Δ",
    hasHoverEffect: true,
  },
];

export default function AllModel1() {
  const sliderRef = useRef(null);

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 404; 
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
   
    <div className="space-y-6 w-full mt-10 relative group/slider">
      
      {/* ផ្នែក All Models Slider */}
      <div className="space-y-6">
        <h3 className="text-[24px] md:text-[28px] font-semibold tracking-tight text-[#6e6e73]">
          <span className="text-[#1d1d1f]">All models.</span> Take your pick.
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
            {ipadModels.map((ipad, index) => (
              <IpadModelCard key={`${ipad.id}-${index}`} ipad={ipad} />
            ))}
          </div>
        </div>
      </div>

      {/* ================= ផ្នែក Shopping Guides (ហៅមកប្រើនៅក្រោម All Model ធម្មតា) ================= */}
      {/* ភ្ជាប់ ID សម្រាប់ឱ្យប៊ូតុងរុញអូសអេក្រង់ (Scroll) រកឃើញទីតាំង និងថែម scroll-mt-24 ដើម្បីកុំឱ្យបុកជាប់ Navbar ខាងលើពេក */}
      <div id="shopping-guides-section" className="scroll-mt-24 w-full">
       
      </div>

    </div>
  );
}

function IpadModelCard({ ipad }) {
  const [selectedColor, setSelectedColor] = useState(0);

  return (
    <div className="relative w-[384px] h-[460px] rounded-[25px] bg-white border border-[#e8e8ed] px-6 pt-6 pb-6 flex flex-col justify-between snap-start shrink-0 transition-all duration-300 hover:shadow-md select-none group">
      <div className="h-16 flex-shrink-0">
        {ipad.tag ? (
          <span className="text-[12px] font-bold tracking-wider text-[#bf4800] uppercase block mb-1">
            {ipad.tag}
          </span>
        ) : (
          <div className="h-[18px]" />
        )}
        <h4 className="text-[22px] sm:text-[24px] font-semibold tracking-tight text-[#1d1d1f] line-clamp-1">
          {ipad.title}
        </h4>
      </div>

      <div className="relative flex-1 flex items-center justify-center overflow-hidden my-4 min-h-[200px]">
        <img src={ipad.img} alt={ipad.title} className="w-auto max-h-[245px] object-contain transition-transform duration-500 group-hover:scale-[1.02]" />
        {ipad.hasHoverEffect && (
          <div className="absolute inset-0 flex items-end justify-center pb-4 bg-transparent pointer-events-none">
            <button className="bg-[#1d1d1f]/90 text-white text-[14px] font-medium px-6 py-2.5 rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-auto shadow-sm hover:bg-[#0066cc]">
              Take a closer look
            </button>
          </div>
        )}
      </div>

      <div className="space-y-4 flex-shrink-0">
        <div className="flex justify-center gap-2 h-4 items-center">
          {ipad.colors.map((color, index) => (
            <button key={index} onClick={() => setSelectedColor(index)} style={{ backgroundColor: color }} aria-label={`Select color ${index + 1}`} className={`w-3 h-3 rounded-full transition-all ${selectedColor === index ? "ring-2 ring-offset-2 ring-gray-400" : " cursor-pointer hover:opacity-80"}`} />
          ))}
        </div>
        <div className="flex items-center justify-between pt-3">
          <p className="text-[12px] leading-[16px] font-normal text-[#1d1d1f] max-w-[160px] text-left">{ipad.price}</p>
          <button className="bg-[#0071e3] text-white text-[14px] font-medium px-4 py-1.5 rounded-full hover:bg-[#0077ed] transition-colors flex-shrink-0">Buy</button>
        </div>
      </div>
    </div>
  );
}