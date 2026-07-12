// src/pages/way-save.jsx
import React from "react";
import { HorizontalSlider } from "./Store"; 

const wayToSaveData = [
  {
    id: 1,
    tag: "LIMITED-TIME OFFER",
    description: "Learn more about Tax Holiday",
    title: "Shop tax-free on select produts in certain states.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-tax-holiday-202606?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=cFEvalhFakpZVzg4RFZsWktqbXFNZXZWL0crRTJLWVZ6bUFvMjhKOEJDYjJtaE9nejNBS0FrclhJMVJoVXB1MUprY3crUWRsN1dqVjRnMHR5S1hVbk15aXA4bS9PcHRGQXdCZ3ZGenB1MWl4S2IwUHBvanVidlNKOGY1aVVTbUc",
    titleColor: "text-[#1d1d1f]",
    isSpecialTitle: false,
    isVideoCard: false,
  },
  {
    id: 2,
    tag: "WHY MAC",
    title: "Save on a new Mac when you trade in an eligible device.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-50-tradein-202603?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=bnBGZmQyZENCQjV2MDY0V0laRVBER1hHTmYyb3piY1Y0THVqMzBBNDVoTkx0QXRvdnJ4V1dBNW1Qd2w2K1l1dlMwV0hhcmdVdXZzZ1NwTlFUaEgwTHdMY3RGMHNGL3RGQTdEcFpMejZDZFE",
    titleColor: "text-[#1d1d1f]",
    isSpecialTitle: false,
    isVideoCard: false,
  },
  {
    id: 3,
    tag: "WATCH AND LEARN",
    title: "How to trade in your Mac.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-50-tradein-video-card-202405?wid=960&hei=1000&fmt=png-alpha&.v=bnBGZmQyZENCQjV2MDY0V0laRVBEUDNCU2VJaDFNK0RNZnB0MWJFTHY1d2NzUzFKVm1zRnByUUY2REZlU2UyRjVWTTUydGFjaHVyNmxPYUZmTE1aZjR3T1YxQk9BejJUSjhWSm1mcHpjS2pUOWcyL2RnbzB6aXFNcjF0cTVhOFg",
    titleColor: "text-[#1d1d1f]",
    isSpecialTitle: false,
    isVideoCard: true,
    bottomText: "Get a quick overview in this video.",
  },
  {
    id: 4,
    tag: "LOW MONTHLY PAYMENT",
    title: "Pay 0% APR over 12 month when you choose to check out at Apple with Apple Card Monthly Installments.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-card-50-monthly-installments-202503?wid=960&hei=1000&fmt=jpeg&qlt=90&.v=dmNtNCtodDJvQTBIQ0d3WHg4bUVxMzhEc29tTzFZcVJzWmpnd0dqTS82cUVoeEc1MlQxYXlqK0lIMGZORU9HYllEamZDVFNES0txdDcrN05FQnRVVWRvVzlVOG5Jc3BPRm5PbEpOUlZBcGlZUFhHSnpLZStWWXlKejF1Nlc4Y3E",
    titleColor: "text-[#1d1d1f]",
    isSpecialTitle: false,
    isVideoCard: false,
  },
  {
    id: 5, 
    tag: "APPLE CARD",
    title: "Get 3% back in Daily Cash with Apple Card.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-50-apple-card-202108?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=TFU2UzByZjhMakduTVVUMVptdlJxTHJmczB4SkMrc3cxN2RvZ3hBRkdYNmo2Z1ptREdBenZRTjZuSCtBemFnUTRHeXB5TnVsU3R6Qjd0Y2JzbURyWEJWUGhpYllQZ2NhZkV4SWRUNUk4eE4rYWpGdS9XeFgvbS9ITnNYOEhYaG4",
    titleColor: "text-[#1d1d1f]",
    isSpecialTitle: false,
    isVideoCard: false,
  },
  {
    id: 6, 
    tag: "CERTIFIED REFURBISHED",
    title: "Shop refurbished Apple products backed by a One-year warranty.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/all-card-50-refurb-202408?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=NFFMT1ArR3loRjNadGhIYVNjS1FaYS9Uc1VQMFhKcmt1dHBBL1RWcWorTjRPaGhDdnpwSW51YmYvWU84cDZnMlMrR3RSUk9nckZNSURSVTdTTTRtUVhBK09zdkpKd1NtV2hlNHpLL0NQaDQ",
    titleColor: "text-[#1d1d1f]",
    isSpecialTitle: false,
    isVideoCard: false,
  },
  {
    id: 7, 
    tag: "EDUCATION",
    title: "Save with education pricing when you shop on the Education Store.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-50-education-202504?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=emVzQ3llK0t4OHJwS2lhMGVteFJuMDFVOTgvQlNKWWhkOHROMU1vSnZIWUF3Wk1qdTlJUXpYbmUrMWJwLzZvbTJTaS9RTTYzTWg5VUhTM1Ara0JyS0RQQ0hNZlF5ZTRab1NRVFFlY0M3aDQ",
    titleColor: "text-[#1d1d1f]",
    isSpecialTitle: false,
    isVideoCard: false,
  },
];

