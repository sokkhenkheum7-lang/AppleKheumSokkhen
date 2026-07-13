// AllModels.jsx
import React, { useState } from "react";
import { HorizontalSlider } from "./Store";

const macModels = [
  {
    id: "macbook-neo-1",
    tag: "NEW",
    title: "MacBook Neo",
    colors: ["#E3DCD5", "#EAE6DF", "#271b11", "#4E596F"],
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-40-macbook-neo-202603?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=dzRRdVl2UHpmd3BrL2dpaGRDY2RKOFVIc0pMamhtQTdJT2hNaXc2a1F5UWw2T29GWFRmcGlRaHRKa2ZZeG54SDRHeXB5TnVsU3R6Qjd0Y2JzbURyWEVFbjlJVU41dmw4QVZJN1dUaHpNY0IrYWpGdS9XeFgvbS9ITnNYOEhYaG4",
    price: "From $699 or $58.25/mo. for 12 mo.Δ",
    hasHoverEffect: true,
  },
  {
    id: "macbook-neo-2",
    title: "MacBook Air",
    colors: ["#E3DCD5", "#EAE6DF", "#E3CCB8", "#4E596F"],
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-40-macbook-air-202503?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=dzRRdVl2UHpmd3BrL2dpaGRDY2RKN3dnWXpNRUFSbE1veTFaYXZqWDhWZ2w2T29GWFRmcGlRaHRKa2ZZeG54SDRHeXB5TnVsU3R6Qjd0Y2JzbURyWE56dkQ1M2pkMXloY0FLTkxsc2xNQXArYWpGdS9XeFgvbS9ITnNYOEhYaG4",
    price: "From $1299 or $108.25/mo. for 12 mo.Δ",
    hasHoverEffect: true,
  },
  {
    id: "macbook-neo-3",
    title: "MacBook Pro",
    colors: ["#000000", "#abab9f"],
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-40-macbookpro-14-16-202410?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=dzRRdVl2UHpmd3BrL2dpaGRDY2RKL0tDcDdIN2J5MlRJbDZwdXNUam1wUDJ0SUdrYS9VNndoSUR6SjE2NTZ4Q3dzUlMrL0tMOEdKdERZZEhaV2pBNG5MYXhobkxkNHkydGdPaXdJd0ZJRmorbGwzUVNwZEFpcE1WQU1wNTVjU1c",
    price: "From $1999 or $165.58/mo. for 12 mo.Δ",
    hasHoverEffect: true,
  },
  {
    id: "macbook-neo-4",
    title: "iMac",
    colors: ["#0ac7fc", "#295899", "rgb(216, 147, 167)", "#e39126","#1bb477"],
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-40-imac-202410?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=SXh2aE4zRm53L0l3NnhGK2wwZFpEeVFpZGxOY0d3emNHMmh4SnZVS1l0QTJzUm9kdjFCbFNETWhUL0NFUjdrYVJRTDhjbFg1ZXlSYWo3eW5aZUZxQjJvbklDSjVXM0pQY3RiODY0MDI2aUU",
    price: "From $1499 or $124.91/mo. for 12 mo.Δ",
    hasHoverEffect: true,
  },
  {
    id: "macbook-neo-5",
    title: "Mac mini",
    colors: [],
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-40-mac-mini-202410?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=MEl2WkNZRmkzTGhzejQ0SHE3b3FoNnQrZHdkUkkvM25CYTVJYWJQRk41QkMxQXc4S3pBZE5lUDJlTzVYSUYydFMwV0hhcmdVdXZzZ1NwTlFUaEgwTCthSGMrTVBBVlNQbW04TUlaTnlZU3c",
    price: "From $799 or $66.58/mo. for 12 mo.Δ",
    hasHoverEffect: true,
  },
  {
    id: "macbook-neo-6",
    title: "Mac Studio",
    colors: [],
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-40-mac-studio-202503?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=MEl2WkNZRmkzTGhzejQ0SHE3b3FoeEhISXFsMjRaY2x5ZFpwbkptTldIN0RiOENhazh5Y0NacmRZMFN0dVNvZzJTaS9RTTYzTWg5VUhTM1Ara0JyS08zTzhSOUpOUnhYSEV2M3k5UWRwZkk",
    price: "From $2499 or $208.25/mo. for 12 mo.Δ",
    hasHoverEffect: true,
  },
  {
    id: "macbook-neo-7",
    title: "Studio Display",
    colors: [],
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-40-studio-display-202603?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=dVp4cllZZXF6dklEWE1MaXJrMFFsWFE1bTY0LzdtNW13TjROaDVzaTdQTGZPOGdzbXFQKzNyOVN3L2NRSHJCNStFVlF6ZkRtZVJkbnBuR0wwNDgvSnJUbWtka3BEcEp5UWppL0FrTWlvRnQ5c2RrS21IU0RNY2daemxkbzhtY2M",
    price: "From $1599 or $133.25/mo. for 12 mo.Δ",
    hasHoverEffect: true,
  },
  {
    id: "macbook-neo-8",
    title: "Studio Display XDR ",
    colors: [],
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-40-pro-display-202603?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=UlltQkFYZW9PUVNxbGJESDBPdnR0S0c1aUV5YzRFYjJ5VHRxWllYQ2k3WWw2T29GWFRmcGlRaHRKa2ZZeG54SDRHeXB5TnVsU3R6Qjd0Y2JzbURyWEtUTXBibU9zRFdXcHBDby8xSEhEalIrYWpGdS9XeFgvbS9ITnNYOEhYaG4",
    price: "From $3299 or $274.91/mo. for 12 mo.Δ",
    hasHoverEffect: true,
  },
];

