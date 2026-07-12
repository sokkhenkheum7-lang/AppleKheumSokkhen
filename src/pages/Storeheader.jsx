const AnnouncementRibbon = () => (
  /* The layout breakout trick: sets width to viewport width and centers it */
  <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-white py-5 text-center shadow-sm ">
    <p className="inline-flex items-center justify-center gap-1 px-4 font-normal text-[#1d1d1f] text-[14px] leading-[21px]">
      <span>
        Now you can buy Apple Watch<sup className="mx-[1px] text-[9px]">◊</sup> with education savings.<sup className="mx-[1px] text-[9px]">Δ</sup>
      </span>
      <a href="#learn-more" className="group ml-0.5 inline-flex items-center gap-0.5 text-[#0066cc] hover:underline">
        Learn more
        <svg className="h-3 w-3 text-[#0066cc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
          <circle cx="12" cy="12" r="10" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8M8 12h8" />
        </svg>
      </a>
    </p>
  </div>
);

const StoreHeader = () => {
  const links = ["Connect with a Specialist", "Find an Apple Store"];

  return (
    <>
      {/* Renders full-width dynamically without breaking standard layout flows */}
      <AnnouncementRibbon />

      <div className="pt-21 pb-1 flex flex-col md:flex-row md:justify-between md:items-baseline gap-4">
        <h1 className="text-[64px] md:text-[80px] font-semibold tracking-tight text-[#1d1d1f] leading-none">
          Store
        </h1>
        
        <div className="md:text-right max-w-sm pb-12 md:-translate-y-[32%]">
          <h2 className="text-[28px] font-semibold leading-[32px] tracking-[0.196px] text-[#1d1d1f]">
            The best way to buy the<br className="hidden md:block" /> products you love.
          </h2>
          
          <div className="mt-4 flex flex-col items-start md:items-end gap-2">
            {links.map((text) => (
              <a
                key={text}
                href={`#${text.toLowerCase().replace(/ /g, "-")}`}
                className="inline-flex items-center text-[14px] text-[#0066cc] hover:underline group"
              >
                {text}
                <svg className="ml-1 w-[12px] h-[12px] stroke-current transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreHeader;