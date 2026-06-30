import React from "react";

// Images
import macbookAir from "../../assets/grid/promo_ipad1.jpg";
import ipadAir from "../../assets/grid/promo_ipad2.jpg";
import macbookDark from "../../assets/grid/promo_ipad3.jpg";
import appleWatch from "../../assets/grid/promo_ipad4.jpg";
import tradeIn from "../../assets/grid/promo_ipad5.jpg";
import appleCard from "../../assets/grid/promo_ipad6.jpg";

const AppleGrid = () => {
  // បង្កើត class សម្រាប់កម្ពស់រួមមួយ ដើម្បីងាយស្រួលគ្រប់គ្រង និងកុំឲ្យស្ទួនកូដច្រើន
  const gridItemClass = "h-[380px] sm:h-[480px] md:h-[420px] lg:h-[500px] xl:h-[580px] w-full flex items-center justify-center overflow-hidden transition-all duration-300";

  return (
    <div className="w-full min-h-screen bg-white text-black font-sans antialiased">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3">

        {/* Grid 1 */}
        <div className={`${gridItemClass} bg-zinc-50`}>
          <img
            src={macbookAir}
            alt="MacBook Air"
            className="w-full h-full object-contain pointer-events-none"
            draggable={false}
          />
        </div>

        {/* Grid 2 */}
        <div className={`${gridItemClass} bg-zinc-50`}>
          <img
            src={ipadAir}
            alt="iPad Air"
            className="w-full h-full object-contain pointer-events-none"
            draggable={false}
          />
        </div>

        {/* Grid 3 */}
        <div className={`${gridItemClass} bg-black`}>
          <img
            src={macbookDark}
            alt="MacBook Dark"
            className="w-full h-full object-contain pointer-events-none"
            draggable={false}
          />
        </div>

        {/* Grid 4 */}
        <div className={`${gridItemClass} bg-zinc-50`}>
          <img
            src={appleWatch}
            alt="Apple Watch"
            className="w-full h-full object-contain pointer-events-none"
            draggable={false}
          />
        </div>

        {/* Grid 5 */}
        <div className={`${gridItemClass} bg-white border border-zinc-100`}>
          <img
            src={tradeIn}
            alt="Trade In"
            className="w-full h-full object-contain pointer-events-none"
            draggable={false}
          />
        </div>

        {/* Grid 6 */}
        <div className={`${gridItemClass} bg-zinc-50`}>
          <img
            src={appleCard}
            alt="Apple Card"
            className="w-full h-full object-contain pointer-events-none"
            draggable={false}
          />
        </div>

      </section>
    </div>
  );
};

export default AppleGrid;