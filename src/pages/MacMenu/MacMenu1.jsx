import React from "react";
import AnnounceHeader from "./AnnounceHeader";
import TheMacHero from "./TheMacHero";
import Explore from "./Explore";
import WhyApple from "./WhyApple";
import GetToKnow from "./GetToKnow";
import SwitchToMac from "./SwitchToMac";
import MacEssentials from "./MacEssentials";
import PageUnlock from "./PageUnlock";
import MacTitle from "./MacTitle";
import Footer from "../../components/layout/Footer";


function MacMenu1() {
  return (
    <div className="pt-11 min-h-screen bg-white text-[#1d1d1f] font-sans antialiased w-full overflow-x-hidden">
      <AnnounceHeader />   
      <TheMacHero />
      <Explore />
      <WhyApple />
      <GetToKnow />
      <SwitchToMac />
      <MacEssentials/>
      <PageUnlock/>
      <MacTitle/>
      <Footer/>
    </div>

  );
}

export default MacMenu1;