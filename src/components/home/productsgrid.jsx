
import promo1 from "/src/assets/grid/promo_ipad1.jpg";
import promo2 from "/src/assets/grid/promo_ipad2.jpg";
import promo3 from "/src/assets/grid/promo_ipad3.jpg";
import promo4 from "/src/assets/grid/promo_ipad4.jpg";
import promo5 from "/src/assets/grid/promo_ipad5.jpg";
import promo6 from "/src/assets/grid/promo_ipad6.jpg";

const products = [
  {
    title: "MacBook Air",
    description: "Now supercharged by M5.",
    image: promo1,
    bgClass: "bg-gradient-to-b from-[#e8f3fb] to-[#f7fbfe]",
  },
  {
    
    title: "iPad Pro",
    description: "Advanced AI performance and game-Changing Capabilities.",
    image: promo2,
    bgClass: "bg-black",
    isDark: true,
  },
  {
    title: "MacBook Pro",
    description: "Now with M5, M5 Pro, and M5 Max.",
    image: promo3,
    bgClass: "bg-black",
    isDark: true,
  },
  {
    title: "WATCH",
    description: "The ultimate way to watch your health.",
    image: promo4,
    bgClass: "bg-[#f5f5f7]",
    watch: true,
    watchSeries: "SERIES 14",
  },
  {
    title: "Trade In",
    description: "Get $180–$650 in credit when you trade in iPhone 11 or higher.",
    image: promo5,
    bgClass: "bg-[#f5f5f7]",
    isLogoTitle: true,
  },
  {
    title: "Card",
    description: "Get up to 3% Daily Cash back with every purchase.",
    image: promo6,
    bgClass: "bg-[#f5f5f7]",
    isLogoTitle: true,
  },
];

const titleClass =
  "text-[28px] sm:text-[32px] md:text-[40px] font-semibold tracking-tight leading-tight";

function ProductTitle({
  title,
  watch,
  watchSeries,
  isLogoTitle,
  isIpadAir,
  isDark,
}) {
  const color = isDark ? "text-white" : "text-[#1d1d1f]";

  if (watch) {
    return (
      <h2 className={`flex items-center justify-center gap-1 ${titleClass} ${color}`}>
        <span className="text-xl sm:text-2xl md:text-3xl"></span>
        WATCH
        <span className="self-start pt-1 text-xs uppercase tracking-widest text-orange-600">
          {watchSeries}
        </span>
      </h2>
    );
  }

  if (isLogoTitle) {
    return (
      <h2 className={`flex items-center justify-center gap-1 ${titleClass} ${color}`}>
        <span className="text-xl sm:text-2xl md:text-3xl"></span>
        {title}
      </h2>
    );
  }

  if (isIpadAir) {
    return (
      <h2 className={`${titleClass} ${color}`}>
        iPad <span className="font-light italic text-blue-600">air</span>
      </h2>
    );
  }

  return <h2 className={`${titleClass} ${color}`}>{title}</h2>;
}

export default function ProductGrid() {
  return (
    <section className="w-ful bg-white p-3">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {products.map((item) => {
          const {
            title,
            description,
            image,
            bgClass,
            isDark,
            watch,
            watchSeries,
            isLogoTitle,
            isIpadAir,
          } = item;

          return (
            <article
              key={title}
              className={`relative flex h-[480px] w-full flex-col justify-between overflow-hidden sm:h-[520px] md:h-[580px] ${bgClass}`}
            >
              {/* ផ្នែកមាតិកា (Text) */}
              <div className="z-10 flex flex-col items-center px-6 pt-10 text-center md:pt-14">
                <ProductTitle
                  title={title}
                  watch={watch}
                  watchSeries={watchSeries}
                  isLogoTitle={isLogoTitle}
                  isIpadAir={isIpadAir}
                  isDark={isDark}
                />
                <p className={`mt-2 max-w-[360px] text-sm leading-snug sm:text-base md:text-lg ${isDark ? "text-[#b4b4b8]" : "text-[#1d1d1f]"}`}>
                  {description}
                </p>
                <div className="mt-4 flex gap-4">
                  <button className="rounded-full bg-[#0071e3] px-4 py-1.5 text-sm text-white hover:bg-[#0077ed]">
                    Learn more
                  </button>
                  {title !== "Trade In" && (
                    <button className={`rounded-full border px-4 py-1.5 text-sm transition ${isDark ? "border-white text-white hover:bg-white hover:text-black" : "border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3] hover:text-white"}`}>
                      Buy
                    </button>
                  )}
                </div>
              </div>

              {/* ផ្នែករូបភាព (កែសម្រួលនៅទីនេះ) */}
              <div className="absolute inset-0 z-0">
                <img
                  src={image}
                  alt={title}
                  draggable={false}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}