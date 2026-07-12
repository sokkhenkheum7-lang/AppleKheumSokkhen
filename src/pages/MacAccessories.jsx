import React from "react";
import { HorizontalSlider } from "./Store"; 

const accessoryCards = [
  {
    id: 1,
    isFeatureCard: true,
    title: "Get the most from your Mac.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-40-accessories-202603?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=SERiTmx0NmpGNkFZc0x1Q0htTEM4ZitteDg2RnBQcktCL1BXMFlGbS9yMzkvamYzRzRvcFlnajNacmhEOC9BeHg4ZHpEbm5XWGdaM3BiNVRDaG55Uk5JSWxodUFkcnN3djVCWXpVZ2V0Tk4yUXQrc1F4VFIwcWJZNzNTUVpwSTY",
    titleColor: "text-[#1d1d1f]",
  },
  {
    id: 2,
    isFeatureCard: false,
    title: "Magic Keyboard with Touch ID and Numeric Keypad for Mac...",
    price: "$199.00",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MMMR3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1645719943844",
    colors: ["#ffffff", "#1d1d1f"],
   
  },
  {
    id: 3,
    isFeatureCard: false,
    title: "Magic Mouse (USB-C) - Black Multi-Touch Surface",
    price: "$99.00",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXK63?wid=400&hei=400&fmt=jpeg&qlt=90&.v=QXNyZUVaR2UzT1Y4dlE2TWlnejRIdllvYS9naDJJdU9KTWdGWjhKWFRmTGhtOWE0YThxS1czK3JNYk5zY1dEQ2MzdzE1a1FVV25NVWpPZ3M3ZmswYnc",
    colors: ["#ffffff", "#1d1d1f"],
  },
  {
    id: 4,
    isFeatureCard: false,
    title: "Magic Trackpad (USB-C) - Black Multi-Touch Surface",
    price: "$149.00",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXKA3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=RERlc2NoNml6NVllQy85OTZMeTFyL1lvYS9naDJJdU9KTWdGWjhKWFRmTGhtOWE0YThxS1czK3JNYk5zY1dEQ05wQ0Z2bXFEZEZxVCtTRDVXcnZxcWc",
    colors: ["#ffffff", "#1d1d1f"],
    
  },
  {
    id: 5,
    isFeatureCard: false,
    title: "Studio Display - Standard glass - Tilt-adjustable stand",
    price: "$1,559.00",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MFEX4?wid=400&hei=400&fmt=jpeg&qlt=90&.v=ZzBBdXkzcmlHVVZveWNaSGg5NFVHUFlvYS9naDJJdU9KTWdGWjhKWFRmSjlEZysydnlvbTNtdXJTa0p6K2E0ZDhOMklqdUZyWWp1YkR1SHBzQnp2eUE",
    colors: ["#ffffff"],
  },
  {
    id: 6,
    isFeatureCard: false,
    title: "Aer Go Pack 2",
    price: "$99.95",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/HSLL2?wid=400&hei=400&fmt=jpeg&qlt=90&.v=Vkc5TXR1NHRIZU1OZUVCL1AraFBldllvYS9naDJJdU9KTWdGWjhKWFRmS29aUUFBeFdiajUza3Vja1p3M1B2V2Y1U1U5T0NML0RXUW1oZnVqcHZtZHc",
    colors: ["#2d312e", "#6b705c"],
    isOnlineOnly: true,
  },
  {
    id: 7,
    isFeatureCard: false,
    title: "Comfyable Puffer Tote for 13 and 14 MacBook",
    price: "$59.95",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/HSF52?wid=400&hei=400&fmt=jpeg&qlt=90&.v=NlpWalYvQWtwalA2TXZ0L0VaZmo0ZllvYS9naDJJdU9KTWdGWjhKWFRmSXFuRWY4U0FLcTd2UGF5TzUySHNzSXVSZHZTOTUvRWNUY2V4dnlraGxiQlE",
    colors: ["#010101", "#7d8491"],
    isNew: true,
  },
  {
    id: 8,
    isFeatureCard: false,
    title: "USB-C MagSafe 3 Cable (2 m) - Sky Blue",
    price: "$29.00",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MU2G3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=QmxWeFptTzB2cGNrVzQwclpCY3Y4UFlvYS9naDJJdU9KTWdGWjhKWFRmTHVmZDZFTTd4VjBOOUx3TVBQOUxIdklZaFU2U0RBSzIvV0dUQnZJYXhvSVE",
  },
  
   {
    id: 9,
    isFeatureCard: false,
    title: "70W USB-C Power Adapter",
    price: "$59.95",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MQLN3_GEO_US?wid=400&hei=400&fmt=jpeg&qlt=90&.v=S2U3dXZMblpTV3M4NkpScHppNDVqN0FTUVJFd2FhTm5MT2NZKzFrSnhuSXpIV3RHbE5qdS8zMStVUzZUdGp5bDJyR3JSWGloUDFoeWlSOWZQdHVodkE",    
  },
  {
    id: 11,
    isFeatureCard: false,
    title: "Beats USB-C to USB-c Woven Cable (3 m/ 10 ft)-Bolt Black",
    price: "$29.99",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MHX64?wid=400&hei=400&fmt=jpeg&qlt=90&.v=SEFJTDZrRkQxUlJtQ2pzN3UyakEyUFlvYS9naDJJdU9KTWdGWjhKWFRmS094RXl2ZHFSZmRmazJPNjF5NnBWcmIrczVrTFpYdGN5VzdoVWlyWEticGc", 
    isNew: true,
  },
  {
    id: 12,
    isFeatureCard: false,
    title: "USB- Digital AV Multiport Adapter",
    price: "$49.00",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MUF82?wid=400&hei=400&fmt=jpeg&qlt=95&.v=Y3VvblZUcTFHSmNUb0ZZN2h6a0lQL1lvYS9naDJJdU9KTWdGWjhKWFRmSnR1azc0cnFMcTkwa1RHcmZHTFNlS1JlZnh2azdzQVlCQjd1R2ozakk3S3c",
   
    
  },
  {
    id: 14,
    tag: "Apple Music",
    description: "Listen to curated workout collections on Apple Music with the special edition Nike Powerbeats Pro 2.",
    isFeatureCard: true,
    title: "Level up your workout with Nike Playlist.",
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-beats-music-202603?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=ajBiNG1Rb2dTaHlKLzhlckEwd0JZc1d5U3lNWlFZTnEvRG1sMm91bVM5OXFTRjNxbmh1UnU2R29ibGdpZUFXcy85S3R4M0M3WGhIQVNOK3lBdUI5K1Y4RURxbS9ua09RNkxwci9VVjQrc1Y5T01hRDdkZUw4ZEF5dFcvTm5xSnU",
    titleColor: "text-[#1d1d1f]",
  },
];

