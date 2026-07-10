import { HorizontalSlider } from "./Store";

const quickLinks = [
  "Find a Store",
  "Order Status",
  "Shopping Help",
  "Trade In",
  "Financing",
  "Personal Setup",
];

export default function QuickLink() {
  return (
    <div className="space-y-5">
      {/* Section Title */}
      <h3 className="text-[24px] md:text-[28px] font-semibold tracking-tight text-[#6e6e73]">
        <span className="text-[#1d1d1f]">Quick Links</span> 
      </h3>

      <HorizontalSlider containerClass="gap-4">
        {quickLinks.map((item) => (
          <button
            key={item}
            className="
              h-[44px]
              px-6
              rounded-full
              border
              border-[#1d1d1f]
              bg-white
              whitespace-nowrap
              text-[17px]
              font-normal
              tracking-[-0.022em]
              text-[#1d1d1f]
              transition-all
              duration-300
              hover:bg-[#1d1d1f]
              hover:text-white
              hover:shadow-md
              shrink-0
            "
          >
            {item}
          </button>
        ))}
      </HorizontalSlider>
    </div>
  );
}