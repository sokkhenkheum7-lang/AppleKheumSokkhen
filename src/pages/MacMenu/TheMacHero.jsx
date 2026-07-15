import React, { useRef, useState, useEffect } from "react";

export default function TheMacHero() {
    const scrollContainerRef = useRef(null);
    const [showLeftBtn, setShowLeftBtn] = useState(false);
    const [showRightBtn, setShowRightBtn] = useState(true);

    const macProducts = [
        {
            name: "MacBook Neo",
            iconUrl: "https://www.apple.com/assets-www/en_WW/mac/04_chapternav/small/nav_mbn_1fa302e95.png",
            isNew: false,
        },
        {
            name: "MacBook Air",
            iconUrl: "https://www.apple.com/assets-www/en_WW/mac/04_chapternav/small/nav_mba_ea12e0d5b.png",
        },
        {
            name: "MacBook Pro",
            iconUrl: "https://www.apple.com/assets-www/en_WW/mac/04_chapternav/small/nav_mbp_bfa749034.png",
        },
        {
            name: "iMac",
            iconUrl: "https://www.apple.com/assets-www/en_WW/mac/04_chapternav/small/nav_imac_24_832584093.png",
        },
        {
            name: "Mac mini",
            iconUrl: "https://www.apple.com/assets-www/en_WW/mac/04_chapternav/small/nav_mac_mini_bff82a643.png",
        },
        {
            name: "Mac Studio",
            iconUrl: "https://www.apple.com/assets-www/en_WW/mac/04_chapternav/small/nav_mac_studio_f2f3212ea.png",
        },
        {
            name: "Compare",
            iconUrl: "https://www.apple.com/assets-www/en_WW/mac/04_chapternav/small/nav_compare_cacd858a8.png",
        },
        {
            name: "Displays",
            iconUrl: "https://www.apple.com/assets-www/en_WW/mac/04_chapternav/small/nav_displays_7c0628398.png",
        },
        {
            name: "Accessories",
            iconUrl: "https://www.apple.com/assets-www/en_WW/mac/04_chapternav/small/nav_accessories_2a4e78f16.png",
        },
        {
            name: "Shop Mac",
            iconUrl: "https://www.apple.com/assets-www/en_WW/mac/04_chapternav/small/nav_shop_mac_0f8893308.png",
        },
        {
            name: "Golden Gate",
            iconUrl: "https://www.apple.com/assets-www/en_WW/mac/07_chapternav/small/nav_macos_889578ffc.png",
        },
    ];

    const handleScroll = () => {
        const container = scrollContainerRef.current;
        if (container) {
            const { scrollLeft, scrollWidth, clientWidth } = container;
            setShowLeftBtn(scrollLeft > 5);
            setShowRightBtn(scrollLeft + clientWidth < scrollWidth - 5);
        }
    };

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = direction === "left" ? -300 : 300;
            container.scrollBy({
                left: scrollAmount,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            handleScroll();
            container.addEventListener("scroll", handleScroll);
        }
        return () => {
            if (container) {
                container.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    return (
        <section className="bg-[#f5f5f7] md:bg-white pt-14 pb-9 w-full overflow-hidden font-sans antialiased">
            <div className="max-w-[1264px] mx-auto px-6 md:px-0">

                {/* Title "Mac" */}
                <div className="mb-10 md:mb-12">
                    <h1 className="text-[80px] md:text-[80px] font-semibold text-[#1d1d1f] tracking-tight leading-none">
                        Mac
                    </h1>
                </div>

                {/* Carousel Container */}
                <div className="relative flex items-center group/carousel">

                    {/* Left Arrow Button */}
                    {showLeftBtn && (
                        <button
                            onClick={() => scroll("left")}
                            className="absolute left-0 bg-white hover:bg-[#e8e8ed] w-4 h-17 flex items-center justify-center focus:outline-none z-10 transition-all duration-200"
                            aria-label="Scroll left"
                        >
                            <svg
                                className="w-4 h-4 text-gray-500"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    )}

                    {/* Carousel List */}
                    <div
                        ref={scrollContainerRef}
                        className="flex space-x-8 md:space-x-10 overflow-x-auto scrollbar-none pb-4 w-full snap-x snap-mandatory"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {macProducts.map((product, idx) => (
                            <a
                                key={idx}
                                href="#"
                                className="flex flex-col items-center text-center group min-w-[75px] md:min-w-[85px] snap-start"
                            >
                                {/* Product Icon Area */}
                                <div className="h-[80px] flex items-end justify-center mb-2.5 transition-transform duration-300 group-hover:scale-105">
                                    <img
                                        src={product.iconUrl}
                                        alt={product.name}
                                        className="max-full object-contain"
                                    />
                                </div>

                                {/* Product Name (Fixed: Added whitespace-nowrap) */}
                                <span className="text-[12px] md:text-[14px] font-semibold text-gray-600 tracking-normal leading-tight whitespace-nowrap">
                                    {product.name}
                                </span>
                            </a>
                        ))}
                    </div>

                    {/* Right Arrow Button */}
                    {showRightBtn && (
                        <button
                            onClick={() => scroll("right")}
                            className="absolute right-0 bg-white hover:bg-[#e8e8ed] w-4 h-17 flex items-center justify-center focus:outline-none z-10 transition-all duration-200"
                            aria-label="Scroll right"
                        >
                            <svg
                                className="w-4 h-4 text-gray-500"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    )}
                </div>

            </div>
        </section>
    );
}