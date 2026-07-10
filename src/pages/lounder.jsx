import React from "react";
import { HorizontalSlider } from "./Store";


const LOUNDER_ITEMS = [
    {
        id: "iphone-case",
        isNew: true,
        title: "iPhone 17 Pro Silicone Case with MagSafe – Bright Guava",
        price: 49.00,
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-max-select-202409-midnight?wid=400&hei=400&fmt=jpeg&qlt=90&.v=azQxRkVJKzd6V3J0aGNqWFhLMzBmdmVWNWdHYnp5cHkwMldsSElEOHpydzZxenl2STByZjdmUGYvR3dmM2RON01LWlMyVmEreEd6UVBWaXRHdkpLMWppQWdEZjVIVUoweGVCQnUrWEowU1ZhN1ZHY2VKVGQ4Nmx6UkdSNXd0OGI",
        colors: [
            { name: "Bright Guava", hex: "#ff5e62" },
            { name: "Cream", hex: "#f9eecf" },
            { name: "Clay", hex: "#dfd2c4" },
            { name: "Brown", hex: "#8b5a2b" },
            { name: "Deep Navy", hex: "#3b3c4a" },
            { name: "Charcoal", hex: "#2c2d30" },
        ]
    },
    {
        id: "crossbody-strap-1",
        isNew: true,
        title: "Crossbody Strap - Bright Guava",
        price: 59.00,
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-pro-3-hero-select-202509?wid=400&hei=400&fmt=jpeg&qlt=90&.v=cmp4MmZ6OWxOeHNNTXh4SzlBNUpEb1RucE9zZTI5eEREaWZpY29lSld3eVRLNDVIb25yeWxTSzhxdXNNaFBBZmJGcXNRQnFCV0w3WVRjTExvdm1ic1YxRUxFRmRlWDBITzhnRmZ5OTRmaVdKTExiOEFsRmxtQ2Nua0tRSC83MkI",
        
        
    },
    {
        id: "magsafe-charger",
        isNew: true,
        title: "MagSafe Charger (1 m)",
        price: 39.00,
        colors: [],
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-4-anc-select-202409?wid=400&hei=400&fmt=jpeg&qlt=90&.v=Qklmb1JJend3cVIxSUxIeFBIRk96bThJMURFZUhTTm9tejgvK2t1SGM0aEQ4eDQxcUNOL3l1WDd2VTYzMXJYbkJkRlpCNVhYU3AwTldRQldlSnpRa01rSksyTE9QS1lFVXpHNmJsRVlaOWM"
    },
    {
        id: "crossbody-strap-2",
        isNew: true,
        title: "Crossbody Strap - Bright Guava",
        price: 59.00,
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MX743?wid=400&hei=400&fmt=jpeg&qlt=90&.v=d1RLSDZzQTRtK1UxZmVlUFRKNGgvZllvYS9naDJJdU9KTWdGWjhKWFRmSjNqeEcvVzZaaVU2a3ptRnN4aU8wUGovUE9KcXhKNTlHR1RBR2lHbUtXcWc",
        colors: []
    },
    {
        id: "crossbody-strap-3",
        isNew: true,
        title: "Crossbody Strap - Bright Guava",
        price: 59.00,
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/homepod-select-midnight-202210?wid=400&hei=400&fmt=jpeg&qlt=90&.v=N0JQcmtNWnVWeGozUXcxK2ZBcC9vUWxZUW9uUDlJNzU0RkU2VmwwNjZiSVZOYmZXUnpWekhFcFdLRUF2UkJ6V3ZvdUZlR0V0VUdJSjBWaDVNVG95Yk9DOFpxbkN3eGxiNlhoQmFhM0h0dms",
        colors: [
            { name: "Soft Pink", hex: "#fcd7d9" },
            { name: "Bright Guava", hex: "#ff5e62" },
            { name: "Lime", hex: "#dfff4f" },
            { name: "Navy", hex: "#1f2937" },
            { name: "Sage", hex: "#b5c4b1" },
            { name: "Taupe", hex: "#d1c7bd" },
        ]
    },
    {
        id: "crossbody-strap-4",
        isNew: true,
        title: "Crossbody Strap - Bright Guava",
        price: 59.00,
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/homepod-mini-select-orange-202110?wid=400&hei=400&fmt=jpeg&qlt=90&.v=K2c3bEwyaWVDeDZkdHpLbHkwcGVSckhndCtsZnAwTnFpWXhSS0Y4SW9oQXhNY0EwcmJVRnhWZldVZU9DRFJLSC85S3R4M0M3WGhIQVNOK3lBdUI5K1pDMDFGR3N1a0NhQ0RkTFYxMXBYTTNMQ2gzYU14VEs0V1BFdWdmdWl3NGg",
        colors: [
            { name: "Soft Pink", hex: "#fcd7d9" },
            { name: "Bright Guava", hex: "#ff5e62" },
            { name: "Lime", hex: "#dfff4f" },
            { name: "Navy", hex: "#1f2937" },
            { name: "Sage", hex: "#b5c4b1" },
            { name: "Taupe", hex: "#d1c7bd" },
        ]
    },
    {
        id: "crossbody-strap-5",
        isNew: true,
        title: "Crossbody Strap - Bright Guava",
        price: 59.00,
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MUW33?wid=400&hei=400&fmt=jpeg&qlt=90&.v=Y0NJY0FIK2MrLzFEY2d0a2ZDMHlvZllvYS9naDJJdU9KTWdGWjhKWFRmSnNlVnN6Nk9JbXRKOXBHdndDeUFudTF1dXdBVmYwbTZlVm9kUU1oSmlsSXc",
        colors: [
            { name: "Soft Pink", hex: "#fcd7d9" },
            { name: "Bright Guava", hex: "#ff5e62" },
            { name: "Lime", hex: "#dfff4f" },
            { name: "Navy", hex: "#1f2937" },
            { name: "Sage", hex: "#b5c4b1" },
            { name: "Taupe", hex: "#d1c7bd" },
        ]
    },
    {
        id: "crossbody-strap-6",
        isNew: true,
        title: "Crossbody Strap - Bright Guava",
        price: 59.00,
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MWQW3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=Tng1VUJnajlwS2g0Q1VDTS9sR3lNL1lvYS9naDJJdU9KTWdGWjhKWFRmS1FHYldaaElOYzc2eDJuK01UTVNHMzNWQnl0SjMxSFdJdlhFYlZwT3Zub2c",
        colors: [
            { name: "Soft Pink", hex: "#fcd7d9" },
            { name: "Bright Guava", hex: "#ff5e62" },
            { name: "Lime", hex: "#dfff4f" },
            { name: "Navy", hex: "#1f2937" },
            { name: "Sage", hex: "#b5c4b1" },
            { name: "Taupe", hex: "#d1c7bd" },
        ]
    },
    
];

