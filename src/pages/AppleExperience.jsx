import React from "react";
import { HorizontalSlider } from "./Store";

// ==========================================
// Mock Data Configurations
// ==========================================
const EXPERIENCE_ITEMS = [
  {
    id: "apple-intelligence",
    tag: "",
    
    titleHtml: (
      <h4 className="text-[24px] md:text-[28px] font-semibold leading-[32px] tracking-tight text-[#1d1d1f]">
        <span className="bg-gradient-to-r from-[#4361ee] via-[#9b5de5] to-[#f15bb5] bg-clip-text text-transparent">
          Apple Intelligence.
        </span>
        <br />
        Create, communicate, and get things done effortlessly.²
      </h4>
    ),
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-apple-intelligence-202510?wid=960&hei=1000&fmt=jpeg&qlt=90&.v=SFNxMjRYSTFLdjBJZG1UYjBKRUNDalZCM0g0MTRQL0NONjZoQUpUNEpyWXluTDY3NjNOVTV6d29lV0RZMDd0SXAwckMxbExydC8yeDhtUjlFVHdKVm16RG1HVDZIUUdmQ3JLV1liN0t6d0huMXZMc042Y1VXcXBxaFlBTkJNRVg",
    imgClass: "w-full h-full object-cover object-bottom",
    isFullCover: true, 
  },
  {
    id: "apple-camp",
    tag: "TODAY AT APPLE",
    title: "Join the fun at Apple Camp.",
    subtitle: "Create a helpful superhero in a free session on iPad. For kids 6–10.",
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-apple-camp-202606?wid=960&hei=1000&fmt=png-alpha&.v=SFNxMjRYSTFLdjBJZG1UYjBKRUNDam1TODJXV1VvWThkUCtsNm45c3ZCTWsrNUZoNXdjRTN6Qk9kZzJzT0IxWlM0TjRWdzF2UjRGVEY0c3dBQVZ6VGNRLy9pTEQzVWRwT1RNemYwRUVxUHc",
    imgClass: "w-full h-full object-cover object-bottom",
    isFullCover: true, 
  },
  {
    id: "continuity",
    tag: "CONTINUITY",
    title: "Powerful alone. Superpowered together.",
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-continuity-202510_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=MkxpRXJEbEM4SjVucjFvcTdEU1BlKytEMU8wSFV2cUJ5OUt4eTB3dVNtSEFkWTlnaEhRWXFUU1Nhem4xR20wcHN2Mmx4a3VvSnUzaFUvSVlVRUJkbEJDTmlWU3RJRnkvdVFKL2dPMHRvaU1UTm9KMUZUZjFaM2tCUGFwdktmdHI",
    imgClass: "w-full h-full object-cover object-bottom",
    isFullCover: true, 
  },
  {
    id: "applecare",
    tag: "APPLECARE+",
    title: "Handled with AppleCare.",
    subtitle: "Protect your products individually with AppleCare+ or multiple products with AppleCare One.",
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-applecare-202509_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=SFNxMjRYSTFLdjBJZG1UYjBKRUNDa0lmM1RnK0lWVnZqUHFuSG45ZGZhalV6YkxCN29rYWlPV3JIeUFBLzFxVm1td3JHMmlHM0d0VzBMMGs5ZHR4WitYQmRxbm94UXpWNkxhbHdKMzlCbVpwaWFvMkZMU25hT1hFblJzWkRURGQ",
     imgClass: "w-full h-full object-cover object-bottom",
    isFullCover: true, 
  },
  {
    id: "apple-store-app",
    tag: "APPLE STORE APP",
    title: "Put your bow on it.",
    subtitle: "Make the gift unmistakably theirs with a personalized message created especially for them.",
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-holiday-gifting-202512?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=VXNuZmVZU0R3VzJZalF2dFJTeUN3N0FnNjZ5b3VuRHdiZ0w2a3JLMHRPMytjMHlOSllWaUF4RHRmU1JETWwvWnFmS3YvQ0doSFZENndQR0J4TTRqbjV0VnRTbFBkWnJlc1BPQlB5bDBMSENGREFZSmxrYThHNjlsalVwb3Bsd2o",
     imgClass: "w-full h-full object-cover object-bottom",
    isFullCover: true,
  },
  {
    id: "apple-store-app",
    tag: "APPLE STORE APP",
    title: "Put your bow on it.",
    subtitle: "Make the gift unmistakably theirs with a personalized message created especially for them.",
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-subscriptions-202605?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=WW05TjdlcC83b2p3NDlrR3ZVbk1xYk4zaUxnUFVTeUlGeUNxWkhYTVpQc3l0U1ZtOFgzWEVDRzk0cFh3T2wrcVN5aWNYUFpIbkFhdm03T3BzSjdVSTI2SnE5cVJVVzdjaUpRbUpzRk5lMEZYWTd1bDlYVlB5S1l0U0hTeGxwTi8",
    imgClass: "w-full h-full object-cover object-bottom",
    isFullCover: true, 
  },
  {
    id: "apple-store-app",
    tag: "APPLE STORE APP",
    title: "Put your bow on it.",
    subtitle: "Make the gift unmistakably theirs with a personalized message created especially for them.",
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-applepay-202509_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=SFNxMjRYSTFLdjBJZG1UYjBKRUNDcmhFdGViM1dXUFB2OHVEbysvQWNxVmliOTBDYU5saG5qVVFqcjlWTi9hWnFmS3YvQ0doSFZENndQR0J4TTRqbjlEWUx3MGRTUUsrTzRNVFNYbGNyNDRJWENHRFR3b0NFUUtLdS82SXloR0w",
    imgClass: "w-full h-full object-cover object-bottom",
    isFullCover: true, 
  },
  {
    id: "apple-store-app",
    tag: "APPLE STORE APP",
    title: "Put your bow on it.",
    subtitle: "Make the gift unmistakably theirs with a personalized message created especially for them.",
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-homekit-202405_GEO_US?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=UWdrNzNrY0ZiOGhRNlVuUlF4U3JoejVHYVpyWFdSYy85NGlTbU1VNHZsOVhuTTRtd2xSVWtmYmFrblI1clpGWmNva0xZQWFEV2ljOWRGNWZJRk4vWGgvOERJNEJMdXB2K2JwM2I2YmhadzhvWURZUjYwbkNTaGFvK0RGMEx4R0k",
    imgClass: "w-full h-full object-cover object-bottom",
    isFullCover: true, 
  },
];

