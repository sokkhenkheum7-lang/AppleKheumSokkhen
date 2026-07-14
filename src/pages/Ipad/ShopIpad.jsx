// StoreHeader.jsx
import React from "react";

export default function Shopipdad() {
  return (
    <div className="sm:pt-1 md:pt-20 pb-6 flex flex-col md:flex-row md:justify-between md:items-baseline gap-4 w-full">
      {/* Dynamic scaled header responsive across screen dimensions */}
      <h1 className="text-[48px] sm:text-[64px] lg:text-[80px] font-semibold tracking-tight text-[#1d1d1f] leading-none shrink-0">
        Shop iPad
      </h1>

      {/* Right navigation menu links layer wrapped to block layout shift */}
      <div className="flex flex-col items-start md:items-end space-y-2 pb-2 md:self-end">
        {[
          { text: "Connect with a Specialist", link: "specialist" },
          { text: "Find an Apple Store", link: "store" }
        ].map((item) => (
          <a
            key={item.link}
            href={`#${item.link}`}
            className="inline-flex items-center text-[12px] sm:text-[14px] text-[#0066cc] hover:underline whitespace-nowrap"
          >
            {item.text}
            <svg 
              className="ml-1 w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] stroke-current" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}