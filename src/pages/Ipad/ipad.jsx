// Ipad.jsx
import React, { useState } from "react";
import ShopIpad from "./ShopIpad";
import IpadSubNav from "./IpadSubNav";
import AllModel1 from "./AllModel1"; 


export default function Ipad() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);

   
    if (index === 1) {
      
      setActiveTab(0); 
      
     
      setTimeout(() => {
        const element = document.getElementById("shopping-guides-section");
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  };

  return (
    <div className="pt-11 min-h-screen bg-[#f5f5f7] text-[#1d1d1f] font-sans antialiased w-full overflow-x-hidden">
      <div className="mx-auto max-w-[89%] px-6 lg:px-0">
        
        <ShopIpad />

  
        <IpadSubNav activeTab={activeTab} onTabClick={handleTabClick} />
      
        <div className="mt-8">
         
          {activeTab === 0 && <AllModel1 />}
          
          {activeTab === 2 && <p className="text-center text-gray-500 py-10">Ways to Save Content Coming Soon...</p>}
        </div>
        

      </div>
    </div>
  );
}