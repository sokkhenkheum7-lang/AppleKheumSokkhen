
import React from "react";

export default function AppleStoreDifference() {
  return (
    <div className="space-y-6 w-full">
      {/* Section Header */}
      <h3 className="text-[24px] md:text-[28px] font-semibold tracking-tight text-[#6e6e73]">
        <span className="text-[#1d1d1f]">The Apple Store difference.</span> Even more reasons to shop with us.
      </h3>

      {/* Main Wide Card Container */}
      <div className="relative w-[940px] min-h-[500px] md:h-[520px] rounded-[24px] bg-white border border-[#e8e8ed] overflow-hidden select-none flex flex-col justify-between transition-all duration-300 hover:shadow-md">
        
        {/* Top Centered Content */}
        <div className="pt-12 pb-6 px-6 text-center z-10 flex flex-col items-center max-w-2xl mx-auto">
          <h4 className="text-[28px] md:text-[32px] font-semibold tracking-tight text-[#1d1d1f] leading-tight">
            Customize your Mac.
          </h4>
          <p className="text-[14px] md:text-[16px] text-[#1d1d1f] font-normal mt-2 max-w-md">
            Choose your chip, memory, storage, and even color.
          </p>
        </div>

        {/* Bottom Hardware Showcase Image */}
        <div className="w-full flex justify-center items-end pointer-events-none mt-auto overflow-hidden">
          <img
            src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-100-customize-202603?wid=1960&hei=740&fmt=png-alpha&.v=WGVJR1JzeVlHQndDQ0hPeUcxZEhIVVNmTzIwVEdWL0ZUQlpNR2hpaFowcHJSYTIyTmVtUXQ0Q1I1cVhOOGlKMDAzOVFHb3N0MkVmS01ZcFh0d1Y4R2hlODcrV3lMcmtBTFFKYWh5cWxTS28" 
            alt="Customized Mac lineup showcasing colors, desktop displays, and peripherals"
            className="w-full max-w-[960px] object-contain object-bottom scale-[1.02] origin-bottom transition-transform duration-500 hover:scale-[1.03]"
          />
        </div>

      </div>
    </div>
  );
}