import React, { useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

const items = [
 
  { id: 1, image: "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/11/cd/47/11cd47ca-af61-71a8-6b02-4a0af9d55077/a54b4338-9340-422f-b5c6-1420bf850b01.png/1250x668sr.jpg", title: "The world's fastest racing drama.", genre: "Sports", button: "Stream now", logo: "tv", row: "top" },
  { id: 2, image: "https://is1-ssl.mzstatic.com/image/thumb/hRaOrIKahRFcNlKt6UV4Ow/1250x668sr.jpg", title: "Fear takes hold.", genre: "Thriller", button: "Stream now", logo: "tv", row: "top" },
  { id: 3, image: "https://is1-ssl.mzstatic.com/image/thumb/qkaEsaFl5id_Gx38S0IVLw/1250x668sr.jpg", title: "MLS Season Pass", genre: "Sports", button: "Watch now", logo: "tv", row: "top" },
  { id: 4, image: "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/11/cd/47/11cd47ca-af61-71a8-6b02-4a0af9d55077/a54b4338-9340-422f-b5c6-1420bf850b01.png/1250x668sr.jpg", title: "The Dynasty: New England Patriots", genre: "Documentary", button: "Stream now", logo: "tv", row: "top" },
  { id: 5, image: "https://is1-ssl.mzstatic.com/image/thumb/Hm4A4O3VorNjFFadQnyhcA/1250x668sr.jpg", title: "The Reluctant Traveler", genre: "Travel", button: "Stream now", logo: "tv", row: "top" },
  { id: 6, image: "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/78/57/f6/7857f6ec-a4ed-87dc-dea9-a6ed02888722/ebd59c17-8e95-49b1-aec0-44aec57388ee.png/1250x668sr.jpg", title: "Masters of the Air", genre: "Drama", button: "Stream now", logo: "tv", row: "top" },
  { id: 7, image: "https://is1-ssl.mzstatic.com/image/thumb/pa_Dd2CLL-BlWQRqIurClw/1250x668sr.jpg", title: "Killers of the Flower Moon", genre: "Drama", button: "Stream now", logo: "tv", row: "top" },
  { id: 8, image: "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/33/9e/cf/339ecfe7-f515-8594-2e48-d991803409ea/5a944fdc-acd7-47a8-89e7-274d84cf4276.png/1250x668sr.jpg", title: "Argylle", genre: "Action", button: "Stream now", logo: "tv", row: "top" },
  { id: 9, image: "https://is1-ssl.mzstatic.com/image/thumb/X6v_Cbb571UaAbZnIJvClw/1250x668sr.jpg", title: "Snoopy Presents: Welcome Home, Franklin", genre: "Family", button: "Stream now", logo: "tv", row: "top" },

  
  { id: 10, image: "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/89/07/9c/89079c5b-29da-cd1f-4ce3-ad68f3d28a68/f0346506-4c9f-4be1-b275-11fa4004b103.png/470x264.jpg", title: "Asian-Pacific American Heritage Month", genre: "Fitness+", button: "Play now", logo: "Fitness+", row: "bottom" },
  { id: 11, image: "https://is1-ssl.mzstatic.com/image/thumb/Video211/v4/e7/a5/c2/e7a5c209-1ca1-a92c-ba3c-4dee277465a3/TR_SC_0258_artwork_en_ID337452_0.png/470x264.jpg", title: "Hello Kitty Island Adventure", genre: "Arcade", button: "Play now", logo: "Arcade", row: "bottom" },
  { id: 12, image: "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/55/2b/5f/552b5f86-46e6-d848-ee06-5395bf09c206/83e0ed3d-c824-4ed9-9572-ae9e784568cb.png/470x264.jpg", title: "Sabrina Carpenter : The Zane Lowe Interview", genre: "Music", button: "Listen now", logo: "Music", row: "bottom" },
  { id: 13, image: "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/5b/b3/4a/5bb34a60-695c-a96f-75ec-8a957fc2a20b/45899847-e52c-44a1-9ce5-09aedebb7a78.png/470x264.jpg", title: "30 Days of Grace", genre: "Music", button: "Listen now", logo: "Music", row: "bottom" },
  { id: 14, image: "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/2a/75/df/2a75df27-703b-4712-6d95-9c9e29ca1dc6/fa77ffdb-61aa-47e7-920a-7da1876f3929.png/470x264.jpg", title: "The Big Cigar", genre: "Drama", button: "Stream now", logo: "tv", row: "bottom" },
  { id: 15, image: "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/19/ca/58/19ca581d-ec35-a16b-f010-c90f737191f6/79eff05a-ea42-403b-90bd-1a6e3a7f6b48.png/470x264.jpg", title: "Dark Matter", genre: "Sci-Fi", button: "Stream now", logo: "tv", row: "bottom" },
  { id: 16, image: "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/53/55/d7/5355d758-e5b7-b406-f004-bb98d03ecb38/9388d284-2a0b-43e8-86e0-5852e8559d18.png/470x264.jpg", title: "Trying", genre: "Comedy", button: "Stream now", logo: "tv", row: "bottom" },
  { id: 17, image: "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/41/80/af/4180af1a-c135-8141-f465-18915bea21ee/913bf9a4-8a4a-42ed-96fd-1b6aa04ad5f1.png/470x264.jpg", title: "Acapulco", genre: "Comedy", button: "Stream now", logo: "tv", row: "bottom" },
  { id: 18, image: "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/53/55/d7/5355d758-e5b7-b406-f004-bb98d03ecb38/9388d284-2a0b-43e8-86e0-5852e8559d18.png/470x264.jpg", title: "The Reluctant Traveler Season 2", genre: "Travel", button: "Stream now", logo: "tv", row: "bottom" }
];

export default function AppleTV() {
  const topRowItems = items.filter((item) => item.row === "top");
  const bottomRowItems = items.filter((item) => item.row === "bottom");

  
  const TOTAL_DOTS = 7;

  const clonedTopRow = [
    topRowItems[topRowItems.length - 1],
    ...topRowItems,
    topRowItems[0],
  ];

  const clonedBottomRow = [
    bottomRowItems[bottomRowItems.length - 1],
    ...bottomRowItems,
    bottomRowItems[0],
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // គណនា Active Dot Index ឱ្យស្ថិតក្នុងរង្វង់ 0 ដល់ 6 (7 dots)
  const activeDotIndex = (currentIndex === 0 
    ? topRowItems.length - 1 
    : currentIndex === topRowItems.length + 1 
    ? 0 
    : currentIndex - 1) % TOTAL_DOTS;

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPlaying, topRowItems.length]);

  const handleTransitionEnd = () => {
    if (currentIndex === topRowItems.length + 1) {
      setIsTransitioning(false);
      setCurrentIndex(1); 
    } else if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(topRowItems.length); 
    }
  };

  const handleDotClick = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(index + 1);
  };

  const getTopRowTransform = () => {
    return `translateX(calc(50vw - (72vw / 2) - (${currentIndex} * (72vw + 16px))))`;
  };

  const getBottomRowTransform = () => {
    return `translateX(calc(50vw - (36vw / 2) - (${currentIndex} * (36vw + 16px))))`;
  };

  return (
    <section className="bg-[#f5f5f7] py-16 px-0 overflow-hidden select-none font-sans">
      <div className="max-w-[1440px] mx-auto px-6 text-center mb-12">
        <h1 className="text-[42px] sm:text-5xl md:text-[64px] font-semibold tracking-tight text-neutral-900 leading-none">
          Endless entertainment.
        </h1>
      </div>

      <div className="relative w-full flex flex-col gap-6 md:gap-4">
        {/* Top Row (9 Banners) */}
        <div
          className={`flex gap-4 ${isTransitioning ? "transition-transform duration-1000 ease-out" : ""}`}
          style={{ transform: getTopRowTransform() }}
          onTransitionEnd={handleTransitionEnd}
        >
          {clonedTopRow.map((item, idx) => (
            <div
              key={`top-${item.id}-${idx}`}
              className="flex-shrink-0"
              style={{
                width: "72vw",
                maxWidth: "940px",
                minWidth: "290px"
              }}
            >
              <div className="relative w-full overflow-hidden h-[280px] sm:h-[360px] md:h-[460px] lg:h-[523px] rounded-none">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover select-none pointer-events-none"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent pointer-events-none" />

                <div className="absolute bottom-10 left-10 right-10 flex items-center gap-4 z-10">
                  <button className="rounded-full bg-white px-6 py-3 text-xs md:text-sm font-semibold text-black hover:bg-neutral-200 transition-colors duration-200 shadow-md flex-shrink-0">
                    {item.button}
                  </button>
                  <p className="text-xs md:text-sm text-white font-medium truncate max-w-[80%]">
                    {item.genre && <span className="font-bold mr-2 text-white">{item.genre}</span>}
                    <span className="opacity-90">· {item.title}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row (9 Thumbnails) */}
        <div
          className={`flex gap-4 ${isTransitioning ? "transition-transform duration-1000 ease-out" : ""}`}
          style={{ transform: getBottomRowTransform() }}
        >
          {clonedBottomRow.map((item, idx) => (
            <div 
              key={`bottom-${item.id}-${idx}`} 
              className="flex-shrink-0"
              style={{
                width: "36vw",      
                maxWidth: "470px",   
                minWidth: "200px"
              }}
            >
              <div className="relative w-full h-[20vw] max-h-[264px] min-h-[140px] overflow-hidden shadow-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                <div className="absolute top-3 right-4 text-white text-[10px] sm:text-xs font-bold z-10 drop-shadow-md">
                  {item.logo}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex flex-col gap-1 z-10">
                  <p className="text-[10px] sm:text-xs text-white font-semibold truncate drop-shadow-sm">
                    {item.title}
                  </p>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-[8px] sm:text-[10px] text-white/90 truncate max-w-[60%]">
                      {item.genre || "Apple Service"}
                    </p>
                    <button className="rounded-full bg-white px-3 py-1 text-[8px] sm:text-[10px] font-bold text-black hover:bg-neutral-200 transition">
                      {item.button}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls Section (7 Dots) */}
        <div className="relative flex items-center justify-center mt-6">
          <div className="flex items-center gap-3">
            {[...Array(TOTAL_DOTS)].map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`relative overflow-hidden rounded-full transition-all duration-500 ${
                  activeDotIndex === index ? "w-8 h-[8px] bg-[#9e9e9e]" : "w-[8px] h-[8px] bg-[#d2d2d7]"
                }`}
              >
                {activeDotIndex === index && (
                  <div
                    key={`${activeDotIndex}-${isPlaying}`}
                    className="absolute left-0 top-0 h-full rounded-full bg-black"
                    style={{
                      animation: isPlaying ? "progress 5s linear forwards" : "none"
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          <button
  onClick={() => setIsPlaying(!isPlaying)}
  className="
    absolute
    right-10
    h-9
    w-9
    rounded-full
    bg-gray-200/90
    backdrop-blur-sm
    flex
    items-center
    justify-center
    text-gray-600
    hover:bg-gray-300
    transition
  "
>
  {isPlaying ? (
    <Pause size={13} strokeWidth={2.4} />
  ) : (
    <Play
      size={13}
      fill="currentColor"
      className="translate-x-[1px]"
      
    />
  )}
</button>
        </div>
      </div>

      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}