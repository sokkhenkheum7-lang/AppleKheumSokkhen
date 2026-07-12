import React from "react";
import { HorizontalSlider } from "./Store"; 

const supportCards = [
  {
    id: 1,
    tag: "APPLECARE",
    title: "Handled with AppleCare.",
    description: "Protect your Mac with AppleCare+. Or protect multiple products with AppleCare One.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-50-applecare-202111_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=TFU2UzByZjhMakduTVVUMVptdlJxTVFOVmlLdmRGUk9KYVVna09ENHdDTlhuTTRtd2xSVWtmYmFrblI1clpGWmNva0xZQWFEV2ljOWRGNWZJRk4vWHF3Q1NIVUMvUGZWWmZFNWtHUHBMMHlaMjltUTNha29SMDU1VVk5bVh0Y2o",
    isPlayable: false,
  },
  {
    id: 2,
    tag: "WATCH AND LEARN",
    title: "How AppleCare protects your Mac.",
    description: "Get a quick overview of what AppleCare+ and AppleCare One cover.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-50-apple-care-one-202601?wid=960&hei=1000&fmt=png-alpha&.v=TFU2UzByZjhMakduTVVUMVptdlJxSmVIZ1VjVUh3QkdCN0FZQUR0SGxKcXh2dSsyQnY0dzFrQjVuY3QwQUw2UWcwYURURmY4SGZTamo4SDhjMUJmN1pPeENlcjlaTkRnMVZFb2x4RStPdWlIaWV5SG1KWWRSb1RMSkNqUDJYZHY",
    isPlayable: true,
  },
  {
    id: 3,
    tag: "PERSONAL SETUP",
    title: "Set up your new Mac with help from a Specialist.",
    description: "Let us guide you through data transfer, new features, and online, one-on-one sessions.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-50-personal-setup-202408?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=VldzaTZGN2ZKTjE3aS9LYkJvNVBrNXVhYzZSS00wamVDb0ZNNWFzV3JMUDZBWUVjcmljc3ZVaUpFVUpOQy8zQ1pwRE93ZVBDaGlEa25QZUpFTG9OUTRkV2s3aDJNOUJzc2Y4NkdWYk85QWJRbUNtdFFRcHQwVlBPWXhmcGxHZ1g",
    isPlayable: false,
  },
  {
    id: 4,
    tag: "PERSONAL SETUP",
    title: "New Mac? See how easy it is o move your content over.",
    description: "Let us guide you through data transfer, new features, and online, one-on-one sessions.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-50-transfer-202510?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=OGdpNmtNU2Y1Yi9ONnhHSlZ5YzQzRUVsNC9ORklLUHpWQ2ZsZW80bnNaVWYzUHRVc053YldlK2NuZForb0M1V0tRNjVHZTlIV04vVjZjbEh0Rm5SY3hvYXc2d0w4YlJENklKL3Ewc3U3VDQ",
    isPlayable: false,
  },
  {
    id: 3,
    tag: "today at Apple ",
    title: "Join us to discover the best of Mac",
    description: "Get Start or explore what's new in free sessions at the Apple Store.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-50-taa-202604?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=ZjYvdlE0T2d2RTA4dUdpMnJ4MERWczBtZHhQS0luc3dVZ3A0dVNzQ3RkR3kvYVhHUzZnbTdlRlQ4aGhRUUYyVTlxb2VuMGZEZWtwbmdHOTRwSmNJUWU3VVpnNXFlNEF4Zm9iTkxLM0ovTEk",
    isPlayable: false,
  }
];

export default function SetupAndSupport() {
  return (
    <div className="space-y-6 w-full">
      {/* Section Title */}
      <h3 className="text-[24px] md:text-[28px] font-semibold tracking-tight text-[#6e6e73]">
        <span className="text-[#1d1d1f]">Setup and support.</span> Our Specialists are here to help.
      </h3>

      {/* Slider */}
      <HorizontalSlider containerClass="gap-5 pb-5">
        {supportCards.map((card) => (
          <SupportCard key={card.id} card={card} />
        ))}
      </HorizontalSlider>
    </div>
  );
}

function SupportCard({ card }) {
  return (
    <div className="relative w-[380px] sm:w-[460px] h-[500px] rounded-[24px] bg-white border border-[#e8e8ed] overflow-hidden snap-start shrink-0 transition-all duration-300 hover:shadow-md hover:scale-[1.005] select-none flex flex-col justify-between group">
      
      {/* Upper Content Layer */}
      <div className="p-7 pl-10 relative z-10 flex flex-col max-w-[340px]">
        <span className="text-[11px] font-semibold tracking-wider text-gray-800 uppercase mb-1">
          {card.tag}
        </span>
        <h4 className="text-[28px] sm:text-[28px] font-semibold tracking-tight leading-[30px] sm:leading-[34px] text-left text-[#1d1d1f]">
          {card.title}
        </h4>
        
        {/* Render description at the top for standard cards */}
        {!card.isPlayable && (
          <p className="text-[14px] text-gray-800 leading-relaxed mt-3 text-left font-normal">
            {card.description}
          </p>
        )}
      </div>

      {/* Image Layer */}
      <div className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none">
        <img
          src={card.img}
          alt={card.title}
          className="w-full h-full object-cover object-bottom transition-transform duration-500 group-hover:scale-[1.01]"
        />
      </div>

      {/* Bottom overlay custom footer details specifically for video thumbnails */}
      {card.isPlayable && (
        <div className="relative z-10 w-full flex items-center justify-between p-4 pl-10 bg-white pt-5">
          <p className="text-[14px] text-[#1d1d1f] font-normal leading-normal max-w-[240px] text-left">
            {card.description}
          </p>
          <button className="w-10 h-10 rounded-full bg-[#f5f5f7] border border-[#d2d2d7] flex items-center justify-center text-[#1d1d1f] hover:bg-white transition-colors shrink-0 shadow-sm">
            <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
        </div>
      )}

    </div>
  );
}