export default function AllModels() {
  return (
    <div className="space-y-6 w-full">
      <h3 className="text-[24px] md:text-[28px] font-semibold tracking-tight text-[#6e6e73]">
        <span className="text-[#1d1d1f]">All models.</span> Take your pick.
      </h3>

      <HorizontalSlider containerClass="gap-5 pb-6">
        {macModels.map((mac) => (
          <MacModelCard key={mac.id} mac={mac} />
        ))}
      </HorizontalSlider>
    </div>
  );
}

function MacModelCard({ mac }) {
  const [selectedColor, setSelectedColor] = useState(0);

  return (
    <div
      className="
        relative 
        w-[384px] 
        h-[460px]
        rounded-[25px]
        bg-white
        border
        border-[#e8e8ed]
        px-6
        pt-6
        pb-6
        flex
        flex-col
        justify-between
        snap-start
        shrink-0
        transition-all
        duration-300
        hover:shadow-md
        select-none
        group
      "
    >
      {/* 1. Card Header Area */}
      <div className="h-16 flex-shrink-0">
        {mac.tag ? (
          <span className="text-[12px] font-bold tracking-wider text-[#bf4800] uppercase block mb-1">
            {mac.tag}
          </span>
        ) : (
          <div className="h-[18px]" />
        )}

        <h4 className="text-[22px] sm:text-[24px] font-semibold tracking-tight text-[#1d1d1f] line-clamp-1">
          {mac.title}
        </h4>
      </div>

      {/* 2. Interactive Stable Window Layer */}
      <div className="relative flex-1 flex items-center justify-center overflow-hidden my-4 min-h-[200px]">
        <img
          src={mac.img}
          alt={mac.title}
          className="
            w-auto
            object-contain
            transition-transform
            duration-500
            group-hover:scale-[1.02]
          "
        />

        {/* Floating Apple-Style Button Overlay */}
        {mac.hasHoverEffect && (
          <div className="absolute inset-0 flex items-end justify-center pb-4 bg-transparent pointer-events-none">
            <button
              className="
                bg-[#1d1d1f]/90
                text-white
                text-[14px]
                font-medium
                px-6
                py-2.5
                rounded-full
                opacity-0 
                translate-y-2
                group-hover:opacity-100 
                group-hover:translate-y-0
                transition-all 
                duration-300
                pointer-events-auto
                shadow-sm
                hover:bg-[#0066cc]
              "
            >
              Take a closer look
            </button>
          </div>
        )}
      </div>

      {/* 3. Footer Control Settings Layer */}
      <div className="space-y-4 flex-shrink-0">
        {/* Colors Selector Wrapper */}
        <div className="flex justify-center gap-2 h-4 items-center">
          {mac.colors.map((color, index) => (
            <button
              key={index}
              onClick={() => setSelectedColor(index)}
              style={{ backgroundColor: color }}
              aria-label={`Select color ${index + 1}`}
              className={`
                w-3
                h-3
                rounded-full
                
                transition-all
                
                ${
                  selectedColor === index
                    ? ""
                    : "cursor-pointer hover:opacity-80"
                }
              `}
            />
          ))}
        </div>

        {/* Pricing & Buy Container Row */}
        <div className="flex items-center justify-between pt-3 ">
          <p className="text-[12px] leading-[16px] font-normal text-[#1d1d1f] max-w-[160px] text-left">
            {mac.price}
          </p>

          <button
            className="
              bg-[#0071e3]
              text-white
              text-[14px]
              font-medium
              px-4
              py-1.5
              rounded-full
              hover:bg-[#0077ed]
              transition-colors
              flex-shrink-0
            "
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}