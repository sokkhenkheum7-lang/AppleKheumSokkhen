import React from "react";

export default function SwitchToMac() {
  return (
    <section className="bg-[#f5f5f7] pt-16 pb-16 w-full overflow-hidden font-sans antialiased">
      <div className="max-w-[1264px] mx-auto px-6 md:px-0">
        
        {/* Title Area */}
        <div className="mb-10">
          <h2 className="text-[32px] md:text-[48px] font-semibold text-[#1d1d1f] tracking-tight leading-tight">
            Switch to Mac.
          </h2>
        </div>

        {/* Grid Layout Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          
          {/* Card 1: Give us the old. Save on the new. */}
          <div className="bg-white rounded-3xl pt-8 px-0 pb-0 md:pt-12 flex flex-col justify-between h-[480px] md:h-[560px] relative overflow-hidden group shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-all duration-500 ease-out">
            
            <div className="text-center max-w-[360px] mx-auto z-10 px-8">
              <h3 className="text-[24px] md:text-[28px] font-semibold text-[#1d1d1f] tracking-tight leading-tight mb-3">
                Give us the old. Save on the new.
              </h3>
              <p className="text-[12px] md:text-[14px] text-gray-500 leading-relaxed mb-4">
                With Apple Trade In, you can get a great value for your current device and apply it toward a new one. If your device isn't eligible for credit, we'll recycle it for free.
              </p>
              <a 
                href="#" 
                className="text-[#0066cc] hover:underline text-[14px] md:text-[16px] font-normal inline-flex items-center group-hover:text-[#0077ed] transition-colors"
              >
                See what your device is worth
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </a>
            </div>

            <div className="absolute inset-x-0 bottom-0 w-full flex justify-center items-end pointer-events-none">
              <img 
                src="https://www.apple.com/assets-www/en_WW/mac/03_banner_card_2up/large/trade_in_f0404b799_2x.png" 
                alt="Hands holding old MacBook and new MacBook box" 
                className="w-full h-auto object-cover object-bottom transition-transform duration-700 ease-out group-hover:scale-103"
              />
            </div>
          </div>

          {/* Card 2: Mac does that. */}
          <div className="bg-white rounded-3xl pt-8 px-0 pb-0 md:pt-12 flex flex-col justify-between h-[480px] md:h-[560px] relative overflow-hidden group shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] transition-all duration-500 ease-out">
            
            <div className="text-center max-w-[360px] mx-auto z-10 px-8">
              <h3 className="text-[24px] md:text-[28px] font-semibold text-[#1d1d1f] tracking-tight leading-tight mb-3">
                Mac does that.
              </h3>
              <p className="text-[12px] md:text-[14px] text-gray-500 leading-relaxed mb-4">
                See how easy it is to move to Mac.
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
                src="https://www.apple.com/assets-www/en_WW/mac/03_banner_card_2up/large/mac_does_that_118f02192_2x.png" 
                alt="Mac screen demonstrating easy transfer workflow" 
                className="w-full h-auto object-cover object-bottom transition-transform duration-700 ease-out group-hover:scale-103"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}