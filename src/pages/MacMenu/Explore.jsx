import React, { useState } from "react";

export default function Explore() {
    const [activeTab, setActiveTab] = useState("All products");

    const categories = ["All products", "Laptops", "Desktops", "Displays"];

    // Expanded dataset with colors, subtitles, pricing, and links to match the layout
    const exploreProducts = [
        // --- Laptops ---
        {
            name: "MacBook Neo",
            tagline: "The magic of Mac at a surprising price.",
            price: "From $699 or $58.25/mo. for 12 mo.",
            iconUrl: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/mbn_37b3fdaaf.jpg",
            colors: ["#dbdcd0", "#e3e4e5", "#cfcbd5", "#2e3641"],
            category: "Laptops",
        },
        {
            name: "MacBook Air 13” and 15”",
            tagline: "Thin. Fast. Powerful and portable.",
            price: "From $1299 or $108.25/mo. for 12 mo.",
            iconUrl: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/mba_13_15_e733a3435.jpg",
            colors: ["#dbdcd0", "#e3e4e5", "#cfcbd5", "#2e3641"],
            category: "Laptops",
        },
        {
            name: "MacBook Pro 14” and 16”",
            tagline: "The most advanced Mac laptops for demanding tasks.",
            price: "From $1999 or $166.58/mo. for 12 mo.",
            iconUrl: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/mbp_14_16_fa5e3a2b2.jpg",
            colors: ["#1d1d1f", "#e3e4e5"],
            category: "Laptops",
        },
        // --- Desktops ---
        {
            name: "iMac",
            tagline: "A gorgeous all-in-one computer.",
            price: "From $1299 or $108.25/mo. for 12 mo.",
            iconUrl: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/imac_24_7732743f3.jpg",
            colors: ["#4a90e2", "#50e3c2", "#b8e986", "#f5a623", "#ff8b94"],
            category: "Desktops",
        },
        {
            name: "Mac mini",
            tagline: "More muscle. More hustle.",
            price: "From $599 or $49.91/mo. for 12 mo.",
            iconUrl: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/mac_mini_d300dfe42.jpg",
            colors: ["#e3e4e5"],
            category: "Desktops",
        },
        {
            name: "Mac Studio",
            tagline: "Powerhouse performance.",
            price: "From $1999 or $166.58/mo. for 12 mo.",
            iconUrl: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/mac_studio_e9f221da0.jpg",
            colors: ["#e3e4e5"],
            category: "Desktops",
        },
        // --- Displays ---
        {
            name: "Studio Display",
            tagline: "A stunning 5K Retina display.",
            price: "From $1599 or $133.25/mo. for 12 mo.",
            iconUrl: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/studio_display_5c60e52bb.jpg",
            colors: ["#e3e4e5"],
            category: "Displays",
        },
        {
            name: "Studio Display",
            tagline: "A stunning 5K Retina display.",
            price: "From $1599 or $133.25/mo. for 12 mo.",
            iconUrl: "https://www.apple.com/assets-www/en_WW/mac/04_product_tile/large/studio_display_xdr_fef4b71f1.jpg",
            colors: ["#e3e4e5"],
            category: "Displays",
        },
    ];

    const filteredProducts = exploreProducts.filter((product) => {
        if (activeTab === "All products") return true;
        return product.category === activeTab;
    });

    return (
        <section className="bg-[#f5f5f7] pt-16 pb-16 w-full overflow-hidden font-sans antialiased">
            <div className="max-w-[1264px] mx-auto px-6 md:px-0">

                {/* Title */}
                <div className="mb-8">
                    <h2 className="text-[40px] md:text-[48px] font-semibold text-[#1d1d1f] tracking-tight leading-none">
                        Explore the lineup.
                    </h2>
                </div>

                {/* Category Tabs */}
                <div className="mb-12">
                    <div className="inline-flex bg-[#e8e8ed] p-[7px] rounded-full">
                        {categories.map((category) => {
                            const isActive = activeTab === category;
                            return (
                                <button
                                    key={category}
                                    onClick={() => setActiveTab(category)}
                                    className={`px-5 py-2 text-[17px] font-normal rounded-full transition-all duration-300 ease-out outline-none ${isActive
                                            ? "bg-[#1d1d1f] text-white shadow-sm"
                                            : "text-[#1d1d1f] "
                                        }`}
                                >
                                    {category}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Carousel Window without Arrow Buttons */}
                <div className="relative flex items-center w-full">

                    {/* Product Cards Track */}
                    <div
                        className="flex space-x-6 overflow-x-auto scrollbar-none pb-8 pt-4 w-full snap-x snap-mandatory"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {filteredProducts.map((product, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col items-center min-w-[320px] md:min-w-[372px] max-w-[252px] snap-start"
                            >
                                {/* 1. Large Rounded Card Box */}
                                <div className="w-full bg-white rounded-2xl pt-10 pb-4 px-6 h-[252px] flex items-end justify-center mb-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <img
                                        src={product.iconUrl}
                                        alt={product.name}
                                        className="w-full max-h-[220px] object-contain transition-transform duration-300 hover:scale-105"
                                    />
                                </div>

                                {/* 2. Color Dot Selector */}
                                <div className="flex space-x-2 mb-4 justify-center">
                                    {product.colors.map((color, colorIdx) => (
                                        <span
                                            key={colorIdx}
                                            style={{ backgroundColor: color }}
                                            className="w-3 h-3 rounded-full border-black/10 "
                                        />
                                    ))}
                                </div>

                                {/* 3. Text Information Content */}
                                <h3 className="text-[20px] md:text-[24px] font-semibold text-gray-800 tracking-tight mb-1">
                                    {product.name}
                                </h3>

                                <p className="text-[20px] md:text-[14px] font-semibold text-gray-800 tracking-tight mb-7">
                                    {product.tagline}
                                </p>

                                {/* 4. Pricing Info */}
                                <p className="text-[11px] md:text-[12px] text-gray-700 mb-6">
                                    {product.price}
                                </p>

                                {/* 5. CTAs Buttons */}
                                <div className="flex items-center space-x-8">
                                    <a
                                        href="#"
                                        className="bg-[#0071e3] hover:bg-[#0077ed] text-white text-[14px] px-[25px] py-[8px] rounded-full transition-colors duration-200"
                                    >
                                        Learn more
                                    </a>
                                    <a
                                        href="#"
                                        className="text-[#0066cc] hover:underline text-[14px] font-medium inline-flex items-center group/link"
                                    >
                                        Buy
                                        <span className="ml-1 transition-transform group-hover/link:translate-x-0.6">&gt;</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}