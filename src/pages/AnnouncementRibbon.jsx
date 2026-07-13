// AnnouncementRibbon.jsx
import React from "react";

export default function AnnouncementRibbon() {
  return (
    <div className="w-full bg-white py-7 border-b border-gray-100 ">
      <div className="mx-auto max-w-[89%] px-6 lg:px-0 text-center">
      <p className="inline-block text-center font-normal text-[#1d1d1f] text-[13px] md:text-[14px] leading-relaxed">
        <span>
          Trade in your eligible Mac for credit toward a new one.
          <sup className="mx-[1px] text-[9px]">◊</sup> 
        </span>
        <a
          href="#learn-more"
          className="group ml-0.5 inline-flex items-center gap-0.5 text-[#0066cc] hover:underline"
        >
          See all Mac Value
          <svg
            className="h-3 w-3 text-[#0066cc]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <circle cx="12" cy="12" r="10" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8M8 12h8" />
          </svg>
        </a>
      </p>
      </div>
    </div>
  );
}