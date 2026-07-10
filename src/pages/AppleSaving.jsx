import React from "react";
import { HorizontalSlider } from "./Store";

// ==========================================
// Mock Data Configurations
// ==========================================
const SAVING_ITEMS = [
  {
  id: "carrier-deals",
  tag: "CARRIER DEALS AT APPLE",
  title: "Get up to $800–$1100 in credit on a new iPhone after trade-in.",
  subtitle: "Explore deals that accept eligible trade-in devices in any condition — and some that don't require a trade-in at all.*",
  image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-card-40-carriertrade-202409?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=cmVEYjlFVTUrZjdLT25ZZ2djOUZ2WTVRdHN0TWZxV3QyUGs3WkMzR0dyM1Nab1lJcUZwSFVRK1htYlNmZUtPTFN5aWNYUFpIbkFhdm03T3BzSjdVSXljNnc4c1drVHZvWWlGUXhnb2V5L09yM3dvVGNOcHh1NWJldDJaWTZVVHI",
},
  {
  id: "carrier-deals",
  tag: "EDUCATION",
  title: "Save on a new Mac, iPad, and Apple Watch◊ with education pricing.Δ",
  
  image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-education-202605?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=TysyM3c4L0xvQ1dZWVNWTXZ0ekxPTlVUNDdLczRTWHR5WE9ncHJGK2xwMzkvamYzRzRvcFlnajNacmhEOC9BeHg4ZHpEbm5XWGdaM3BiNVRDaG55UkpoSTRoODlLK2NFNmp4c0hWV3d4VCs1dDgvV3BhU1hoSzFPUEZjam5HQ2g",
},

{
  id: "carrier-deals",
  tag: "GOVERNMENT",
  title: "Special pricing is avalable for state,local, and federal agencies.",

  image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-gov-202503?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=dml5SzFDRnVlZ3JiOXZxcklwYUFBRDJEUGFubVlzY1VuVjZOclhXdXZWUlNTeEZoVVBncVRqTkNMNS9uNklFcEtYeVk3dW9BYmZDa2xxQitSOWhMaGdOWncxMDNiNENKZkpJZTVvSjV1Vzg",
},
{
  id: "carrier-deals",
  tag: "VETERANS AND MILITARY",
  title: "Active and veteran member may be eligible for exclusive savings",
  image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-veteran-202509?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=d01hbVp2TEdlMG9Memp2N1liaFpVK0VtZHJxNHNCcDlSRnVhZkNXeTJhc2QxYXI4a0J1dmxHNzJaeEFoWmI5RDJTaS9RTTYzTWg5VUhTM1Ara0JyS09TMGQyVTZTbVh5ekYyU1hDTHhHdE0",
},
];

// ==========================================
// Main Component
// ==========================================
export default function AppleSaving() {
  return (
    <div className="space-y-5">
      <h3 className="text-2xl md:text-[28px] font-semibold tracking-tight text-[#6e6e73]">
        <span className="text-[#1d1d1f]">Savings and offers.</span> Exclusive deals, special stores and more.
      </h3>

      <HorizontalSlider>
        {SAVING_ITEMS.map((item) => (
          <SavingCard key={item.id} item={item} />
        ))}
      </HorizontalSlider>
    </div>
  );
}

// ==========================================
// Sub-Component: Card Item
// ==========================================
function SavingCard({ item }) {
  const { id, title, subtitle, tag, image } = item;

  const isCarrierDeals = id === "carrier-deals";

  return (
    <a
      href={`/offers/${id}`}
      className="relative block w-[340px] sm:w-[400px] h-[500px] rounded-[25px] bg-white p-8 overflow-hidden snap-start shrink-0 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group select-none border border-gray-100/50"
    >
      {/* Text Content Block */}
      <div className="relative z-20 flex flex-col text-left">
        {tag && (
          <span className="text-[12px] font-semibold tracking-wider text-[#6e6e73] uppercase mb-1.5">
            {tag}
          </span>
        )}
        
        <h4 className="text-[24px] md:text-[28px] font-bold leading-[32px] tracking-tight text-[#1d1d1f]">
          {title}
        </h4>

        {subtitle && (
          <p className="mt-2 text-[14px] leading-[20px] font-normal text-[#6e6e73] max-w-[95%]">
            {subtitle}
          </p>
        )}
      </div>

      {/* Image Render Block */}
      {isCarrierDeals ? (
        // Fixed layout: contained layout anchored to the bottom edge
        <div className="absolute bottom-0 left-0 right-0 z-10 w-full h-full flex items-end justify-center overflow-hidden p-4">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
      ) : (
        // Standard layout for other cards
      <div className="relative flex-1 w-full h-[400px] overflow-hidden flex items-end justify-center pt-4">
  <img
    src={image}
    alt={title}
    className="w-full h-full object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.05]"
  />
</div>
      )}
    </a>
  );
}