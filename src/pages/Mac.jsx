// Mac.jsx
import React, { useState, useRef, useEffect } from "react";
import Footer from "../components/layout/Footer";
import AnnouncementRibbon from "./AnnouncementRibbon";
import StoreHeader from "./StoreHeader";
import MacSubNav from "./MacSubNav";
import AllModels from "./AllModels";
import ShoppingGuides from "./ShoppingGuides";
import WaytosaveCards from "./way-save";
import AppleStoreDifference from "./AppleStoreDifference";
import MacAccessories from "./MacAccessories";
import SetupAndSupport from "./SetupAndSupport";
import MacExperience from "./MacExperience";
import SavingsAndOffers from "./SavingsAndOffers";

export default function Mac() {
  const [activeTab, setActiveTab] = useState(0);

  // 1. Refs for managing all layout sections
  const allModelsRef = useRef(null);
  const shoppingGuidesRef = useRef(null);
  const waysToSaveRef = useRef(null);
  const appleStoreDifferenceRef = useRef(null);
  const accessoriesRef = useRef(null);
  const setupSupportRef = useRef(null);
  const macExperienceRef = useRef(null);
  const savingsAndOffersRef = useRef(null); // FIXED: camelCase naming prevents collision with component import

  // 2. Smooth Scroll Function when clicking individual tabs
  const handleTabClick = (index) => {
    setActiveTab(index);
    const config = { behavior: "smooth", block: "start" };
    const yOffset = -80; // Offset spacing for the sticky sub-navigation banner

    if (index === 0 && allModelsRef.current) {
      allModelsRef.current.scrollIntoView(config);
    } else if (index === 1 && shoppingGuidesRef.current) {
      const y = shoppingGuidesRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else if (index === 2 && waysToSaveRef.current) {
      const y = waysToSaveRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else if (index === 3 && appleStoreDifferenceRef.current) {
      const y = appleStoreDifferenceRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else if (index === 4 && accessoriesRef.current) {
      const y = accessoriesRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else if (index === 5 && setupSupportRef.current) {
      const y = setupSupportRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else if (index === 6 && macExperienceRef.current) {
      // FIXED: Handles scroll strictly to the Experience zone
      const y = macExperienceRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else if (index === 7 && savingsAndOffersRef.current) {
      // FIXED: Assigned to Tab Index 7 if your SubNav supports it, or falls under index 2 depending on your nav layout
      const y = savingsAndOffersRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } 
  };

  // 3. Monitor scroll events to update the sub-menu active state indicators
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      if (savingsAndOffersRef.current && scrollPosition >= savingsAndOffersRef.current.offsetTop) {
        setActiveTab(7); // FIXED: Tracking support for the new section
      } else if (macExperienceRef.current && scrollPosition >= macExperienceRef.current.offsetTop) {
        setActiveTab(6);
      } else if (setupSupportRef.current && scrollPosition >= setupSupportRef.current.offsetTop) {
        setActiveTab(5);
      } else if (accessoriesRef.current && scrollPosition >= accessoriesRef.current.offsetTop) {
        setActiveTab(4);
      } else if (appleStoreDifferenceRef.current && scrollPosition >= appleStoreDifferenceRef.current.offsetTop) {
        setActiveTab(3);
      } else if (waysToSaveRef.current && scrollPosition >= waysToSaveRef.current.offsetTop) {
        setActiveTab(2);
      } else if (shoppingGuidesRef.current && scrollPosition >= shoppingGuidesRef.current.offsetTop) {
        setActiveTab(1);
      } else {
        setActiveTab(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 return (
    <div className="pt-11 min-h-screen bg-[#f5f5f7] text-[#1d1d1f] font-sans antialiased w-full overflow-x-hidden">
      <AnnouncementRibbon />

     
      <div className="mx-auto max-w-[89%] px-6 lg:px-0">
        
        <StoreHeader />

       
        <MacSubNav activeTab={activeTab} onTabClick={handleTabClick} />

        {/* Stacked Layout Sections */}
        <div className="space-y-7 pt-6 pb-24">

          {/* Section 1: All Models */}
          <div ref={allModelsRef}>
            <AllModels />
          </div>

          {/* Section 2: Shopping Guides */}
          <div ref={shoppingGuidesRef}>
            <ShoppingGuides />
          </div>

          {/* Section 3: Ways to Save */}
          <div ref={waysToSaveRef}>
            <WaytosaveCards />
          </div>

          {/* Section 4: The Apple Store Difference */}
          <div ref={appleStoreDifferenceRef} className="pt-4">
            <AppleStoreDifference />
          </div>

          {/* Section 5: Accessories */}
          <div ref={accessoriesRef} className="pt-4">
            <MacAccessories />
          </div>

          {/* Section 6: Setup and Support */}
          <div ref={setupSupportRef} className="pt-4">
            <SetupAndSupport />
          </div>

          {/* Section 7: Mac Experience */}
          <div ref={macExperienceRef} className="pt-4">
            <MacExperience />
          </div>

          {/* Section 8: Savings and Offers */}
          <div ref={savingsAndOffersRef} className="pt-4">
            <SavingsAndOffers />
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}