import React, { useState } from "react";

export default function PageUnlock() {

  const [activeIndex, setActiveIndex] = useState(0);

  const accordionData = [
    {
      title: "Mac and iPhone",
      description:
        "Answer calls or messages from your iPhone directly on your Mac. See and control what’s on your iPhone from your Mac with iPhone Mirroring and Live Activities. Use Universal Clipboard to copy images, video, or text from your iPhone, then paste into another app on your nearby Mac. And thanks to iCloud, you can access your files from either your iPhone or your Mac. And so much more.",
      image: "https://www.apple.com/assets-www/en_WW/mac/03_image_accordion/large/mac_iphone_d50c6f239_2x.jpg",
      alt: "Mac and iPhone working together showing iPhone mirroring",
    },
    {
      title: "Mac and iPad",
      description:
        "Sketch on your iPad and have it appear instantly on your Mac. Or use your iPad as a second display, so you can work on one screen while you reference the other. You can even start something on your iPad — like a presentation or an email — and continue it on your Mac.",
      image: "https://www.apple.com/assets-www/en_WW/mac/03_image_accordion/large/mac_ipad_e3dad78c7_2x.jpg",
      alt: "Mac and iPad working together as dual screens",
    },
    {
      title: "Mac and Apple Watch",
      description:
        "Automatically log in to your Mac when you’re wearing your Apple Watch with Auto Unlock. No password typing required.",
      image: "https://www.apple.com/assets-www/en_WW/mac/03_image_accordion/large/mac_watch_0075a526e_2x.jpg",
      alt: "Mac automatically unlocking with Apple Watch",
    },
  ];

  return (
    <section className="bg-white pt-14 pb-9 w-full overflow-hidden font-sans antialiased">
      <div className="max-w-[1264px] mx-auto px-6 md:px-0">

        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <h2 className="text-[32px] md:text-[48px] font-semibold text-[#1d1d1f] tracking-tight leading-tight">
            Unlock the world of Apple.
          </h2>
          <a
            href="#"
            className="text-[#0066cc] hover:underline text-[14px] md:text-[16px] font-normal inline-flex items-center transition-colors"
          >
            Learn how Apple devices work better together
            <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </a>
        </div>

        <div className="bg-[#f5f5f7] rounded-2xl p-8 md:p-14 flex flex-col md:flex-row items-center justify-between min-h-[580px] shadow-[0_1px_3px_rgba(0,0,0,0.02)] ease-out gap-12">

          {/* Left Side: Accordion Selector */}
          <div className="w-full md:w-[40%] flex flex-col">
            {accordionData.map((item, index) => {
              const isOpen = activeIndex === index;
              return (
                <div
                  key={index}
                  className={`border-b border-[#d2d2d7] py-6 last:border-0 cursor-pointer transition-colors duration-300`}
                  onClick={() => setActiveIndex(index)}
                >
                  {/* Header containing Title and Arrow Icon */}
                  <div className="flex items-center justify-between">
                    <h3
                      className={`text-[20px] md:text-[22px] font-semibold tracking-tight duration-300 ${isOpen ? "" : "text-black"
                        }`}
                    >
                      {item.title}
                    </h3>
                    <span
                      className={`transform transition-transform duration-300 ${isOpen ? "rotate-180 text-[#1d1d1f]" : "text-[#86868b]"
                        }`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                  </div>


                  <div
                    className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[14px] md:text-[15px] text-gray-800 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side: Image Display Container */}
          <div className="w-full md:w-[60%] relative min-h-[300px] md:min-h-[400px]">
            {accordionData.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={index}
                  
                  className={`md:absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out ${isActive
                      ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 scale-95 translate-y-4 pointer-events-none hidden md:flex"
                   
                    }`}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="max-w-full max-h-[530px] object-contain"
                  />
                </div>
              );
            })}
          </div>

        </div>
        <div className="text-center mt-20 font-semibold text-[#1d1d1f] text-[16px] md:text-[18px] tracking-tight">
          Think different.
        </div>
      </div>
    </section>
  );
}