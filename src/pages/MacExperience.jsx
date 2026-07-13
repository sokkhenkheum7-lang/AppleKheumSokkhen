// src/components/MacExperience.jsx
import React from "react";
import { HorizontalSlider } from "./Store"; 

const experienceCards = [
  {
    id: 1,
    tag: "MACOS",
    title: "Discover what's new with macOS Tahoe.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-50-macos-202603?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=QWFMNHZ5bExjZTh5ZGwrYzYxVWJVZ2NBK0RtTzFmT3IvSFhPditoN2RaVlNTeEZoVVBncVRqTkNMNS9uNklFcEtYeVk3dW9BYmZDa2xxQitSOWhMaG51cHRubkhVN0NyQjZZTlF4ejFvM2M",
    isGradientCard: false,
  },
  {
    id: 2,
    tag: "CONTINUITY",
    title: "Powerful alone. Superpowered together.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-50-continuity-202510_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=SDBMOEo5TUJ3L2g4SGdHV3ZiQjV6Qm5JdEF3Q29IUDlITExVWkovQmlIbGliOTBDYU5saG5qVVFqcjlWTi9hWnFmS3YvQ0doSFZENndQR0J4TTRqbjBtMnRPRDRlblJ3Ymt4biswLythTzg4dUNsVnFiNnNaaEVmS09TZTVlWjY",
    isGradientCard: false,
  },
  {
    id: 3,
    tag: "",
    title: "You get more than a Mac when you get a Mac.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-50-subscriptions-202605_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=THBxRG5BQnpiYWRCNG9pNHZTWFVNZHJHRGpndDdpWXhkdzJLRDZmV25aRHk2QTlCTzBxamVGek5OcTY0SVJwdHU2S1NDY0Mybzd2UUxDKzhkSmN0dEFTTWdLL2xrUmxCSzFHMVo3SzVGQyt0eHN4R1pPd01aYUFlNGl6Q2ZsdTM",
    isGradientCard: true,
  },
  {
    id: 4,
    tag: "ICLOUD+",
    title: "Get the storage you need and the privacy you deserve. Upgrade your plan today.†",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-50-icloud-202504?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=T2s0NC9CZFFsV0EyMUEyMkZwZVliY3gxUWpMcXZpTkprUGFuT0ZwU2l0cDRPaGhDdnpwSW51YmYvWU84cDZnMlMrR3RSUk9nckZNSURSVTdTTTRtUWFpUGY3UnBobCtQYVVFNWd3bGNHQkU",
    isGradientCard: false,
  },
  {
    id: 5, 
    isStackedCard: true,
    subCards: [
      {
        id: "5-top",
        tag: "APPLE AT COLLEGE",
        title: "Ace it all with Apple.",
        description: "Take your learning to the next level with Mac.",
        img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-25-college-202108?wid=960&hei=480&fmt=p-jpg&qlt=95&.v=d2s4ejE5TVkyTU9TUTZOR0JzcDFEeXhnb1Vkd0w1RThQL3VNWW9vRnZlYjRZODhLVlo3M1FvUnEvTmdWQkR4K1MrR3RSUk9nckZNSURSVTdTTTRtUWFSVlJQbnEvc0lOemNVMnREOExVb3M",
      },
      {
        id: "5-bottom",
        tag: "APPLE AT WORK",
        title: "Power your workplace with Apple hardware, software, and services.",
        img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-25-work-202108?wid=960&hei=480&fmt=p-jpg&qlt=95&.v=V1dpYysxTmF3eCtGTVhlVFQyckdZc3VyWGFYdTc3N1dFSWZzbWxlZGFUVWlOOFROeldKQ0RjaGNEWmNOdDFneFFJRHh4YndKb0dHMEVUb1NhcTkzVnlSN1M4dHZpdnAvbTZiTElUQnVMZnM",
      }
    ]
  },
  {
    id: 6, 
    tag: "",
    title: "Six Apple services. One easy subscription.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-subscriptions-202605?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=WW05TjdlcC83b2p3NDlrR3ZVbk1xYk4zaUxnUFVTeUlGeUNxWkhYTVpQc3l0U1ZtOFgzWEVDRzk0cFh3T2wrcVN5aWNYUFpIbkFhdm03T3BzSjdVSTI2SnE5cVJVVzdjaUpRbUpzRk5lMEZYWTd1bDlYVlB5S1l0U0hTeGxwTi8",
    isGradientCard: false,
  },
];

export default function MacExperience() {
  return (
    <div className="space-y-6 w-full">
      {/* Section Title */}
      <h3 className="text-[24px] md:text-[28px] font-semibold tracking-tight text-[#6e6e73]">
        <span className="text-[#1d1d1f]">The Mac experience.</span> Designed to connect with everything Apple.
      </h3>

      {/* Slider */}
      <HorizontalSlider containerClass="gap-5 pb-5">
        {experienceCards.map((card) => (
          <ExperienceCard key={card.id} card={card} />
        ))}
      </HorizontalSlider>
    </div>
  );
}

function ExperienceCard({ card }) {
 
  if (card.isStackedCard) {
    return (
      <div className="w-[380px] sm:w-[460px] h-[479px] flex flex-col gap-5 snap-start shrink-0 select-none">
        {card.subCards.map((subCard) => (
          <div 
            key={subCard.id}
            className="relative flex-1 rounded-[24px] bg-[#121212] border border-black/10 overflow-hidden group transition-all duration-300 hover:shadow-md hover:scale-[1.005]"
          >
           
            <div className="p-7 pl-10 relative z-10 flex flex-col max-w-[340px] text-left">
              {subCard.tag && (
                <span className="text-[11px] font-semibold tracking-wider text-white uppercase mb-1">
                  {subCard.tag}
                </span>
              )}
              <h4 className="text-[20px] font-semibold tracking-tight leading-[24px] text-white">
                {subCard.title}
              </h4>
              {subCard.description && (
                <p className="text-[13px] text-white font-normal leading-[18px] mt-1.5">
                  {subCard.description}
                </p>
              )}
            </div>

         
            <div className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none">
              <img
                src={subCard.img}
                alt={subCard.title}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </div>
          </div>
        ))}
      </div>
    );
  }

 
  return (
    <div 
      className={`relative w-[380px] sm:w-[460px] h-[479px] rounded-[24px] border border-[#e8e8ed] overflow-hidden snap-start shrink-0 transition-all duration-300 hover:shadow-md hover:scale-[1.005] select-none flex flex-col justify-between group
        ${card.isGradientCard ? "bg-gradient-to-b from-[#a2f3ec] via-[#a8f5ee] to-[#7eece0] border-transparent" : "bg-white"}
      `}
    >
    
      <div className="p-7 pl-10 relative z-10 flex flex-col max-w-[340px] text-left">
        {card.tag ? (
          <span className="text-[11px] font-semibold tracking-wider text-gray-800 uppercase mb-1">
            {card.tag}
          </span>
        ) : (
          <div className="h-[18px]" />
        )}
        
        <h4 className="text-[28px] sm:text-[28px] font-semibold tracking-tight leading-[30px] sm:leading-[34px] text-left text-[#1d1d1f]">
          {card.title}
        </h4>

        {card.description && (
          <p className="text-[12x] text-gray-800 leading-relaxed mt-3 text-left font-normal">
            {card.description}
          </p>
        )}
      </div>

      
      <div className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none">
        <img
          src={card.img}
          alt={card.title}
          className="w-full h-auto object-cover object-bottom transition-transform duration-500 group-hover:scale-[1.01]"
        />
      </div>

    </div>
  );
}