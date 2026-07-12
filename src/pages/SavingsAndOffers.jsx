
import React from "react";
import { HorizontalSlider } from "./Store"; 

const savingsCards = [
  {
    id: 1,
    tag: "EDUCATION",
    title: "Save on a new Mac with special education pricing.²",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-40-education-202512?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=VUt1T3g3WG83Q1dPVEs1dDFaZHdacnBGaW5TWEpvSm5jR29ZMURITXZPOGQxYXI4a0J1dmxHNzJaeEFoWmI5RDJTaS9RTTYzTWg5VUhTM1Ara0JyS0szRFFUa0hvS3pxUHNNNWI2VTNOV3M",
    isDarkTheme: false,
  },
  {
    id: 2,
    tag: "SMALL BUSINESS",
    title: "Simple solutions for all the ways you work.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-40-business-202506?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=TnhQWVNpM3hsUmE1YlJOTTJnYm5mVUdCZTdVL3grY1JpM0hacFNZZmFrWnd5b1hKY2V3T2V4alVLZTRFVTdOK0tRNjVHZTlIV04vVjZjbEh0Rm5SYzR2Z2o4b2VQNUVQSXl6QjBMcURpOHc",
    isDarkTheme: true,
  },
  {
    id: 3,
    tag: "GOVERNMENT",
    title: "Special pricing is available for state, local, and federal agencies.²",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-40-gov-202503?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=ZTBVTXBCbUlFR0tzcUZHaFhibW5UVUxqZ3lDaGlIUCt6S3RkRDhPazgzT3kvYVhHUzZnbTdlRlQ4aGhRUUYyVUNwdjgxNzdjcnlUVy83S0w5bWJ2TnZQRStXNnppcUtJUmhEaHRVeGM5UkE",
    isDarkTheme: false,
  },
  {
    id: 4,
    tag: "VETERANS AND MILITARY",
    title: "Active duty, veterans, and family members save 10% on products for exclusive use.²",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-veteran-202509?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=d01hbVp2TEdlMG9Memp2N1liaFpVK0VtZHJxNHNCcDlSRnVhZkNXeTJhc2QxYXI4a0J1dmxHNzJaeEFoWmI5RDJTaS9RTTYzTWg5VUhTM1Ara0JyS09TMGQyVTZTbVh5ekYyU1hDTHhHdE0",
    isDarkTheme: false,
  }
];

export default function SavingsAndOffers() {
  return (
    <div className="space-y-6 w-full">
      {/* Section Title */}
      <h3 className="text-[24px] md:text-[28px] font-semibold tracking-tight text-[#6e6e73]">
        <span className="text-[#1d1d1f]">Savings and offers.</span> Exclusive deals, special stores and more.
      </h3>

      {/* Slider */}
      <HorizontalSlider containerClass="gap-5 pb-5">
        {savingsCards.map((card) => (
          <SavingsCard key={card.id} card={card} />
        ))}
      </HorizontalSlider>
    </div>
  );
}

function SavingsCard({ card }) {
  return (
    <div 
      className={`relative w-[340px] sm:w-[400px] h-[500px] rounded-[24px] border overflow-hidden snap-start shrink-0 transition-all duration-300 hover:shadow-md hover:scale-[1.005] select-none flex flex-col justify-between group
        ${card.isDarkTheme ? "bg-black border-transparent" : "bg-white border-[#e8e8ed]"}
      `}
    >
      {/* Upper Typography Layer */}
      <div className="p-9 pl-10 relative z-10 flex flex-col max-w-[345px]">
        <span className={`text-[12px] font-semibold tracking-wider uppercase mb-1
          ${card.isDarkTheme ? "text-[#9a9a9e]" : "text-gray-800"}
        `}>
          {card.tag}
        </span>
        
        <h4 className={`text-[24px] sm:text-[28px] font-semibold tracking-tight leading-[30px] sm:leading-[34px] mt-1 text-left
          ${card.isDarkTheme ? "text-[#f5f5f7]" : "text-[#1d1d1f]"}
        `}>
          {card.title}
        </h4>
      </div>

      {/* Media Asset Asset Background */}
      <div className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none">
        <img
          src={card.img}
          alt={card.title}
          className="w-full h-full object-cover object-bottom transition-transform duration-500 group-hover:scale-[1.01]"
        />
      </div>

    </div>
  );
}