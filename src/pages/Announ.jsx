function Announ() {
  return (
    <div className="w-full bg-white py-5 text-center shadow-sm">
      <p className="inline-flex items-center justify-center gap-1 px-4 font-normal text-[#1d1d1f] text-[14px] leading-[21px]">
        <span>
          Now you can buy Apple Watch
          <sup className="mx-[1px] text-[9px]">◊</sup>
          with education savings.
          <sup className="mx-[1px] text-[9px]">Δ</sup>
        </span>

        <a
          href="#learn-more"
          className="group ml-0.5 inline-flex items-center gap-0.5 text-[#0066cc] hover:underline"
        >
          Learn more
          <svg
            className="w-3 h-3"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <circle cx="12" cy="12" r="10" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v8M8 12h8"
            />
          </svg>
        </a>
      </p>
    </div>
  );
}

export default Announ;