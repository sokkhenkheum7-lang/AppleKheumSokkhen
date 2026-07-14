
import React from "react";
import { HorizontalSlider } from "./Store"; 
import { image } from "framer-motion/client";


const guideCards = [
  {
    id: 1,
    tag: "COMPARE ALL MODELS",
    title: "Which Mac is right for you?",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-50-compare-models-202603?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=VVlYUmhtQ01FUnVZSm9ubk84akVKQVhDbGhXa21pNVNBVURtbkZ6K0ZoSHpIR0l0TVpNQnJZb1NNY29pWWhnM1pwRE93ZVBDaGlEa25QZUpFTG9OUTY2TXlIZTdvcW0vUW90dllTQklLcUJ0VktRME9sRTEwdS8xcGRlRVdEOFc",
    titleColor: "text-[#1d1d1f]",
    isSpecialTitle: false,
  },
  {
    id: 2,
    tag: "WHY MAC",
    title: "If you love iPhone, you’ll love Mac.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-50-whyswitch-202603?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=YmR4ajRKeHZrUjhpcnkyZi82dWY5ejZ6dml1bW1ZbGhRWFBxbXk4WEt2OEF3Wk1qdTlJUXpYbmUrMWJwLzZvbTJTaS9RTTYzTWg5VUhTM1Ara0JyS0kwaHZaQXc5K1ZuSmFNUEtRM1VVV0E",
    titleColor: "text-[#1d1d1f]",
    isSpecialTitle: false,
  },
  {
    id: 3,
    tag: "",
    title: "Create, communicate, and get things done effortlessly.¹",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-50-apple-intelligence-202510?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=TFU2UzByZjhMakduTVVUMVptdlJxS29iYW9Qd2NDSzB6MDd4Y1RDZWNGdy9ESkVJdWpDdDRmM2xuT3VSQktwQm1td3JHMmlHM0d0VzBMMGs5ZHR4WjJqdEhGTHliaWE4M0pHcXFRWnR5Vkt2VHZPbk05RGxvVWJZbUE1M0o2dU4",
    titleColor: "text-[#1d1d1f]",
    isSpecialTitle: true, 
  },
  {
    id: 4,
    title: "Shop with a Specialist over video.",
    description :"Choose your next Mac in a guided, one-way video session",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-50-specialist-video-202601?wid=1920&hei=2000&fmt=p-jpg&qlt=95&.v=Z21zRjYyUFB6Q1EySlkzM3R1YWFwNWNpZkpUQmxQNC9tSlZ1UnI1SUJjQ3BUWjNRQllHbTRnVklTUHgxZFZKVVRNTklacmNaZkJIdGV2STdtOWlndFh5WkRYL01YbGlvSEpEenZPdWxFRzdwWnBnTkJ3Zkgvb2tWNFpLQjkxeUs",
    titleColor: "text-[#1d1d1f]",
    isSpecialTitle: false,
  },
  {
    id: 5,
    tag: "MAC SPECAILIST",
    title: "Shop one on with a Specailist.Online or in a store.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-50-specialist-help-202512?wid=4000&hei=4167&fmt=p-jpg&qlt=95&.v=Z21zRjYyUFB6Q1EySlkzM3R1YWFwd2FaZDRpa1lUZlh6RlNrVzhqaVZCMTFnTXVrS1pHaUpMbTA1SzluZTBXQ01JTnhCV3R3cEpHRk9HWDdDb0hIQnBoRHhhSmFtRnBGSUdxRDY0UFpvZTNiT20ycUFxekdxMVM5d3dhVDBKMTY",
    titleColor: "text-[#1d1d1f]",
    isSpecialTitle: false,
  },
  {
    id: 4,
    tag: "MAC SPECAILIST",
    title: "Shop with a Specialist over video.",
    description :"Choose your next Mac in a guided, one-way video session",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-education-202605?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=TysyM3c4L0xvQ1dZWVNWTXZ0ekxPTlVUNDdLczRTWHR5WE9ncHJGK2xwMzkvamYzRzRvcFlnajNacmhEOC9BeHg4ZHpEbm5XWGdaM3BiNVRDaG55UkpoSTRoODlLK2NFNmp4c0hWV3d4VCs1dDgvV3BhU1hoSzFPUEZjam5HQ2g",
    titleColor: "text-[#1d1d1f]",
    isSpecialTitle: false,
  },
];

export default function ShoppingGuides() {
  return (
    <div className="space-y-6 w-full">
      
      <h3 className="text-[24px] md:text-[28px] font-semibold tracking-tight text-[#6e6e73]">
        <span className="text-[#1d1d1f]">Shopping guides.</span> Can’t decide? Start here.
      </h3>

      
      <HorizontalSlider containerClass="gap-5 pb-5">
        {guideCards.map((card) => (
          <GuideCard key={card.id} card={card} />
        ))}
      </HorizontalSlider>
    </div>
  );
}

// ==========================================
// Sub-Component 
// ==========================================
function GuideCard({ card }) {
  return (
    <div className="relative w-[340px] sm:w-[440px] h-[453px] rounded-[24px] bg-white border border-[#e8e8ed] overflow-hidden snap-start shrink-0 transition-all duration-300 hover:shadow-md hover:scale-[1.005] select-none flex flex-col justify-between group">
      
     
      <div className="p-9 pl-10 relative z-10 flex flex-col max-w-[380px]">
        {card.tag ? (
          <span className="text-[12px] font-semibold tracking-wider uppercase mb-1">
            {card.tag}
          </span>
        ) : (
          <div className="h-[18px]" />
        )}

        <h4 className="text-[28px] font-semibold tracking-tight leading-[34px] mt-1 text-left">
          {card.isSpecialTitle ? (
            <>
              <span className="bg-gradient-to-r from-[#d53f8c] via-[#7928ca] to-[#ff0080] bg-clip-text text-transparent font-bold">
                Apple Intelligence.{" "}
              </span>
              <span className="text-[#1d1d1f] font-semibold">{card.title}</span>
            </>
          ) : (
            <span className={card.titleColor}>{card.title}</span>
          )}
        </h4>
        {card.description && (
          <p className="text-[14px] sm:text-[16px] text-[#1d1d1f] leading-[20px] sm:leading-[22px] mt-2 text-left font-normal max-w-[320px]">
            {card.description}
          </p>
        )}
      </div>

      
      <div className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none">
        <img
          src={card.img}
          alt={card.title}
          className="w-full h-full object-cover object-bottom transition-transform duration-500 group-hover:scale-[1.01] "
        />
      </div>

    </div>
  );
}