// ==========================================
// Main Component
// ==========================================
export default function AppleExperience() {
  return (
    <div className="space-y-5">
      {/* Block Title */}
      <h3 className="text-2xl md:text-[28px] font-semibold tracking-tight text-[#6e6e73]">
        <span className="text-[#1d1d1f]">The Apple experience.</span> Do even more with Apple products and services.
      </h3>

      {/* Slider Container */}
      <HorizontalSlider>
        {EXPERIENCE_ITEMS.map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}
      </HorizontalSlider>
    </div>
  );
}

// ==========================================
// Sub-Component: Card Item
// ==========================================
function ExperienceCard({ item }) {
  const { title, subtitle, tag, image, titleHtml, imgClass, isFullCover, isBottomAlign } = item;

  return (
    <a
      href={`/experience/${item.id}`}
      className="relative block w-[340px] sm:w-[480px] h-[500px] rounded-[25px] bg-white p-8 overflow-hidden snap-start shrink-0 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group select-none border border-gray-100/50"
    >
      {/* Text Content Area */}
      <div className="relative z-20 flex flex-col text-left">
        {tag && (
          <span className="text-[12px] font-semibold tracking-wider text-[#6e6e73] uppercase mb-1.5">
            {tag}
          </span>
        )}
        
        
        {titleHtml ? (
          titleHtml
        ) : (
          <h4 className="text-[24px] md:text-[28px] font-bold leading-[32px] tracking-tight text-[#1d1d1f]">
            {title}
          </h4>
        )}

        {subtitle && (
          <p className="mt-2 text-[14px] leading-[20px] font-normal text-[#6e6e73] max-w-[95%]">
            {subtitle}
          </p>
        )}
      </div>

      {/* Image Display Area */}
      {isFullCover ? (
       
        <div className="absolute inset-0 z-0">
          <img src={image} alt={title || "Apple Experience"} className={imgClass} />
        </div>
      ) : (
        
        <div
          className={`relative flex-1 w-full overflow-hidden flex justify-center ${
            isBottomAlign ? "items-end" : "items-center"
          }`}
        >
          <img
            src={image}
            alt={title || "Apple Experience"}
            className={`${imgClass} transition-transform duration-500 group-hover:scale-[1.02]`}
          />
        </div>
      )}
    </a>
  );
}