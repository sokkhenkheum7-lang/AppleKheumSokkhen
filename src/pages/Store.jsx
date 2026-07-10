import React, { useRef, useState, useEffect } from "react";
import Accessories from "./Accessories";
import Lounder from "./lounder";
import AppleExperience from "./AppleExperience";
import AppleSaving from "./AppleSaving";
import Quick_link from "./quick_link";
import Footer from "../components/layout/Footer";

// Import your local icon files from your assets folder here:
import TradeInIcon from "../assets/icon/cphone1.jpg";
import card from "../assets/icon/cphone2.jpg";
import smile from "../assets/icon/cphone3.jpg";
import delivery from "../assets/icon/cphone4.jpg";
import Applebage from "../assets/icon/cphone5.jpg";
import Appleorange from "../assets/icon/cphone6.jpg";

// ==========================================
// Mock Data Configurations
// ==========================================
const categories = [
  { name: "Mac", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-mac-nav-202603?wid=400&hei=260&fmt=png-alpha" },
  { name: "iPhone", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-watch-nav-202509?wid=400&hei=260&fmt=png-alpha" },
  { name: "iPad", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-ipad-nav-202405?wid=400&hei=260&fmt=png-alpha" },
  { name: "Apple Watch", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-watch-nav-202509?wid=400&hei=260&fmt=png-alpha" },
  { name: "Apple Vision Pro", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-vision-pro-nav-202401?wid=400&hei=260&fmt=png-alpha" },
  { name: "AirPods", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-airpods-nav-202509?wid=400&hei=260&fmt=png-alpha" },
  { name: "AirTag", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-airtags-nav-202601?wid=400&hei=260&fmt=png-alpha" },
  { name: "Apple TV 4K", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha" },
  { name: "HomePod", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha" },
  { name: "Accessories", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-accessories-nav-202603?wid=400&hei=260&fmt=png-alpha" },
  { name: "Apple Gift Card", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-13-holiday-giftcards-asit-agc-nav-202111?wid=400&hei=260&fmt=png-alpha" },
];

const latestProducts = [
  { tag: "", title: "iPhone 17 Pro", subtitle: "All out Pro.", price: "From $1099 or $45.79/mo. for 24 mo.²", bgClass: "bg-black text-white", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-iphone-17-pro-202509?wid=800&hei=1000&fmt=jpeg&qlt=90" },
  { tag: "NEW", title: "MacBook Neo", subtitle: "The magic of Mac at a surprising price.", price: "From $699 or $58.25/mo. for 12 mo.⁴", bgClass: "bg-white text-[#1d1d1f] border border-[#e8e8ed]", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-macbook-neo-202603?wid=800&hei=1000&fmt=jpeg&qlt=90" },
  { tag: "", title: "iPhone 17e", subtitle: "Feature stacked. Value packed.", price: "From $599 or $24.95/mo. for 24 mo.⁵", bgClass: "bg-white text-[#1d1d1f] border border-[#e8e8ed]", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-iphone-17e-202603?wid=800&hei=1000&fmt=jpeg&qlt=90" },
  { tag: "FREE ENGRAVING", title: "AirPods Max 2", subtitle: "New intelligent features. More immersive listening.", price: "$549 or $91.50/mo. for 6 mo.±", bgClass: "bg-white text-[#1d1d1f] border border-[#e8e8ed]", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-airpods-max-202409_GEO_US?wid=800&hei=1000&fmt=jpeg&qlt=90" },
  { tag: "", title: "MacBook Pro", subtitle: "Now with M5 Pro, and M5 Max.", price: "From $1999 or $166.58/mo. for 12 mo.²", bgClass: "bg-black text-white", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-macbook-pro-202510?wid=800&hei=1000&fmt=jpeg&qlt=90" },
  { title: "Apple Watch Series 11", subtitle: "The ultimate way to watch your health", price: "$399 or $33.25/mo. for 12 mo.±", bgClass: "bg-white text-[#1d1d1f] border border-[#e8e8ed]", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-watch-s11-202509?wid=800&hei=1000&fmt=jpeg&qlt=90" },
];

const helpCards = [
  { tag: "APPLE SPECIALIST", title: "Shop one-on-one with a Specialist online.", bgClass: "bg-white text-[#1d1d1f] border border-[#e8e8ed]", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-specialist-help-202512?wid=960&hei=1000&fmt=p-jpg&qlt=95" },
  { title: "Shop with a Specialist over video.", subtitle: "Choose your next device in a guided, one-way video session.", bgClass: "bg-white text-[#1d1d1f] border border-[#e8e8ed]", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-specialist-video-202601?wid=1920&hei=2000&fmt=p-jpg&qlt=95" },
  { tag: "Today at Apple", title: "Explore Apple Intelligence", subtitle: "Come try it for yourself in a free session at the Apple Store.", bgClass: "bg-white text-[#1d1d1f] border border-[#e8e8ed]", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-taa-ai-202604?wid=960&hei=1000&fmt=p-jpg&qlt=95" },
  { tag: "Today at Apple", title: "Join free sessions at the Apple Store.", subtitle: "Learn about the latest features and how to go further with your Apple device.", bgClass: "bg-white text-[#1d1d1f] border border-[#e8e8ed]", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-taa-202604?wid=960&hei=1000&fmt=p-jpg&qlt=95" },
  { tag: "PERSONAL SETUP", title: "Join free sessions at the Apple Store.", subtitle: "Let us guide your through data transfer, the latest feature, and more in an online, one-on-one session.", bgClass: "bg-white text-[#1d1d1f] border border-[#e8e8ed]", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-personal-setup-202408_GEO_US?wid=960&hei=1000&fmt=jpeg&qlt=90" },
  { title: "Get expert service and support.", bgClass: "bg-white text-[#1d1d1f] border border-[#e8e8ed]", img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-50-genius-202603?wid=960&hei=1000&fmt=p-jpg&qlt=95" },
];

const appleDifferent = [
  { iconType: "trade-in", titleHighlight: "Trade in your current device.", titleEnd: " Get credit toward a new one.†", highlightColor: "text-[#007AFF]" },
  { iconType: "card", iconColor: "text-[#008000]", titleNormal: "Pay in full or ", titleHighlight: "pay over time.", titleEnd: " Your choice.", highlightColor: "text-[#008000]" },
  { iconType: "smile", iconColor: "text-[#a133e3]", titleNormal: "Make them yours. ", titleHighlight: "Engrave a mix of emoji, names, and numbers for free.", highlightColor: "text-[#a133e3]" },
  { iconType: "delivery", titleNormal: "Enjoy ", titleHighlight: "two-hour delivery ", titleMiddle: "from an Apple Store, ", titleHighlight2: "free delivery", titleMiddle2: ", or ", titleHighlight3: "easy pickup.", titleEnd: "¹", highlightColor: "text-[#008000]" },
  { iconType: "Applebage", titleNormal: "Get a ", titleHighlight: "Personalized Shopping ", titleMiddle: "experince in the ", titleHighlight2: "Apple Store app.", highlightColor: "text-[#3F6EB8]" },
  { iconType: "Appleorange", titleNormal: "Customize", titleHighlight: "a Mac and style an Apple Watch just for them.", highlightColor: "text-[#3F6EB8]" }
];

// ==========================================
// EXPORTING THE SLIDER SO ACCESSORIES CAN USE IT
// ==========================================


// ==========================================
// Main Store Layout Component
// ==========================================
export default function Store() {
  const [activeCategory, setActiveCategory] = useState(0);

  const handleDifferentCardClick = (link) => {
    window.location.hash = link;
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] font-sans antialiased pb-24 pt-11">
      <AnnouncementRibbon />

      <div className="mx-auto max-w-[89%] px-6 lg:px-0 space-y-16">
        <StoreHeader />

        {/* Categories Section */}
        <div className="-mt-16">
          <HorizontalSlider containerClass="gap-6 text-[16px]">
            {categories.map((item, index) => (
              <CategoryCard
                key={item.name}
                item={item}
                active={activeCategory === index}
                onClick={() => setActiveCategory(index)}
              />
            ))}
          </HorizontalSlider>
        </div>

        {/* 1st Showcase Block: Product Showcase Section */}
        <div className="space-y-5">
          <h3 className="text-[24px] md:text-[28px] font-semibold tracking-tight text-[#6e6e73]">
            <span className="text-[#1d1d1f]">The latest.</span> Take a look at what’s new, right now.
          </h3>
          <HorizontalSlider>
            {latestProducts.map((product, idx) => (
              <ProductCard key={product.title || idx} product={product} />
            ))}
          </HorizontalSlider>
        </div>
        {/* 3rd Showcase Block: Help & Support Section */}
        <div className="space-y-5">
          <h3 className="text-[24px] md:text-[28px] font-semibold tracking-tight text-[#6e6e73]">
            <span className="text-[#1d1d1f]">Help is here.</span> Whenever and however you need it.
          </h3>
          <HorizontalSlider>
            {helpCards.map((card, idx) => (
              <HelpCard key={card.title || idx} card={card} />
            ))}
          </HorizontalSlider>
        </div>
         {/* 2nd Showcase Block: Apple Store Difference Section */}
        <div className="space-y-6">
          <h3 className="text-[24px] md:text-[28px] font-semibold tracking-tight text-[#6e6e73]">
            <span className="text-[#1d1d1f]">The Apple Store difference.</span> Even more reasons to shop with us.
          </h3>
          <HorizontalSlider>
            {appleDifferent.map((card, idx) => (
              <AppleDifferent
                key={idx}
                card={card}
                onClick={() => handleDifferentCardClick(card.link)}
              />
            ))}
          </HorizontalSlider>
        </div>
        {/* 4th Showcase Block: Accessories Section (Moved directly below Help section) */}
        <Accessories />
        <Lounder/>
        <AppleExperience />
       
       
        <AppleSaving/>
         <Quick_link/>
         <Footer/>
      </div>
     
    </div>
  );
}

// ==========================================
// Sub-Components
// ==========================================
function IconSelector({ type }) {
  switch (type) {
    case "trade-in": return <img src={TradeInIcon} alt="Trade In" className="w-11 h-11 object-contain" />;
    case "card": return <img src={card} alt="Card" className="w-11 h-11 object-contain" />;
    case "smile": return <img src={smile} alt="Smile" className="w-11 h-11 object-contain" />;
    case "delivery": return <img src={delivery} alt="Delivery" className="w-11 h-11 object-contain" />;
    case "Applebage": return <img src={Applebage} alt="Badge" className="w-11 h-11 object-contain" />;
    case "Appleorange": return <img src={Appleorange} alt="Orange" className="w-11 h-11 object-contain" />;
    default: return null;
  }
}

function AnnouncementRibbon() {
  return (
    <div className="w-full bg-white py-5 text-center shadow-sm">
      <p className="inline-flex items-center justify-center gap-1 px-4 font-normal text-[#1d1d1f] text-[14px] leading-[21px]">
        <span>Now you can buy Apple Watch<sup className="mx-[1px] text-[9px]">◊</sup> with education savings.<sup className="mx-[1px] text-[9px]">Δ</sup></span>
        <a href="#learn-more" className="group ml-0.5 inline-flex items-center gap-0.5 text-[#0066cc] hover:underline">
          Learn more
          <svg className="h-3 w-3 text-[#0066cc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8M8 12h8" />
          </svg>
        </a>
      </p>
    </div>
  );
}

function StoreHeader() {
  return (
    <div className="pt-21 pb-1 flex flex-col md:flex-row md:justify-between md:items-baseline gap-4">
      <h1 className="text-[64px] md:text-[80px] font-semibold tracking-tight text-[#1d1d1f] leading-none">Store</h1>
      <div className="md:text-right max-w-sm pb-12 md:-translate-y-[32%]">
        <h2 className="text-[28px] font-semibold leading-[32px] tracking-[0.196px] text-[#1d1d1f]">
          The best way to buy the<br className="hidden md:block" />products you love.
        </h2>
        <div className="mt-4 space-y-2">
          {["Connect with a Specialist", "Find an Apple Store"].map((text, i) => (
            <React.Fragment key={text}>
              {i > 0 && <br />}
              <a href={`#${text.toLowerCase().replace(/ /g, "-")}`} className="inline-flex items-center text-[14px] text-[#0066cc] hover:underline group">
                {text}
                <svg className="ml-1 w-[12px] h-[12px] stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
                </svg>
              </a>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

function CategoryCard({ item, active, onClick }) {
  return (
    <div onClick={onClick} className="flex flex-col items-center text-center min-w-[120px] snap-start cursor-pointer group/item select-none">
      <div className="w-[120px] h-[78px] flex items-center justify-center rounded-xl">
        <img src={item.img} alt={item.name} className="max-h-[76px] max-w-full duration-300" />
      </div>
      <span className="mt-3 text-[13px] font-semibold tracking-tight text-[#1d1d1f]">{item.name}</span>
    </div>
  );
}

function ProductCard({ product }) {
  const isDarkBg = product.bgClass.includes("bg-black");
  return (
    <div className={`relative w-[340px] sm:w-[400px] h-[500px] rounded-[25px] px-8 pt-8 pb-8 overflow-hidden snap-start shrink-0 transition-all duration-500 hover:scale-[1.01] shadow-sm hover:shadow-md ${product.bgClass}`}>
      <div className="relative z-20 flex flex-col">
        {product.tag && <span className="mb-2 text-[14px] font-semibold uppercase tracking-[0.12em] text-[#bf4800]">{product.tag}</span>}
        <h4 className={`text-[28px] font-bold leading-[32px] tracking-[0.196px] ${isDarkBg ? "text-white" : "text-[#1d1d1f]"}`}>{product.title}</h4>
        <p className={`mt-1 text-[14px] font-bold leading-[18px] ${isDarkBg ? "text-white/90" : "text-[#1d1d1f]"}`}>{product.subtitle}</p>
        <p className={`mt-[3px] text-[14px] font-normal leading-[20px] ${isDarkBg ? "text-[#a1a1a6]" : "text-[#6e6e73]"}`}>{product.price}</p>
      </div>
      <div className="absolute inset-x-0 bottom-0 top-[18%] z-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <img src={product.img} alt={product.title} className="w-full h-auto object-contain -translate-y-6" />
      </div>
    </div>
  );
}

function HelpCard({ card }) {
  const isDarkBg = card.bgClass.includes("bg-black");
  return (
    <div className={`relative w-[380px] sm:w-[480px] h-[500px] rounded-[25px] px-8 pt-8 pb-8 overflow-hidden snap-start shrink-0 transition-all duration-500 hover:scale-[1.01] shadow-sm hover:shadow-md ${card.bgClass}`}>
      <div className="relative z-20 flex flex-col max-w-[320px]">
        {card.tag && <span className={`text-[12px] font-semibold tracking-wider mb-2 ${isDarkBg ? "text-white/60" : "text-[#6e6e73]"}`}>{card.tag}</span>}
        <h4 className={`text-[28px] font-semibold tracking-tight leading-[34px] ${isDarkBg ? "text-white" : "text-[#1d1d1f]"}`}>{card.title}</h4>
        {card.subtitle && <p className={`mt-2 text-[14px] font-medium leading-[20px] ${isDarkBg ? "text-white/70" : "text-[#6e6e73]"}`}>{card.subtitle}</p>}
      </div>
      <div className="absolute inset-0 z-0">
        <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

function AppleDifferent({ card, onClick }) {
  return (
    <div onClick={onClick} className="relative sm:w-[309px] h-[240px] rounded-[25px] bg-white shadow-sm border border-gray-100/46 p-8 flex flex-col justify-start gap-3 snap-start shrink-0 transition-all duration-300 hover:shadow-md hover:scale-[1.01] cursor-pointer select-none">
      <div><IconSelector type={card.iconType} /></div>
      <p className="text-[24px] font-semibold leading-[25px] tracking-[-0.21px] normal-case text-left">
        {card.titleNormal && <span>{card.titleNormal}</span>}
        {card.titleHighlight && <span className={`${card.highlightColor} font-semibold`}>{card.titleHighlight}</span>}
        {card.titleMiddle && <span>{card.titleMiddle}</span>}
        {card.titleHighlight2 && <span className={`${card.highlightColor} font-semibold`}>{card.titleHighlight2}</span>}
        {card.titleMiddle2 && <span>{card.titleMiddle2}</span>}
        {card.titleHighlight3 && <span className={`${card.highlightColor} font-semibold`}>{card.titleHighlight3}</span>}
        {card.titleEnd && <span>{card.titleEnd}</span>}
      </p>
    </div>
  );
}


export function HorizontalSlider({ children, containerClass = "" }) {

  const scrollRef = useRef(null);
  const [scrollState, setScrollState] = useState({ left: false, right: true });

  const checkScrollLimits = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setScrollState({
        left: scrollLeft > 10,
        right: scrollLeft + clientWidth < scrollWidth - 10,
      });
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener("scroll", checkScrollLimits);
    const timer = setTimeout(checkScrollLimits, 100);
    return () => {
      container.removeEventListener("scroll", checkScrollLimits);
      clearTimeout(timer);
    };
  }, []);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const amount = direction === "left" ? -clientWidth * 0.5 : clientWidth * 0.5;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative group/slider w-full">
      {scrollState.left && (
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-[#e8e8ed]/80 hover:bg-[#e8e8ed] backdrop-blur-md shadow-sm opacity-0 group-hover/slider:opacity-100 transition-all duration-200 cursor-pointer"
          aria-label="Scroll Left"
        >
          <svg className="w-6 h-6 stroke-[#1d1d1f]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
      )}

      <div
        ref={scrollRef}
        className={`flex gap-4 overflow-x-auto scroll-smooth snap-x pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${containerClass}`}
      >
        {children}
      </div>

      {scrollState.right && (
        <button
          onClick={() => handleScroll("right")}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-[#e8e8ed]/80 hover:bg-[#e8e8ed] backdrop-blur-md shadow-sm opacity-0 group-hover/slider:opacity-100 transition-all duration-200 cursor-pointer"
          aria-label="Scroll Right"
        >
          <svg className="w-6 h-6 stroke-[#1d1d1f]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      )}
    </div>
  );
}


export function HorizontalSlider1 ({ children, containerClass = "" }) {
  const scrollRef = useRef(null);
  const [scrollState, setScrollState] = useState({ left: false, right: true });

  const checkScrollLimits = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setScrollState({
        left: scrollLeft > 10,
        right: scrollLeft + clientWidth < scrollWidth - 10,
      });
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener("scroll", checkScrollLimits);
    const timer = setTimeout(checkScrollLimits, 100);
    return () => {
      container.removeEventListener("scroll", checkScrollLimits);
      clearTimeout(timer);
    };
  }, []);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const amount = direction === "left" ? -clientWidth * 0.5 : clientWidth * 0.5;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative group/slider w-full">
      {scrollState.left && (
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-[#e8e8ed]/80 hover:bg-[#e8e8ed] backdrop-blur-md shadow-sm opacity-0 group-hover/slider:opacity-100 transition-all duration-200 cursor-pointer"
          aria-label="Scroll Left"
        >
          <svg className="w-6 h-6 stroke-[#1d1d1f]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
      )}

      <div
        ref={scrollRef}
        className={`flex gap-4 overflow-x-auto scroll-smooth snap-x pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${containerClass}`}
      >
        {children}
      </div>

      {scrollState.right && (
        <button
          onClick={() => handleScroll("right")}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-[#e8e8ed]/80 hover:bg-[#e8e8ed] backdrop-blur-md shadow-sm opacity-0 group-hover/slider:opacity-100 transition-all duration-200 cursor-pointer"
          aria-label="Scroll Right"
        >
          <svg className="w-6 h-6 stroke-[#1d1d1f]" fill="none" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      )}
    </div>
  );
}