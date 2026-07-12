// Mac.jsx
import React, { useEffect, useRef, useState } from "react";

import Footer from "../components/layout/Footer";
import AnnouncementRibbon from "./AnnouncementRibbon";
import StoreHeader from "./StoreHeader";
import MacSubNav from "./MacSubNav";
import AllModels from "./AllModels";
import ShoppingGuides from "./ShoppingGuides";

const Mac = () => {
  const [activeTab, setActiveTab] = useState(0);

  const allModelsRef = useRef(null);
  const shoppingGuidesRef = useRef(null);

  const scrollToSection = (ref, offset = 0) => {
    if (!ref.current) return;

    const position =
      ref.current.getBoundingClientRect().top +
      window.scrollY +
      offset;

    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };

  const handleTabClick = (index) => {
    setActiveTab(index);

    if (index === 0) {
      scrollToSection(allModelsRef);
    }

    if (index === 1) {
      scrollToSection(shoppingGuidesRef, -80);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      if (
        shoppingGuidesRef.current &&
        scrollPosition >= shoppingGuidesRef.current.offsetTop
      ) {
        setActiveTab(1);
      } else {
        setActiveTab(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="pt-11 min-h-screen bg-[#f5f5f7] text-[#1d1d1f] font-sans antialiased">
      <AnnouncementRibbon />

      <main className="mx-auto max-w-[89%] md:max-w-[1060px] px-6 lg:px-0 mt-16 space-y-12">
        <StoreHeader />

        <MacSubNav
          activeTab={activeTab}
          onTabClick={handleTabClick}
        />

        <div className="space-y-20 pb-24">
          <section ref={allModelsRef}>
            <AllModels />
          </section>

          <section ref={shoppingGuidesRef}>
            <ShoppingGuides />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Mac;