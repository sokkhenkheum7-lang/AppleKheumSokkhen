import React from "react";
import { HorizontalSlider } from "./Store";

const accessoryItems = [
    {
        id: "iphone-case",
        isNew: true,
        title: "iPhone 17 Pro Silicone Case with MagSafe – Bright Guava",
        price: 49.00,
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MHW04?wid=400&hei=400&fmt=jpeg&qlt=90&.v=OWtwNFlkMFZJVmFHU0ZnV2VVVVkvdllvYS9naDJJdU9KTWdGWjhKWFRmS1hyTy9uZ2N1SXFsMUcxRkU5VGJjaEhRZGE3MTNJQzBIbjNLQzRGNkZTNWc",
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
        id: "crossbody-strap",
        isNew: true,
        title: "Crossbody Strap - Bright Guava",
        price: 59.00,
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MHYX4?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=L04wMXpFUVUyS1J0SWd5Z1YySUNBQWtuVHYzMERCZURia3c5SzJFOTlPaXBpdlBFZ2hIbnpIWFdKK05jL0RkOGl6b0RkUjkvOFAwUGpXM3FISFJ0dEE",
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
        id: "magsafe-charger",
        isNew: false,
        title: "MagSafe Charger (1 m)",
        price: 39.00,
        colors: [],
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGD74?wid=400&hei=400&fmt=jpeg&qlt=90&.v=QU9iWWlMMm5oM3lvNEpzQyt4azJZdllvYS9naDJJdU9KTWdGWjhKWFRmSTdXcmkxZU5aTGtPSnAvQU9oVHRXVXV0ZThHVGpRblgrVERKYWI5R2FaWmc"
    },
    {
        id: "crossbody-strap",
        isNew: true,
        title: "iPhone 17e Clean Case with MagSafe",
        price: 49.00,
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MHWC4?wid=400&hei=400&fmt=jpeg&qlt=90&.v=TGRzbEExZ1hmQndnbDdGQXEzM1pWZllvYS9naDJJdU9KTWdGWjhKWFRmS2FYdGFuZ3VBL21jSTR5eStienlZLytvQ1ZwQXE3dUJuUnc0WnZUTWRPdlE",
        colors: [

        ]
    },
    {
        id: "crossbody-strap",
        
        title: "49mm Cleamentine Sport Brand-M/L",
        price: 49.00,
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MHYK4ref?wid=400&hei=400&fmt=jpeg&qlt=90&.v=bzA4SERRcldUS1BuWUpkcHhlTGpGOWVidldMUGJjaXo4L3NxcmNtKzZhUWMvQURoYTJTV01mUTVYVFk2eEVRaXl2c3ptS3dmbjg2WllpbTNud2ZsK3c",
        colors: [
            { name: "Soft Pink", hex: "#b0151c" },
            { name: "Bright Guava", hex: "#ff5e62" },
            { name: "Lime", hex: "rgb(166, 27, 174)" },
            { name: "Navy", hex: "#1f2937" },
            { name: "Sage", hex: "#b5c4b1" },
            { name: "Taupe", hex: "#9c5d1e" },
        ]
    },
    {
        id: "crossbody-strap",
      
        title: "Magic Keyboard for iPad Air 13-inch (M4)-US English-..",
        price: 319.00,
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGYY4?wid=400&hei=400&fmt=jpeg&qlt=90&.v=cXE4eWx0VnJZVVhyNEgrSHdoTXBFL1lvYS9naDJJdU9KTWdGWjhKWFRmTDIxVS8wcGRSdlR3MXU5L0FlWS81Yy9tbVBaOEJXZFoxUWFzTHlRSm1CR1E",
        colors: [
            
            { name: "Navy", hex: "#1f2937" },
            { name: "Sage", hex: "#d3ded0" },
           
        ]
    },
    {
        id: "crossbody-strap",
       
        title: "iPhone Air MagSae Battery",
        price: 59.00,
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGPG4?wid=400&hei=400&fmt=jpeg&qlt=90&.v=Sml1aUlKZ3BBVnQ2MmgzRnB4Wi9jUFlvYS9naDJJdU9KTWdGWjhKWFRmTHI1T3Rua2ZCWEpxaXFZS01CYzFXdklaY0ZqN3p4QnhWMWFIdUloZmtPOGc",
        colors: [
            
        ]
    },
    {
        id: "crossbody-strap",
        
        title: "iPhone Air Bumper - Tan",
        price: 39.00,
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MH044?wid=400&hei=400&fmt=jpeg&qlt=90&.v=b0dQc2pqYmp2ZFNSZ000UEZYWmZ0L1lvYS9naDJJdU9KTWdGWjhKWFRmSUplZzJVZVhEYnNEendxb29UeHdxUzlhMmlhMnVHanUxd0xibTFqRUs4R1E",
        colors: [
            { name: "Soft Pink", hex: "#c1baba" },
            { name: "Bright Guava", hex: "#a59d9e" },
            { name: "Lime", hex: "#63645f" },
            { name: "Navy", hex: "#1f2937" },
            
        ]
    },
    {
        id: "crossbody-strap",
        title: "Mophie Check Case for - iPhone Air",
        price: 59.00,
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/HSFN2?wid=400&hei=400&fmt=jpeg&qlt=90&.v=d0pkcVZxc1lXUWZYcFlVTDJFTGhoL1lvYS9naDJJdU9KTWdGWjhKWFRmSm96ZnUxa2pJU2NrSFRwQlExalh6TXVsSnB5S29Ya1Z4RWhqTVNlRmVicUE",
        colors: [
           
        ]
    },
    {
        id: "crossbody-strap",
        title: "Hereschel Cloud Sling for iPhone",
        price: 59.00,
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/HSFD2?wid=400&hei=400&fmt=jpeg&qlt=90&.v=VU4xVVlPeUtlRnBVZW5uR3RWYkgxL1lvYS9naDJJdU9KTWdGWjhKWFRmSzJzMkY5ZDRrcTlvL0QyQ1hlWER2NUI5KzJVSWdpU1pBa2ZoVzZabm92bFE",
        colors: [
             { name: "Lime", hex: "#d12073" },
            { name: "Navy", hex: "#abb0b7" },


        ]
    },
    {
        id: "crossbody-strap",
        title: "40W Dynamic Power Adapter with 60W Max",
        price: 39.00,
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MGKN4?wid=400&hei=400&fmt=jpeg&qlt=90&.v=OXg3UUZsRGMvSHJySWlFcGJveGFIL1lvYS9naDJJdU9KTWdGWjhKWFRmSUMwU1RRZHF2ZXh6bndTY25FVXlJSnBJeGNrTGFSQWdhbXJCNzF6VnhLS1E",
        colors: [

        ]
    },
    {
        id: "crossbody-strap",
        title: "20W USB-C Power Adapter",
        price: 19.00,
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MWVV3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=SjNBR2N3QSt4UzFnQTB1NzdJd1VwUFlvYS9naDJJdU9KTWdGWjhKWFRmSU03dmFGL3FSTTRycHFSZi8vcVdOa1JRQUNWVDA4SWlPcldhVTdNTjhFOEE",
        colors: [

        ]
    },

];