export default function WaysToSave() {
  return (
    <div className="space-y-6 w-full">
      <h3 className="text-[24px] md:text-[28px] font-semibold tracking-tight text-[#6e6e73]">
        <span className="text-[#1d1d1f]">Ways to save.</span> Find what works for you.
      </h3>

      <HorizontalSlider containerClass="gap-5 pb-5">
        {wayToSaveData.map((card) => (
          <WayToSaveCard key={card.id} card={card} />
        ))}
      </HorizontalSlider>
    </div>
  );
}

function WayToSaveCard({ card }) {
  return (
    <div className="relative w-[340px] sm:w-[480px] h-[500px] rounded-[24px] bg-white border border-[#e8e8ed] overflow-hidden snap-start shrink-0 transition-all duration-300 hover:shadow-md hover:scale-[1.005] select-none flex flex-col justify-between group">
      
      {/* Top Content Area */}
      <div className="p-9 pl-10 relative z-10 flex flex-col max-w-[380px]">
        {card.tag ? (
          <span className="text-[12px] font-semibold tracking-wider uppercase mb-1 text-gray-800">
            {card.tag}
          </span>
        ) : (
          <div className="h-[18px]" />
        )}

        <h4 className="text-[27px] font-semibold tracking-tight leading-[30px] mt-1">
          {card.isSpecialTitle ? (
            <>
              <span className="text-[#1d1d1f] font-semibold">{card.title}</span>
            </>
          ) : (
            <span className={card.titleColor}>{card.title}</span>
          )}
          {card.description && (
            <p className="text-[14px] sm:text-[16px] text-[#1d1d1f] leading-[20px] sm:leading-[22px] mt-1 text-left font-normal max-w-[320px]">
              {card.description}
            </p>
          )}
        </h4>
      </div>

      {/* Card Background Image */}
      <div className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none">
        <img
          src={card.img}
          alt={card.title}
          className="w-full h-full object-cover object-bottom transition-transform duration-500 group-hover:scale-[1.01]"
        />
      </div>

      {/* Video Overlay Control - Rendered only if isVideoCard is true */}
      {card.isVideoCard && (
        <div className="relative z-10 w-full flex items-center justify-between p-4 pl-10 bg-white pt-5">
          <p className="text-[14px] text-[#1d1d1f] font-normal max-w-[280px]">
            {card.bottomText}
          </p>
          
          <button 
            className="w-11 h-11 rounded-full bg-[#e8e8ed] hover:bg-[#d2d2d7] flex items-center justify-center transition-colors duration-200 shadow-sm cursor-pointer shrink-0"
            aria-label="Play Video"
            onClick={(e) => {
              e.stopPropagation();
              // Add video toggle or modal play functions here
            }}
          >
            <svg 
              className="w-4 h-4 text-[#1d1d1f] fill-current ml-0.5" 
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      )}

    </div>
  );
}