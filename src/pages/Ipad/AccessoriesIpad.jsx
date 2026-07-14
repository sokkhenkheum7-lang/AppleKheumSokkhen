// AccessoriesIpad.jsx
import React, { useRef } from "react";

const accessoryItems = [
  {
    id: 1,
    type: "hero", 
    title: "Everyday essentials.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-card-40-story-202410_GEO_US?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=NkNNeDUwRURoRjczV2JpeGx0N2VzMHhCZC95Y3RBYjVvM0s5U2Y2czJldHFTRjNxbmh1UnU2R29ibGdpZUFXc0prY3crUWRsN1dqVjRnMHR5S1hVbkRaWUhUZjlrTGtUQ3J4WFJ2a0RKQVZuYVAyTW9FekJHekpwYk5kVWhPN2Y",
  },
  {
    id: 2,
    type: "product",
    tag: "Free Engraving",
    tagColor: "text-[#b64400]", 
    title: "Apple Pencil Pro",
    price: "$129.00",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX2D3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=RjlhOFBxWlM5RUNuemg5bVk0UkM1ZllvYS9naDJJdU9KTWdGWjhKWFRmTDg1MEFKWWNMUG9Rb3dXVmNIY08yN3BPSDJJa3AzaC96dU9WMVFWZ2lmZlE",
  },
  {
    id: 3,
    type: "product",
    hasColors: true,
    colors: ["#f5f5f7", "#3c3d3a"], 
    title: "Magic Keyboard for iPad Air 13-inch (M4) - US English -...",
    price: "$319.00",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGYY4?wid=400&hei=400&fmt=jpeg&qlt=90&.v=cXE4eWx0VnJZVVhyNEgrSHdoTXBFL1lvYS9naDJJdU9KTWdGWjhKWFRmTDIxVS8wcGRSdlR3MXU5L0FlWS81Yy9tbVBaOEJXZFoxUWFzTHlRSm1CR1E",
  },
  {
    id: 4,
    type: "product",
    hasColors: true,
    colors: ["#f5f5f7", "#3c3d3a"], 
    title: "Magic Keyboard for iPad Air 13-inch (M4) - US English -...",
    price: "$319.00",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGKN4?wid=400&hei=400&fmt=jpeg&qlt=90&.v=OXg3UUZsRGMvSHJySWlFcGJveGFIL1lvYS9naDJJdU9KTWdGWjhKWFRmSUMwU1RRZHF2ZXh6bndTY25FVXlJSnBJeGNrTGFSQWdhbXJCNzF6VnhLS1E",
  },
  {
    id: 5,
    type: "product",
    hasColors: true,
    colors: ["#f5f5f7", "#3c3d3a"], 
    title: "Magic Keyboard for iPad Air 13-inch (M4) - US English -...",
    price: "$319.00",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/HS7H2?wid=400&hei=400&fmt=jpeg&qlt=90&.v=Y0IyWjFXZWN4Z0JIUWNPdFRCblJkL1lvYS9naDJJdU9KTWdGWjhKWFRmSXZ3WVkxSVUvVFdpMGpxK2ZyQytFdlNYR2JXNmN1TElxMkh4QzIvT3ZOUFE",
  },
  {
    id: 6,
    type: "product",
    hasColors: true,
    colors: ["#f5f5f7", "#3c3d3a"], 
    title: "Magic Keyboard for iPad Air 13-inch (M4) - US English -...",
    price: "$319.00",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MUWA3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=dDQxZ0hLYUZKeTc1ZmxnUzIrSENSL1lvYS9naDJJdU9KTWdGWjhKWFRmSnErWllCVTNIWVM4T0g2N2FVYlZsbTlqYzV0cmdLUGhTVmJLaWVKTjlNU0E",
  },
  {
    id: 7,
    type: "product",
    hasColors: true,
    colors: ["#f5f5f7", "#3c3d3a"], 
    title: "Magic Keyboard for iPad Air 13-inch (M4) - US English -...",
    price: "$319.00",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MC2T4?wid=400&hei=400&fmt=jpeg&qlt=90&.v=MGxlWnJiU0ZHNU5LUXk5QWx3MHdSZllvYS9naDJJdU9KTWdGWjhKWFRmS2VrNDBqbmhQbDJSc0ZFTnp0c0tScEY4Q3RkNTZxUG5zUXZ4ZVgvMjdjclE",
  },
  {
    id: 8,
    type: "product",
    hasColors: true,
    colors: ["#f5f5f7", "#3c3d3a"], 
    title: "Magic Keyboard for iPad Air 13-inch (M4) - US English -...",
    price: "$319.00",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/HSJT2?wid=400&hei=400&fmt=jpeg&qlt=90&.v=YngraVFtSG1mVUlYR0ZzRVhHWHNFZllvYS9naDJJdU9KTWdGWjhKWFRmS29aUUFBeFdiajUza3Vja1p3M1B2V214L1k5YmJnL3N3bkprNmV1QmloY2c",
  },
  {
    id: 9,
    type: "product",
    hasColors: true,
    colors: ["#f5f5f7", "#3c3d3a"], 
    title: "Magic Keyboard for iPad Air 13-inch (M4) - US English -...",
    price: "$319.00",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MHX94?wid=400&hei=400&fmt=jpeg&qlt=90&.v=Y0hRdnY2SG45YU9XUWIzWUQrR0NjdllvYS9naDJJdU9KTWdGWjhKWFRmS094RXl2ZHFSZmRmazJPNjF5NnBWcnk4Z1dSc2g4Y1hwdENBNUp5aVo0bEE",
  },
  {
    id: 10,
    type: "product",
    hasColors: true,
    colors: ["#f5f5f7", "#3c3d3a"], 
    title: "Magic Keyboard for iPad Air 13-inch (M4) - US English -...",
    price: "$319.00",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MQDP3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=NWlheCszNWJwa3htMEdTMnFnNHN4ZllvYS9naDJJdU9KTWdGWjhKWFRmS0UzYlVvb1dXZStiampVb0tTNi9PbDdRSzFTRmxHOHhSMEpndHVFeHZ3Tnc",
  },
];