export default function MacAccessories() {
  return (
    <div className="space-y-6 w-full">
      <h3 className="text-[24px] md:text-[28px] font-semibold tracking-tight text-[#6e6e73]">
        <span className="text-[#1d1d1f]">Accessories.</span> Made for Mac.
      </h3>

      <HorizontalSlider containerClass="gap-5 pb-5">
        {accessoryCards.map((card) => (
          <AccessoryCard key={card.id} card={card} />
        ))}
      </HorizontalSlider>
    </div>
  );
}

function AccessoryCard({ card }) {
  if (card.isFeatureCard) {
    return (
      <div className="relative w-[340px] sm:w-[400px] h-[500px] rounded-[24px] bg-white border border-[#e8e8ed] overflow-hidden snap-start shrink-0 transition-all duration-300 hover:shadow-md hover:scale-[1.005] select-none flex flex-col justify-between group">
        <div className="p-9 pl-10 relative z-10 flex flex-col max-w-[320px]">
          {card.tag ? (
            <span className="text-[12px] font-semibold tracking-wider uppercase mb-1 text-gray-800">
              {card.tag}
            </span>
          ) : (
            <div className="h-[18px]" />
          )}
          
          <h4 className="text-[27px] font-semibold tracking-tight leading-[30px] mt-1">
            <span className={card.titleColor || "text-[#1d1d1f]"}>{card.title}</span>
            {card.description && (
              <p className="text-[14px] sm:text-[16px] text-gray-800 leading-[20px] sm:leading-[22px] mt-2 text-left font-normal max-w-[320px]">
                {card.description}
              </p>
            )}
          </h4>
        </div>
        <div className="absolute inset-0 z-0 flex items-end justify-center pointer-events-none">
          <img
            src={card.img}
            alt={card.title}
            className="w-full h-full object-cover object-bottom transition-transform duration-500 group-hover:scale-[1.01]"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-[280px] sm:w-[312px] h-[500px] rounded-[24px] bg-white border border-[#e8e8ed] overflow-hidden snap-start shrink-0 transition-all duration-300 hover:shadow-md hover:scale-[1.005] select-none flex flex-col justify-between p-8 group">
      
      {/* Product Image Center */}
      <div className="w-full h-[240px] flex items-center justify-center mt-4 mix-blend-multiply">
        <img
          src={card.img}
          alt={card.title}
          className="max-h-full max-w-[85%] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

      {/* Bottom Product Details */}
      <div className="flex flex-col space-y-4 mt-auto">
        {/* Color Dots Indicators */}
        <div className="flex justify-center items-center gap-2 h-3">
          {card.colors?.map((color, i) => (
            <span
              key={i}
              style={{ backgroundColor: color }}
              className="w-3 h-3 rounded-full border border-[#d2d2d7] shadow-inner cursor-pointer"
            />
          ))}
        </div>

        {/* Title and Price Info */}
        <div className="space-y-1.5 pt-2 flex flex-col justify-end min-h-[96px]">
          {card.isOnlineOnly && (
            <span className="block text-[12px] font-normal text-[#bf4800]">
              Online Only
            </span>
          )}
          {card.isNew && (
            <span className="block text-[12px] font-semibold text-[#bf4800]">
              New
            </span>
          )}
          <h4 className="text-[14px] font-semibold text-[#1d1d1f] tracking-tight leading-snug line-clamp-2">
            {card.title}
          </h4>
          <p className="text-[14px] text-[#1d1d1f] font-normal pt-1">
            {card.price}
          </p>
        </div>
      </div>

    </div>
  );
}