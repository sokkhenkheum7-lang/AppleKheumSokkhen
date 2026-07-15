import React from "react";

export default function MacTitle() {
  // ទិន្នន័យបញ្ជី Explore Mac
  const exploreMac = [
    { name: "Explore All Mac", isHeaderLink: true },
    { name: "MacBook Neo", isHeaderLink: true },
    { name: "MacBook Air", isHeaderLink: true },
    { name: "MacBook Pro", isHeaderLink: true },
    { name: "iMac", isHeaderLink: true },
    { name: "Mac mini", isHeaderLink: true },
    { name: "Mac Studio", isHeaderLink: true },
    { name: "Displays", isHeaderLink: true },
  ];

  const exploreExtra = [
    { name: "Compare Mac" },
    { name: "Switch from PC to Mac" }
  ];

  const shopMac = [
    { name: "Shop Mac" },
    { name: "Mac Accessories" },
    { name: "Apple Trade In" },
    { name: "Financing" },
    { name: "Personal Setup" },
  ];

  const moreFromMac = [
    { name: "Mac Support" },
    { name: "AppleCare" },
    { name: "macOS 27 Preview" },
    { name: "Apple Intelligence and Siri" },
    { name: "Apps by Apple" },
    { name: "Apple Creator Studio" },
    { name: "Better with iPhone" },
    { name: "iCloud+" },
    { name: "Mac for Business" },
    { name: "Education" },
  ];

  return (
    <section className="bg-[#f5f5f7] py-20 w-full font-sans antialiased text-[#1d1d1f]">
      <div className="max-w-[1264px] mx-auto px-6 md:px-0">
        
        {/* Main Title "Mac" */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <h1 className="text-[56px] font-semibold tracking-tight leading-none text-[#1d1d1f]">
            Mac
          </h1>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          
          
          <div>
            <span className="text-[12px] font-semibold text-gray-600 uppercase tracking-wider block mb-4">
              Explore Mac
            </span>
            <ul className="space-y-3">
              {exploreMac.map((item, idx) => (
                <li key={idx}>
                  <a
                    href="./MacMenu1"
                    className="text-[24px] font-semibold block leading-tight text-[#1d1d1f]"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <ul className="mt-8 space-y-2">
              {exploreExtra.map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-[12px] font-semibold text-[#1d1d1f] block">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

       
          <div>
            <span className="text-[12px] font-semibold text-gray-600 uppercase tracking-wider block mb-4">
              Shop Mac
            </span>
            <ul className="space-y-3">
              {shopMac.map((item, idx) => (
                <li key={idx}>
                  <a
                    href="./Mac"
                    className={`block leading-tight font-semibold ${
                      idx === 0 
                        ? "text-[16px] md:text-[18px] text-[#1d1d1f]" 
                        : "text-[14px] text-[#515154]"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        
          <div>
            <span className="text-[12px] font-semibold text-[#86868b] uppercase tracking-wider block mb-4">
              More from Mac
            </span>
            <ul className="space-y-3">
              {moreFromMac.map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-[14px] font-semibold text-[#515154] block leading-tight"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}