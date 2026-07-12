// AllModels.jsx
import React, { useState } from "react";
import { HorizontalSlider } from "./Store";

const macModels = [
  {
    id: "macbook-neo",
    tag: "NEW",
    title: "MacBook Neo",
    colors: ["#E3DCD5", "#EAE6DF", "#E3CCB8", "#4E596F"],
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-40-macbook-neo-202603?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=dzRRdVl2UHpmd3BrL2dpaGRDY2RKOFVIc0pMamhtQTdJT2hNaXc2a1F5UWw2T29GWFRmcGlRaHRKa2ZZeG54SDRHeXB5TnVsU3R6Qjd0Y2JzbURyWEVFbjlJVU41dmw4QVZJN1dUaHpNY0IrYWpGdS9XeFgvbS9ITnNYOEhYaG4",
    price: "From $699 or $58.25/mo. for 12 mo.Δ",
    hasHoverEffect: true,
  },
  {
    id: "macbook-neo",
    tag: "NEW",
    title: "MacBook Neo",
    colors: ["#E3DCD5", "#EAE6DF", "#E3CCB8", "#4E596F"],
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-40-macbook-air-202503?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=dzRRdVl2UHpmd3BrL2dpaGRDY2RKN3dnWXpNRUFSbE1veTFaYXZqWDhWZ2w2T29GWFRmcGlRaHRKa2ZZeG54SDRHeXB5TnVsU3R6Qjd0Y2JzbURyWE56dkQ1M2pkMXloY0FLTkxsc2xNQXArYWpGdS9XeFgvbS9ITnNYOEhYaG4",
    price: "From $699 or $58.25/mo. for 12 mo.Δ",
    hasHoverEffect: true,
  },
  {
    id: "macbook-neo",
    tag: "NEW",
    title: "MacBook Neo",
    colors: ["#E3DCD5", "#EAE6DF", "#E3CCB8", "#4E596F"],
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-40-macbookpro-14-16-202410?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=dzRRdVl2UHpmd3BrL2dpaGRDY2RKL0tDcDdIN2J5MlRJbDZwdXNUam1wUDJ0SUdrYS9VNndoSUR6SjE2NTZ4Q3dzUlMrL0tMOEdKdERZZEhaV2pBNG5MYXhobkxkNHkydGdPaXdJd0ZJRmorbGwzUVNwZEFpcE1WQU1wNTVjU1c",
    price: "From $699 or $58.25/mo. for 12 mo.Δ",
    hasHoverEffect: true,
  },
  {
    id: "macbook-neo",
    tag: "NEW",
    title: "MacBook Neo",
    colors: ["#E3DCD5", "#EAE6DF", "#E3CCB8", "#4E596F"],
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-40-imac-202410?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=SXh2aE4zRm53L0l3NnhGK2wwZFpEeVFpZGxOY0d3emNHMmh4SnZVS1l0QTJzUm9kdjFCbFNETWhUL0NFUjdrYVJRTDhjbFg1ZXlSYWo3eW5aZUZxQjJvbklDSjVXM0pQY3RiODY0MDI2aUU",
    price: "From $699 or $58.25/mo. for 12 mo.Δ",
    hasHoverEffect: true,
  },
   {
    id: "macbook-neo",
    tag: "NEW",
    title: "MacBook Neo",
    colors: ["#E3DCD5", "#EAE6DF", "#E3CCB8", "#4E596F"],
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-40-mac-mini-202410?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=MEl2WkNZRmkzTGhzejQ0SHE3b3FoNnQrZHdkUkkvM25CYTVJYWJQRk41QkMxQXc4S3pBZE5lUDJlTzVYSUYydFMwV0hhcmdVdXZzZ1NwTlFUaEgwTCthSGMrTVBBVlNQbW04TUlaTnlZU3c",
    price: "From $699 or $58.25/mo. for 12 mo.Δ",
    hasHoverEffect: true,
  },
   {
    id: "macbook-neo",
    tag: "NEW",
    title: "MacBook Neo",
    colors: ["#E3DCD5", "#EAE6DF", "#E3CCB8", "#4E596F"],
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-40-mac-studio-202503?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=MEl2WkNZRmkzTGhzejQ0SHE3b3FoeEhISXFsMjRaY2x5ZFpwbkptTldIN0RiOENhazh5Y0NacmRZMFN0dVNvZzJTaS9RTTYzTWg5VUhTM1Ara0JyS08zTzhSOUpOUnhYSEV2M3k5UWRwZkk",
    price: "From $699 or $58.25/mo. for 12 mo.Δ",
    hasHoverEffect: true,
  },
  {
    id: "macbook-neo",
    tag: "NEW",
    title: "MacBook Neo",
    colors: ["#E3DCD5", "#EAE6DF", "#E3CCB8", "#4E596F"],
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-40-studio-display-202603?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=dVp4cllZZXF6dklEWE1MaXJrMFFsWFE1bTY0LzdtNW13TjROaDVzaTdQTGZPOGdzbXFQKzNyOVN3L2NRSHJCNStFVlF6ZkRtZVJkbnBuR0wwNDgvSnJUbWtka3BEcEp5UWppL0FrTWlvRnQ5c2RrS21IU0RNY2daemxkbzhtY2M",
    price: "From $699 or $58.25/mo. for 12 mo.Δ",
    hasHoverEffect: true,
  },
   {
    id: "macbook-neo",
    tag: "NEW",
    title: "MacBook Neo",
    colors: ["#E3DCD5", "#EAE6DF", "#E3CCB8", "#4E596F"],
    img: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mac-card-40-pro-display-202603?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=UlltQkFYZW9PUVNxbGJESDBPdnR0S0c1aUV5YzRFYjJ5VHRxWllYQ2k3WWw2T29GWFRmcGlRaHRKa2ZZeG54SDRHeXB5TnVsU3R6Qjd0Y2JzbURyWEtUTXBibU9zRFdXcHBDby8xSEhEalIrYWpGdS9XeFgvbS9ITnNYOEhYaG4",
    price: "From $699 or $58.25/mo. for 12 mo.Δ",
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
        w-[300px] 
        sm:w-[340px] 
        h-[480px]
        rounded-[25px]
        bg-white
        border
        border-[#e8e8ed]
        px-6
        pt-5
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
      <div className="h-16">
        {mac.tag ? (
          <span className="text-[12px] font-semibold tracking-wider text-[#bf4800] uppercase">
            {mac.tag}
          </span>
        ) : (
          <div className="h-[18px]" />
        )}

        <h4 className="text-[24px] font-semibold tracking-tight text-[#1d1d1f]">
          {mac.title}
        </h4>
      </div>

      <div className="relative flex-1 flex items-center justify-center overflow-hidden">
        <img
          src={mac.img}
          alt={mac.title}
          className="
            max-h-[280px]
            object-contain
            transition-transform
            duration-500
            group-hover:scale-[1.03]
          "
        />

        {mac.hasHoverEffect && (
          <div className="absolute bottom-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              className="
                bg-[#1d1d1f]
                text-white
                text-[12px]
                px-8
                py-2
                rounded-full
                hover:bg-[#0071e3]
              "
            >
              Take a closer look
            </button>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <div className="flex justify-center gap-2">
          {mac.colors.map((color, index) => (
            <button
              key={color}
              onClick={() => setSelectedColor(index)}
              style={{ backgroundColor: color }}
              aria-label={`Select color ${index + 1}`}
              className={`
                w-3
                h-3
                rounded-full
                cursor-pointer
                transition-all
                ${
                  selectedColor === index
                    ? "ring-1 ring-offset-2 ring-[#86868b]"
                    : "hover:opacity-80"
                }
              `}
            />
          ))}
        </div>

        <div className="flex items-center justify-between pt-2">
          <p className="text-[12px] leading-[16px] text-[#1d1d1f] max-w-[170px]">
            {mac.price}
          </p>

          <button
            className="
              bg-[#0071e3]
              text-white
              text-[13px]
              font-medium
              px-4
              py-1.5
              rounded-full
              hover:bg-[#0077ed]
              transition-colors
            "
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}