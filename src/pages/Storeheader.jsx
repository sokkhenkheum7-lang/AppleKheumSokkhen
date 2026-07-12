// StoreHeader.jsx
import React from "react";

export default function StoreHeader() {
  return (
    <div className="pt-21 pb-1 flex flex-col md:flex-row md:justify-between md:items-baseline gap-4">
      <h1 className="text-[64px] md:text-[80px] font-semibold tracking-tight text-[#1d1d1f] leading-none">
        Shop Mac
      </h1>
      <div className="md:text-right max-w-sm pb-12 md:-translate-y-[32%]">
        <div className="mt-4 space-y-2">
          {["Connect with a Specialist", "Find an Apple Store"].map((text, i) => (
            <React.Fragment key={text}>
              {i > 0 && <br />}
              <a
                href={`#${text.toLowerCase().replace(/ /g, "-")}`}
                className="inline-flex items-center text-[14px] text-[#0066cc] hover:underline group"
              >
                {text}
                <svg className="ml-1 w-[12px] h-[12px] stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
                </svg>
              </a>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}