export default function Lounde() {
    return (
        <div className="space-y-5">
            <h3 className="text-2xl md:text-[28px] font-semibold tracking-tight text-[#6e6e73]">
                <span className="text-[#1d1d1f]">Lounde and clean.</span> Essentials that pair perfectly with your favorite devices.
            </h3>

            <HorizontalSlider>
                {/* INTRO CARD */}
                <a
                    href="/lounde"
                    className="relative block w-[340px] sm:w-[400px] h-[500px] rounded-[25px] bg-white p-8 overflow-hidden snap-start shrink-0 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group select-none"
                >
                    <div>
                        <h4 className="text-[26px] md:text-[28px] font-semibold tracking-tight text-[#1d1d1f]">Here and wow.</h4>
                        <p className="mt-2 text-sm leading-[18px] text-[#1d1d1f]">The accessories you love.<br />In a fresh mix of colors.</p>
                    </div>
                    <div className="relative flex-1 w-full mt-4 overflow-hidden flex items-end justify-center">
                        <img
                            src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-apple-music-202509?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=REFqMnc0RUtNcWNBem5LRlFGZ25lZDA2cHF6SXV4ckNWYnFUOUZLbDdhdHFTRjNxbmh1UnU2R29ibGdpZUFXc0prY3crUWRsN1dqVjRnMHR5S1hVblA5cThJWHhkRERtVkYrVllZWnRyZEtNaXNLODV0dGVXcTFKcm95Yld5UnM"
                            className="w-full h-[520px] object-contain transition-transform duration-500 group-hover:scale-105"
                            alt="Promo"
                        />
                    </div>
                </a>

                {/* DYNAMIC PRODUCT CARDS */}
                {LOUNDER_ITEMS.map((product) => (
                    <AccessoryCard key={product.id} product={product} />
                ))}

                {/* END CARD */}
              
            </HorizontalSlider>
        </div>
    );
}


function AccessoryCard({ product }) {
    const { id, title, price, image, isNew, colors } = product;
    const hasColors = colors?.length > 0;

    return (
        <a
            href={`/products/${id}`}
            className="relative block w-[340px] sm:w-[313px] h-[500px] rounded-[25px] bg-white p-8 overflow-hidden snap-start shrink-0 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group select-none"
        >
            
            <div className="relative w-full h-[230px] flex items-center justify-center overflow-hidden">
                {image && (
                    <img
                        src={image}
                        alt={title}
                        className="h-[230px] w-[230px] object-contain transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                )}
            </div>

            <div className="relative z-20 mt-2 w-full">
                {hasColors && (
                    <div className="flex justify-center items-center gap-1.5 mb-4 h-6">
                        {colors.map((color) => (
                            <span
                                key={color.name}
                                title={color.name}
                                className="w-3 h-3 rounded-full border border-black/5 shadow-sm"
                                style={{ backgroundColor: color.hex }}
                            />
                        ))}
                        {colors.length > 5 && (
                            <span className="text-[11px] text-gray-400 font-medium ml-0.5">+</span>
                        )}
                    </div>
                )}

                <div className="w-full px-2 text-left">
                    {isNew && (
                        <span className="block text-[12px] font-semibold text-[#bf4800] mb-1">New</span>
                    )}
                    <h4 className="text-[17px] font-semibold leading-[22px] tracking-tight text-[#1d1d1f] line-clamp-2 min-h-[44px]">
                        {title}
                    </h4>
                    <p className="mt-3 text-[14px] text-[#1d1d1f]">
                        ${price.toFixed(2)}
                    </p>
                </div>
            </div>
        </a>
    );
}