import React from "react";

// Images (Product Backgrounds)
import macbookAir from "../../assets/grid/promo_ipad1.jpg";
import ipadAir from "../../assets/grid/promo_ipad2.jpg";
import macbookDark from "../../assets/grid/promo_ipad3.jpg";
import appleWatch from "../../assets/grid/promo_ipad4.jpg";
import tradeIn from "../../assets/grid/promo_ipad5.jpg";
import appleCard from "../../assets/grid/promo_ipad6.jpg";

import macbookAirLogo from "../../assets/grid/title1.jpg";

const products = [
  {
    image: macbookAir,
    alt: "MacBook Air",
    bg: "bg-[#f5f5f7]",
    imageClass: "w-full h-full object-cover",
    isLogo: true,
    titleLogo: macbookAirLogo,
    titleText: "MacBook Air",
    description: "Now supercharged by M4.",
    hasBuyButton: true,
    buyButtonText: "Buy",
    learnMoreText: "Learn more",
    isDarkText: true,
    textPosition: "top-12",
  },
  {
    image: ipadAir,
    alt: "AirPods Pro 3",
    bg: "bg-[#f5f5f7]",
    imageClass: "w-full h-full object-cover",
    isLogo: false,
    titleText: "AirPods Pro 3",
    description: "Now supercharged by M4.",
    hasBuyButton: true,
    buyButtonText: "Buy",
    learnMoreText: "Learn more",
    isDarkText: false,
    textPosition: "bottom-12 sm:bottom-16",
  },
  {
    image: macbookDark,
    alt: "MacBook Pro",
    bg: "bg-black",
    imageClass: "w-full h-full object-cover",
    isLogo: false,
    titleText: "MacBook Pro",
    description: "Now with M5, M5 Pro, and M5 Max.",
    hasBuyButton: true,
    buyButtonText: "Buy",
    learnMoreText: "Learn more",
    isDarkText: false,
    textPosition: "top-12",
  },
  {
    image: appleWatch,
    alt: "Apple Watch",
    bg: "bg-[#f5f5f7]",
    imageClass: "w-full h-full object-cover",
    isLogo: false,
    hasAppleLogo: true,
    titleText: "WATCH",
    titleSuffix: " SERIES 11",
    description: "The ultimate way to watch your health.",
    hasBuyButton: true,
    buyButtonText: "Buy",
    learnMoreText: "Learn more",
    isDarkText: true,
    textPosition: "top-12",
  },
  {
    image: tradeIn,
    alt: "Trade In",
    bg: "bg-[#f5f5f7]",
    imageClass: "w-full h-full object-cover",
    isLogo: false,
    hasAppleLogo: true,
    titleText: "Trade In",
    description: "Get up to $195–$650 in credit when you trade in iPhone 13 or higher.¹",
    hasBuyButton: false,
    learnMoreText: "Get your estimate",
    isDarkText: true,
    textPosition: "top-12",
  },
  {
    image: appleCard,
    alt: "Apple Card",
    bg: "bg-[#f5f5f7]",
    imageClass: "w-full h-full object-cover",
    isLogo: false,
    hasAppleLogo: true,
    titleText: "Card",
    description: "Get up to 3% Daily Cash back with every purchase.",
    hasBuyButton: true,
    buyButtonText: "Apply now",
    learnMoreText: "Learn more",
    isDarkText: true,
    textPosition: "top-12",
  },
];

const AppleGrid = () => {
  return (
    <div
      className="w-full bg-white"
      style={{
        fontFamily:
          '"SF Pro Text","SF Pro Icons","Helvetica Neue",Helvetica,Arial,sans-serif',
      }}
    >
      <div className="max-w-[4000px] mx-auto px-2 py-0">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {products.map((item, index) => (
            <div
              key={index}
              className={`
                relative
                overflow-hidden
                ${item.bg}
                h-[580px]
                w-full
                group
              `}
            >
              {/* Text / Logo Overlay Container */}
              <div
                className={`
                  absolute
                  inset-x-0
                  z-20
                  flex
                  flex-col
                  items-center
                  text-center
                  px-8
                  ${item.textPosition}
                  ${item.isDarkText ? "text-[#1d1d1f]" : "text-white"}
                `}
              >
                {/* Logo or Title text */}
                {item.isLogo ? (
                  <img
                    src={item.titleLogo}
                    alt={item.titleText}
                    className="h-11 mb-4 object-contai"
                  />
                ) : (
                  <h2 className="flex items-center justify-center text-[40px] leading-none font-semibold tracking-[-0.02em]">
                    {item.hasAppleLogo && (
                      <svg
                        viewBox="0 0 18 18"
                        className="w-[37px] h-[35px] mr-[1px] mb-[4px] fill-current"
                      >
                        <path d="M15.56 10.12c-.04-2.18 1.78-3.23 1.86-3.28-1.02-1.49-2.6-1.69-3.16-1.74-1.34-.14-2.62.79-3.3.79-.68 0-1.74-.77-2.86-.75-1.47.02-2.83.86-3.59 2.17-1.53 2.66-.39 6.59 1.1 8.74.73 1.05 1.59 2.23 2.73 2.19 1.1-.04 1.52-.71 2.78-.71s1.65.71 2.8.69c1.17-.02 1.93-1.07 2.65-2.12.83-1.22 1.17-2.4 1.19-2.46-.02-.01-2.29-.88-2.31-3.49zM12.98 3.51c.6-1.12.54-2.24.51-2.51-.95.04-2.1.63-2.78 1.42-.59.68-1.1 1.82-.96 3.08 1.06.08 2.14-.54 2.73-1.31z" />
                      </svg>
                    )}
                    <span>{item.titleText}</span>
                    {item.titleSuffix && (
                      <span className="font-normal text-[36px] ml-1">
                        {item.titleSuffix}
                      </span>
                    )}
                  </h2>
                )}

                {/* Description */}
                <p className="mt-2 text-[21px] font-normal leading-7 max-w-[460px]">
                  {item.description}
                </p>

                {/* Buttons Container */}
                <div className="mt-3 flex gap-4">
                  <button
                    className={`
                      rounded-full
                      px-6
                      py-[9px]
                      text-[17px]
                      transition
                
                      ${item.isDarkText
                        ? "bg-[#0071e3] text-white hover:bg-[#0077ed]"
                        : "bg-white text-black hover:bg-[#f5f5f7]"
                      }
                    `}
                  >
                    {item.learnMoreText}
                  </button>

                  {item.hasBuyButton && (
                    <button
                      className={`
                        rounded-full
                        border
                        px-6
                        py-[9px]
                        text-[17px]
                        transition
                
                        ${item.isDarkText
                          ? "border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3] hover:text-white"
                          : "border-white text-white hover:bg-white hover:text-black"
                        }
                      `}
                    >
                      {item.buyButtonText}
                    </button>
                  )}
                </div>
              </div>

              {/* Background Image */}
              <img
                src={item.image}
                alt={item.alt}
                draggable={false}
                className={`
                  absolute
                  bottom-0
                  left-1/2
                  -translate-x-1/2
                  h-auto
                  ${item.imageClass}
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-102
                `}
              />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default AppleGrid;