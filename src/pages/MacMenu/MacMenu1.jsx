import React from "react";
import AnnounceHeader from "./AnnounceHeader";
import TheMacHero from "./TheMacHero";
import Explore from "./Explore";
import WhyApple from "./WhyApple";

function MacMenu1() {
  return (
    <div className="pt-11 min-h-screen bg-[#f5f5f7] text-[#1d1d1f] font-sans antialiased w-full overflow-x-hidden">
      <AnnounceHeader />
       <TheMacHero/>
      
      <div className="mx-auto max-w-[89%] px-6 lg:px-0">
        <Explore/>
        <WhyApple/>
      </div>
    </div>
  );
}

export default MacMenu1;