import React from "react";

export default function MacEssentials() {
  return (
    <section className="bg-[#f5f5f7] pt-1 pb-16 w-full overflow-hidden font-sans antialiased">
      <div className="max-w-[1000px] mx-auto px-6 md:px-0">
        
        {/* Title Area */}
        <div className="mb-10">
          <h2 className="text-[32px] md:text-[48px] font-semibold text-[#1d1d1f] tracking-tight leading-tight">
            Mac essentials.
          </h2>
        </div>

        {/* Grid Layout Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          
          {/* Card 1: Mac accessories */}
          <div className="bg-white rounded-3xl pt-8 px-0 pb-0 md:pt-12 flex flex-col justify-between h-[480px] md:h-[560px] relative overflow-hidden group shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-all duration-500 ease-out">
            
            <div className="text-center max-w-[360px] mx-auto z-10 px-8">
              <h3 className="text-[24px] md:text-[28px] font-semibold text-[#1d1d1f] tracking-tight leading-tight mb-3">
                Mac accessories
              </h3>
              <p className="text-[12px] md:text-[14px] text-gray-500 leading-relaxed mb-4">
                Explore keyboards, mice, and other essentials.
              </p>
              <a 
                href="#" 
                className="text-[#0066cc] hover:underline text-[14px] md:text-[16px] font-normal inline-flex items-center group-hover:text-[#0077ed] transition-colors"
              >
                Shop Mac accessories
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </a>
            </div>

            <div className="absolute inset-x-0 bottom-0 w-full flex justify-center items-end pointer-events-none">
              <img 
                src="https://www.apple.com/assets-www/en_WW/mac/03_banner_card_2up/large/accessories_c0081b8ce_2x.png" 
                alt="Magic Keyboard, Magic Mouse, Magic Trackpad, and AirPods" 
                className="w-full h-auto object-cover object-bottom transition-transform duration-700 ease-out group-hover:scale-103"
              />
            </div>
          </div>

          {/* Card 2: Studio Display */}
          <div className="bg-white rounded-3xl pt-8 px-0 pb-0 md:pt-12 flex flex-col justify-between h-[480px] md:h-[560px] relative overflow-hidden group shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-all duration-500 ease-out">
            
            <div className="text-center max-w-[360px] mx-auto z-10 px-8">
              <h3 className="text-[24px] md:text-[28px] font-semibold text-[#1d1d1f] tracking-tight leading-tight mb-3">
                Studio Display
              </h3>
              <p className="text-[12px] md:text-[14px] text-gray-500 leading-relaxed mb-4">
                The 27-inch 5K Retina display pairs beautifully with Mac.
              </p>
              <a 
                href="#" 
                className="text-[#0066cc] hover:underline text-[14px] md:text-[16px] font-normal inline-flex items-center group-hover:text-[#0077ed] transition-colors"
              >
                Learn more
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </a>
            </div>

            <div className="absolute inset-x-0 bottom-0 w-full flex justify-center items-end pointer-events-none">
              <img 
                src="https://www.apple.com/assets-www/en_WW/mac/03_banner_card_2up/large/display_79e216ce4_2x.png" 
                alt="Apple Studio Display with colorful screen graphics" 
                className="w-full h-auto object-cover object-bottom transition-transform duration-700 ease-out group-hover:scale-103"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}