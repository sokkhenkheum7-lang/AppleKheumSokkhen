import React from "react";

export default function AnnouncementRibbon() {
  return (
    <div className="w-full bg-white py-4 border-b border-gray-100">
      <div className="mx-auto max-w-[89%] text-center">
        <p className="text-[14px] text-[#1d1d1f] font-normal">
          Buy Mac with education savings.
          <sup className="text-[9px]">*</sup>{" "}
          <a
            href="#"
            className="inline-flex items-center text-[#0066cc] group"
          >
            Shop
            <span className="ml-[2px] transition-transform duration-200 group-hover:translate-x-[2px]">
              ›
            </span>
          </a>
        </p>
      </div>
    </div>
  );
}