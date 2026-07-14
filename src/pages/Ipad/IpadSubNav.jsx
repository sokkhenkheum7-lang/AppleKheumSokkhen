// IpadSubNav.jsx
import React from "react";

const subMenuItems = [
  { name: "All Models" },
  { name: "Shopping Guides" },
  { name: "Ways to Save" },
  { name: "The Apple Store Difference" },
  { name: "Accessories" },
  { name: "Setup and Support" },
  { name: "The Mac Experience" },
  { name: "Savings and Offers" }, 
];

export default function IpadSubNav({ activeTab, onTabClick }) {
  return (
    // បានប្តូរពី sticky top-0 z-40 ទៅជា relative z-10 ដើម្បីកុំឱ្យវាហោះទៅជាន់ menu ផ្សេងទៀត
    <div className="w-full bg-[#f5f5f7]/80 backdrop-blur-md relative z-10 pb-4 pt-6 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden border-b border-gray-200/40">
      <div className="flex gap-8 text-[14px] font-normal min-w-max">
        {subMenuItems.map((item, index) => {
          const isActive = activeTab === index;
          return (
            <button
              key={item.name}
              onClick={() => onTabClick(index)}
              className={`relative pb-2 transition-colors duration-300 select-none cursor-pointer text-left ${
                isActive 
                  ? "text-[#1d1d1f] font-semibold" 
                  : "text-[#6e6e73] hover:text-[#1d1d1f]"
              }`}
            >
              {item.name}
              {isActive && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#1d1d1f] rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}