export default function Accessories() {
    return (
        <div className="space-y-5">
            <h3 className="text-2xl md:text-[28px] font-semibold tracking-tight text-[#6e6e73]">
                <span className="text-[#1d1d1f]">Accessories.</span> Essentials that pair perfectly with your favorite devices.
            </h3>

            <HorizontalSlider>
                {/* INTRO CARD (HERE AND WOW) */}
                <a
                    href="/accessories"
                    className="relative w-[340px] sm:w-[400px] h-[500px] rounded-[25px] bg-white p-8 overflow-hidden snap-start shrink-0 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group block"
                >
                    <div>
                        <h4 className="text-[26px] font-semibold text-[28px] tracking-tight text-[#1d1d1f]">Here and wow.</h4>
                        <p className="mt-2 text-sm font-Regular text-[14] leading-[18px] text-[#1d1d1f]">The accessories you love.<br />In a fresh mix of colors.</p>
                    </div>


                    <div className="relative flex-1 w-full mt-4 overflow-hidden flex items-end justify-center">
                        <img
                            src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-accessories-202603?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=K1NBYnFSRndoRHEyUklJLyttMlQ2Q3VHZXZxTHRzMW5POGhRK2NXNW1VeHFTRjNxbmh1UnU2R29ibGdpZUFXcy85S3R4M0M3WGhIQVNOK3lBdUI5K1Uva2FEdFN5bEdHUXd4RXIrS1dhS3ZMQ2gzYU14VEs0V1BFdWdmdWl3NGg"
                            className="
                            w-full 
                            h-[520px]
                            object-contain
                            transition-transform
                            duration-500
                            group-hover:scale-105
                            "
                            translate-y-2
                        />
                    </div>
                </a>

                {/* DYNAMIC PRODUCT CARDS */}
                {accessoryItems.map((product) => (
                    <AccessoryCard key={product.id} product={product} />
                ))}
                <a
                    href="/accessories"
                    className="relative w-[340px] sm:w-[400px] h-[500px] rounded-[25px] bg-white p-8 overflow-hidden snap-start shrink-0 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group block"
                >
                    <div>
                        <h4 className="text-[26px] md:text-[28px] font-semibold tracking-tight text-[#1d1d1f]">
                            Explore all accessories.
                        </h4>
                    </div>

                 
                    <div className="relative flex-1 w-full mt-4 overflow-hidden flex items-end justify-center">
                        <img
                            src="https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/store-card-40-all-accessories-202603?wid=800&hei=1000&fmt=jpeg&qlt=90&.v=WlVkZUZ3Q210TzhiSWtzSnZkYUVveFRQRmlJMFRpdDdSTFRxVDFHQ0JLaG54bGtZdEhGMzh6ZlJIYlNXeHRYajFQYkthbm1jaTVkUmtRenhDTTR4ZnQ4em5ZWm1XNEIzN1lYZnQyQjlPT0NMSGQ2NURHT0NLWTBEb0JyN0NmVjA"
                           
                            className="w-full h-full object-cover object-bottom transition-transform duration-500 group-hover:scale-[1.04]"
                            alt="Explore all accessories"
                        />
                    </div>
                </a>
            </HorizontalSlider>
        </div>
    );
}

