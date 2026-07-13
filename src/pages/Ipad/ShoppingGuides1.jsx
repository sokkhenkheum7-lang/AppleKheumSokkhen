// IpadSubNav.jsx របស់អ្នករក្សាទុកដដែល
import React from "react";

const subMenuItems = [
  { name: "All Models" },          // index 0
  { name: "Shopping Guides" },      // index 1
  { name: "Ways to Save" },         // index 2
  { name: "The Apple Store Difference" },
  { name: "Accessories" },
  { name: "Setup and Support" },
  { name: "The Mac Experience" },
  { name: "Special Stores" },
];

export default function IpadSubNav({ activeTab, onTabClick }) {
  return (
    <div className="w-full pb-4 pt-9 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      <div className="flex gap-8 text-[14px] font-normal min-w-max">
        {subMenuItems.map((item, index) => {
          const isActive = activeTab === index;
          return (
            <button
              key={item.name}
              onClick={() => onTabClick(index)}
              className={`relative pb-2 transition-colors duration-300 select-none cursor-pointer text-left ${
                isActive 
                  ? "text-[#1d1d1f] font-medium" 
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