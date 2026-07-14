// Ipad.jsx
import React, { useState, useRef, useEffect } from "react";
import ShopIpad from "./ShopIpad";
import IpadSubNav from "./IpadSubNav";
import AllModel1 from "./AllModel1";
import ShoppingGuides1 from "./ShoppingGuides1";
import WayTosave from "./WayTosave";
import AppleStoreDifferencePad from "./AppleStoreDifferencPad";
import AccessoriesIpad from "./AccessoriesIpad";
import TheiPadexperience from "./TheiPadexperience";
import SetupAndSupportIpad from "./SetupAndSupportIpad";
import SavingOffers from "./SavingOffers";
import Footer from "../../components/layout/Footer";

export default function Ipad() {
  const [activeTab, setActiveTab] = useState(0);

  const allModel1Ref = useRef(null);
  const shoppingGuides1Ref = useRef(null);
  const WayTosaveRef = useRef(null);
  const appleStoreDiffRef = useRef(null);
  const AccessoriesIpadRef = useRef(null);
  const ipadExperienceRef = useRef(null);
  const setupSupportRef = useRef(null);
  const SavingOffersRef = useRef(null);

  const handleTabClick = (index) => {
    setActiveTab(index);
    const config = { behavior: "smooth", block: "start" };
    const yOffset = -80;

    if (index === 0 && allModel1Ref.current) {
      allModel1Ref.current.scrollIntoView(config);
    } else if (index === 1 && shoppingGuides1Ref.current) {
      const y = shoppingGuides1Ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else if (index === 2 && WayTosaveRef.current) {
      const y = WayTosaveRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else if (index === 3 && appleStoreDiffRef.current) {
      const y = appleStoreDiffRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else if (index === 4 && AccessoriesIpadRef.current) {
      const y = AccessoriesIpadRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else if (index === 5 && setupSupportRef.current) {
      const y = setupSupportRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else if (index === 6 && ipadExperienceRef.current) {
      const y = ipadExperienceRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else if (index === 7 && SavingOffersRef.current) {
      const y = SavingOffersRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      if (setupSupportRef.current && scrollPosition >= setupSupportRef.current.offsetTop) {
        setActiveTab(6);
      } else if (ipadExperienceRef.current && scrollPosition >= ipadExperienceRef.current.offsetTop) {
        setActiveTab(5);
      } else if (AccessoriesIpadRef.current && scrollPosition >= AccessoriesIpadRef.current.offsetTop) {
        setActiveTab(4);
      } else if (appleStoreDiffRef.current && scrollPosition >= appleStoreDiffRef.current.offsetTop) {
        setActiveTab(3);
      } else if (WayTosaveRef.current && scrollPosition >= WayTosaveRef.current.offsetTop) {
        setActiveTab(2);
      } else if (shoppingGuides1Ref.current && scrollPosition >= shoppingGuides1Ref.current.offsetTop) {
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
      <div className="mx-auto max-w-[89%] lg:px-0">
        <ShopIpad />
        <IpadSubNav activeTab={activeTab} onTabClick={handleTabClick} />

        <div className="space-y-16 pt-6 pb-24">
          <div ref={allModel1Ref}><AllModel1 /></div>
          <div ref={shoppingGuides1Ref}><ShoppingGuides1 /></div>
          <div ref={WayTosaveRef}><WayTosave /></div>
          <div ref={appleStoreDiffRef}><AppleStoreDifferencePad /></div>
          <div ref={AccessoriesIpadRef}><AccessoriesIpad /></div>

          <div ref={setupSupportRef}><SetupAndSupportIpad /></div>
          <div ref={ipadExperienceRef}><TheiPadexperience /></div>
          <div ref={SavingOffersRef}><SavingOffers/></div>
            <Footer/>
        </div>
      </div>
    </div>
  );
}