export default function AccessoriesIpad() {
  const sliderRef = useRef(null);

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 360; 
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="space-y-6 w-full mt-14 relative group/slider">
      {/* Section Header */}
      <h3 className="text-[24px] md:text-[28px] font-semibold tracking-tight text-[#6e6e73]">
        <span className="text-[#1d1d1f]">iPad accessories.</span> Work and create with ease.
      </h3>

      <div className="relative w-full">
      
        <button
          onClick={() => handleScroll("left")}
          aria-label="Scroll left"
          className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 
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

      
        <button
          onClick={() => handleScroll("right")}
          aria-label="Scroll right"
          className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 
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

        
        <div 
          ref={sliderRef}
          className="flex gap-5 pb-5 overflow-x-auto snap-x snap-mandatory 
                     [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden 
                     w-full scroll-smooth"
        >
          {accessoryItems.map((item) => (
            <AccessoryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// Card Sub-Component 
// ==========================================
function AccessoryCard({ item }) {
  
  if (item.type === "hero") {
    return (
      <div className="relative w-[400px] h-[500px] rounded-[29px] bg-white border border-[#e8e8ed] overflow-hidden snap-start shrink-0 transition-all duration-300 hover:shadow-md select-none flex flex-col justify-between">
        <div className="pt-10 px-8 text-left">
          <h4 className="text-[28px] font-semibold tracking-tight text-[#1d1d1f] leading-tight">
            {item.title}
          </h4>
        </div>
        <div className="w-full flex justify-center items-end pointer-events-none mt-auto overflow-hidden">
          <img
            src={item.img}
            alt={item.title}
            className="w-full object-cover object-bottom"
          />
        </div>
      </div>
    );
  }

 
  return (
    <div className="relative w-[315px] h-[500px] rounded-[20px] bg-white border border-[#e8e8ed] overflow-hidden snap-start shrink-0 transition-all duration-300 hover:shadow-md select-none flex flex-col justify-between p-8">
      
     
      <div className="w-full h-[220px] flex items-center justify-center pointer-events-none mt-4">
        <img
          src={item.img}
          alt={item.title}
          className="max-h-[230px] object-contain"
        />
      </div>

     
      <div className="space-y-4 text-left mt-auto">
        
       
        {item.hasColors && (
          <div className="flex gap-2 justify-center mb-17">
            {item.colors.map((color, idx) => (
              <span 
                key={idx} 
                style={{ backgroundColor: color }} 
                className="w-2.5 h-2.5 rounded-full border-gray-300 shadow-inner"
              />
            ))}
          </div>
        )}
        {item.tag && (
          <span className={`text-[12px] font-medium ${item.tagColor}`}>
            {item.tag}
          </span>
        )}

       
        <div className="space-y-2">
          <h4 className="text-[17px] font-semibold tracking-tight text-[#1d1d1f] leading-snug line-clamp-2 min-h-[48px]">
            {item.title}
          </h4>
          <p className="text-[14px] text-[#1d1d1f] font-normal">
            {item.price}
          </p>
        </div>
      </div>

    </div>
  );
}