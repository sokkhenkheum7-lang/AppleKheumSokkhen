const AnnouncementRibbon = () => {
  return (
    <section className="w-full bg-white py-5 text-center shadow-sm">
      <p className="inline-flex items-center justify-center gap-1 px-4 text-[14px] leading-[21px] font-Regular text-[#1d1d1f]">
        <span>
          Now you can buy Apple Watch
          <sup className="mx-px text-[9px]">◊</sup>
          {" "}
          with education savings.
          <sup className="mx-px text-[9px]">Δ</sup>
        </span>

        <a
          href="#learn-more"
          className="inline-flex items-center gap-0.5 text-[#0066cc] hover:underline"
        >
          Learn more
          <svg
            className="h-3 w-3"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <circle cx="12" cy="12" r="10" />
            <path
              d="M12 8v8M8 12h8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </p>
    </section>
  );
};

const PageLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white pt-11">
      <AnnouncementRibbon />

      <main className="py-16">
        {children}
      </main>
    </div>
  );
};

export default PageLayout;