function AccessoryCard({ product }) {
    const hasColors = product.colors?.length > 0;

    return (
        <a
            href={`/products/${product.id}`}
            className="relative w-[340px] sm:w-[313px] h-[500px] rounded-[25px] bg-white p-8 overflow-hidden snap-start shrink-0 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group block select-none"
        >
            {/* Product Image wrapper */}
            <div className="relative w-full h-[230px] flex items-center justify-center overflow-hidden">
                {product.image ? (
                    <img
                        src={product.image}
                        alt={product.title}
                        className="h-[230px] w-[230px] -translate-y-0 object-contain transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                ) : (
                    <div className="" />
                )}
            </div>

            {/* Details & Info Section */}
            <div className="relative z-20 mt-2 w-full">
                {/* Color Swatches - Center */}
                {hasColors && (
                    <div className="flex justify-center items-center gap-1.5 mb-4 h-6">
                        {product.colors.map((color) => (
                            <span
                                key={color.name}
                                title={color.name}
                                className="w-3 h-3 rounded-full border border-black/5 shadow-sm"
                                style={{ backgroundColor: color.hex }}
                            />
                        ))}

                        {product.colors.length > 5 && (
                            <span className="text-[11px] text-gray-400 font-medium ml-0.5">
                                +
                            </span>
                        )}
                    </div>
                )}

                {/* Text - Left */}
                <div className="w-full px-2 text-left">
                    {product.isNew && (
                        <span className="block text-[12px] font-semibold text-[#bf4800] mb-1">
                            New
                        </span>
                    )}

                    <h4 className="text-[17px] font-semibold leading-[22px] tracking-tight text-[#1d1d1f] line-clamp-2 min-h-[44px]">
                        {product.title}
                    </h4>

                    <p className="mt-3 text-[14px] text-[#1d1d1f]">
                        ${product.price.toFixed(2)}
                    </p>
                </div>
            </div>
        </a>
    );
}