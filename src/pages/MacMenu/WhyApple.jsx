import React from "react";

export default function WhyApple() {
  const cards = [
    {
      category: "Education",
      title: "Save on Mac with education pricing.",
      description: "College students and educators can save through the Apple Store.",
      imageUrl: "https://www.apple.com/v/home/images/apple-card/a/promo_apple_card__d8xz4kd4evwy_large.jpg",
      imageAlt: "Devices for education lineup",
      imageStyle: "w-full max-h-[150px] object-contain",
    },
    {
      category: "Education",
      title: "Save on Mac with education pricing.",
      description: "College students and educators can save through the Apple Store.",
      imageUrl: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-education-202605?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=TysyM3c4L0xvQ1dZWVNWTXZ0ekxPTlVUNDdLczRTWHR5WE9ncHJGK2xwMzkvamYzRzRvcFlnajNacmhEOC9BeHg4ZHpEbm5XWGdaM3BiNVRDaG55UkpoSTRoODlLK2NFNmp4c0hWV3d4VCs1dDgvV3BhU1hoSzFPUEZjam5HQ2g",
      imageAlt: "Devices for education lineup",
      imageStyle: "w-full max-h-[150px] object-contain",
    },
    {
      category: "Personal Setup",
      title: "Meet your new Mac with Personal Setup.",
      description: "Get one-on-one help with data transfer, the latest features, and more.",
      imageUrl: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-gov-202503?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=dml5SzFDRnVlZ3JiOXZxcklwYUFBRDJEUGFubVlzY1VuVjZOclhXdXZWUlNTeEZoVVBncVRqTkNMNS9uNklFcEtYeVk3dW9BYmZDa2xxQitSOWhMaGdOWncxMDNiNENKZkpJZTVvSjV1Vzg",
      imageAlt: "Setup vectors icons mock",
      imageStyle: "w-[90%] max-h-[150px] object-contain opacity-90",
    },
    {
      category: "Customize Your Mac",
      title: "Customize your Mac.",
      description: "Choose your chip, memory, storage, even color.",
      imageUrl: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-veteran-202509?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=d01hbVp2TEdlMG9Memp2N1liaFpVK0VtZHJxNHNCcDlSRnVhZkNXeTJhc2QxYXI4a0J1dmxHNzJaeEFoWmI5RDJTaS9RTTYzTWg5VUhTM1Ara0JyS09TMGQyVTZTbVh5ekYyU1hDTHhHdE0",
      imageAlt: "Multiple customized Macs grid",
      imageStyle: "w-full max-h-[150px] object-contain",
    },
    {
      category: "Delivery & Pickup",
      title: "Get flexible delivery and easy pickup.",
      description: "Choose from two-hour delivery from an Apple Store, free delivery, or easy pickup options.",
      imageUrl: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=400",
      imageAlt: "Apple shopping bag",
      imageStyle: "w-[80%] max-h-[160px] object-contain",
    },
  ];

  return (
    <section className="bg-[#f5f5f7] pt-16 pb-20 w-full overflow-hidden font-sans antialiased">
      <div className="max-w-[1264px] mx-auto px-6 md:px-0">
        
        {/* Header Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-9">
          <h2 className="text-[32px] md:text-[40px] font-semibold text-[#1d1d1f] tracking-tight leading-tight max-w-[500px]">
            Why Apple is the best place to buy Mac.
          </h2>
          <a
            href="#"
            className="text-[#0066cc] hover:underline text-[14px] font-normal mt-4 md:mt-0 inline-flex items-center group"
          >
            Shop Mac
            <span className="ml-1 text-[11px] transition-transform group-hover:translate-x-0.5">&gt;</span>
          </a>
        </div>

        {/* Swipe Horizontal Grid Track */}
        <div
          className="flex space-x-5 overflow-x-auto scrollbar-none pb-8 pt-2 w-full snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-white rounded-3xl p-7 w-[310px] md:w-[330px] min-w-[310px] md:min-w-[330px] h-[480px] snap-start shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300 ease-out relative overflow-hidden group"
            >
              {/* Top Text Content */}
              <div>
                <span className="text-[12px] font-semibold text-gray-400 tracking-normal block mb-1.5">
                  {card.category}
                </span>
                <h3 className="text-[20px] md:text-[22px] font-semibold text-[#1d1d1f] tracking-tight leading-tight mb-2 max-w-[260px]">
                  {card.title}
                </h3>
                <p className="text-[13px] md:text-[14px] text-gray-500 font-normal tracking-wide leading-relaxed max-w-[275px]">
                  {card.description}
                </p>
              </div>

              {/* Bottom Image Showcase (Grounded to bottom edge) */}
              <div className="w-full flex justify-center items-end mt-4 overflow-hidden h-[200px]">
                <img
                  src={card.imageUrl}
                  alt={card.imageAlt}
                  className={card.imageStyle}
                />
              </div>

              {/* Apple Plus Action Circle icon overlay */}
              <button 
                className="absolute bottom-6 right-6 w-7 h-7 bg-[#f5f5f7] group-hover:bg-[#e8e8ed] rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="More details"
              >
                <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}