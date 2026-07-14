// AppleStoreDifference.jsx
import React from "react";

export default function AppleStoreDifference() {
  return (
    <div className="space-y-6 w-full">
      {/* Section Header */}
      <h3 className="text-[24px] md:text-[28px] font-semibold tracking-tight text-[#6e6e73]">
        <span className="text-[#1d1d1f]">The Apple Store difference.</span> Even more reasons to shop with us.
      </h3>

      {/* Main Card Container with fixed dimensions matching Picture 1 */}
      <div className="relative w-full max-w-[480px] h-[500px] rounded-[24px] bg-white border border-[#e8e8ed] overflow-hidden select-none flex flex-col justify-between transition-all duration-300 hover:shadow-md">
        
        {/* Top-Left Content Group */}
        <div className="pt-10 pb-4 px-8 sm:px-10 text-left z-10 flex flex-col items-start">
          <h4 className="text-[26px] sm:text-[28px] font-semibold tracking-tight text-[#1d1d1f] leading-[34px]">
            Personalize your iPad with<br />a message or emoji.
          </h4>
        </div>

        {/* FIXED: Absolute-bottom container to force the image to be full-width and fill the card edges */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none overflow-hidden">
          <img
            src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-card-50-engraving-202410?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=RGk4bzlYREc5bzlaZEIvci96NDZ1UnhqSW5KRW96cjJKREZYM2hOcHR5bWo2Z1ptREdBenZRTjZuSCtBemFnUTRHeXB5TnVsU3R6Qjd0Y2JzbURyWEtLbFZBWmZQemxRMzFiQ2NoZTZETHgrYWpGdS9XeFgvbS9ITnNYOEhYaG4" 
            alt="Engraved purple iPad and Apple Pencil Pro detail shot"
            className="w-full h-full object-cover object-bottom transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>

      </div>
    </div>
  );
}