import React, { useState, useEffect, useRef } from "react";
import { Play, Pause } from "lucide-react";
// ទិន្នន័យរូបភាពទាំង ៩ សន្លឹកដែលត្រូវគ្នានឹងគំរូដើមរបស់ Apple ១០០%
const items = [
  {
    id: 1,
    image: "https://is1-ssl.mzstatic.com/image/thumb/qkaEsaFl5id_Gx38S0IVLw/688x368sr.jpg", // Cape Fear
    title: "Cape Fear",
    genre: "Thriller · Fear take hold",
    button: "Show now",
    logo: "tv",
    row: "top",
    isMain: true
  },
  {
    id: 2,
    image: "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/78/97/14/7897142a-b8df-f071-fddb-c9bfcc5d8dbb/1081aa3d-8d1e-404a-87ca-7bb9642657c2.png/688x368sr.jpg", // Cape Fear
    title: "Cape Fear",
    genre: "Thriller · Fear take hold",
    button: "Show now",
    logo: "tv",
    row: "top",
    isMain: true
  },
  {
    id: 3,
    image: "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/11/cd/47/11cd47ca-af61-71a8-6b02-4a0af9d55077/a54b4338-9340-422f-b5c6-1420bf850b01.png/688x368sr.jpg", // Cape Fear
    title: "Cape Fear",
    genre: "Thriller · Fear take hold",
    button: "Show now",
    logo: "tv",
    row: "top",
    isMain: true
  },
  {
    id: 4,
    image: "https://is1-ssl.mzstatic.com/image/thumb/Hm4A4O3VorNjFFadQnyhcA/688x368sr.jpg", // Cape Fear
    title: "Cape Fear",
    genre: "Thriller · Fear take hold",
    button: "Show now",
    logo: "tv",
    row: "top",
    isMain: true
  },
  {
    id: 5,
    image: "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/78/57/f6/7857f6ec-a4ed-87dc-dea9-a6ed02888722/ebd59c17-8e95-49b1-aec0-44aec57388ee.png/1250x668sr.jpg", // Cape Fear
    title: "Cape Fear",
    genre: "Thriller · Fear take hold",
    button: "Show now",
    logo: "tv",
    row: "top",
    isMain: true
  },
  {
    id: 6,
    image: "https://is1-ssl.mzstatic.com/image/thumb/pa_Dd2CLL-BlWQRqIurClw/1250x668sr.jpg", // Cape Fear
    title: "Cape Fear",
    genre: "Thriller · Fear take hold",
    button: "Show now",
    logo: "tv",
    row: "top",
    isMain: true
  },
  {
    id: 7,
    image: "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/33/9e/cf/339ecfe7-f515-8594-2e48-d991803409ea/5a944fdc-acd7-47a8-89e7-274d84cf4276.png/1250x668sr.jpg", // Cape Fear
    title: "Cape Fear",
    genre: "Thriller · Fear take hold",
    button: "Show now",
    logo: "tv",
    row: "top",
    isMain: true
  },
  {
    id: 8,
    image: "https://is1-ssl.mzstatic.com/image/thumb/X6v_Cbb571UaAbZnIJvClw/1250x668sr.jpg", // Cape Fear
    title: "Cape Fear",
    genre: "Thriller · Fear take hold",
    button: "Show now",
    logo: "tv",
    row: "top",
    isMain: true
  },
  {
    id: 9,
    image: "https://is1-ssl.mzstatic.com/image/thumb/Hj0w3h6_8b-NM4nnDwjfzQ/1250x668sr.jpg", // Cape Fear
    title: "Cape Fear",
    genre: "Thriller · Fear take hold",
    button: "Show now",
    logo: "tv",
    row: "top",
    isMain: true
  },





































  {
    id: 10,
    image: "https://is1-ssl.mzstatic.com/image/thumb/Features221/v4/89/07/9c/89079c5b-29da-cd1f-4ce3-ad68f3d28a68/f0346506-4c9f-4be1-b275-11fa4004b103.png/470x264.jpg", // Fitness+
    title: "Asian-Pacific American Heritage Month",
    genre: "Fitness+",
    button: "Play now",
    logo: "Fitness+",
    row: "bottom"
  },
  {
    id: 11,
    image: "https://is1-ssl.mzstatic.com/image/thumb/Video211/v4/e7/a5/c2/e7a5c209-1ca1-a92c-ba3c-4dee277465a3/TR_SC_0258_artwork_en_ID337452_0.png/470x264.jpg", // Hello Kitty
    title: "Hello Kitty Island Adventure",
    genre: "Arcade",
    button: "Play now",
    logo: "Arcade",
    row: "bottom"
  },
  {
    id: 12,
    image: "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/55/2b/5f/552b5f86-46e6-d848-ee06-5395bf09c206/83e0ed3d-c824-4ed9-9572-ae9e784568cb.png/226x226sr.jpg", // Sabrina Carpenter
    title: "Sabrina Carpenter : The Zane Lowe Interview",
    genre: "Sabrina Carpenter & Zane Lowe",
    button: "Listen now",
    logo: "Music",
    row: "bottom"
  },
  {
    id: 13,
    image: "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/5b/b3/4a/5bb34a60-695c-a96f-75ec-8a957fc2a20b/45899847-e52c-44a1-9ce5-09aedebb7a78.png/470x264.jpg", // 30 Day of Grace
    title: "30 Day of Grace",
    genre: "Relaxation",
    button: "Listen now",
    logo: "Music",
    row: "bottom"
  },
  {
    id: 14,
    image: "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/2a/75/df/2a75df27-703b-4712-6d95-9c9e29ca1dc6/fa77ffdb-61aa-47e7-920a-7da1876f3929.png/470x264.jpg", // Show 8
    title: "The Dynasty: New England Patriots",
    genre: "Documentary",
    button: "Stream now",
    logo: "tv",
    row: "bottom"
  },
  {
    id: 15,
    image: "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/19/ca/58/19ca581d-ec35-a16b-f010-c90f737191f6/79eff05a-ea42-403b-90bd-1a6e3a7f6b48.png/226x226SC.DN01.jpg?l=en-US", // Show 9
    title: "Grand Prix Behind the Scenes",
    genre: "Sports",
    button: "Watch now",
    logo: "tv",
    row: "bottom"
  },
  {
    id: 16,
    image: "https://is1-ssl.mzstatic.com/image/thumb/Features211/v4/53/55/d7/5355d758-e5b7-b406-f004-bb98d03ecb38/9388d284-2a0b-43e8-86e0-5852e8559d18.png/470x264.jpg", // Show 9
    title: "Grand Prix Behind the Scenes",
    genre: "Sports",
    button: "Watch now",
    logo: "tv",
    row: "bottom"
  },
  {
    id: 17,
    image: "https://is1-ssl.mzstatic.com/image/thumb/Features/v4/41/80/af/4180af1a-c135-8141-f465-18915bea21ee/913bf9a4-8a4a-42ed-96fd-1b6aa04ad5f1.png/226x226SC.DN01.jpg?l=en-US", // Show 9
    title: "Grand Prix Behind the Scenes",
    genre: "Sports",
    button: "Watch now",
    logo: "tv",
    row: "bottom"
  },
  
];

export default function AppleTV() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const topRowItems = items.filter((item) => item.row === "top");
  const bottomRowItems = items.filter((item) => item.row === "bottom");



  // គណនាការរំកិលទិន្នន័យ (TranslateX) ឱ្យស្របគ្នាយ៉ាងទន់ភ្លន់
  const getTopRowTransform = () => {
    // Center the active item in the middle of the viewport
    const offset = (currentIndex * 33);
    return `translateX(calc(35% - ${offset}%))`;
  };

  const getBottomRowTransform = () => {
    const offset = (currentIndex * 24);
    return `translateX(calc(25% - ${offset}%))`;
  };

  return (
    <section className="bg-white py-16 px-0 overflow-hidden select-none font-sans">


      <div className="max-w-[1440px] mx-auto px-6 text-center mb-12">
        <h1 className="text-[42px] sm:text-5xl md:text-[64px] font-semibold tracking-tight text-neutral-900 leading-none">
          Endless entertainment.
        </h1>
      </div>

      <div className="relative w-full flex flex-col gap-6 md:gap-4">

        {/* ជួរខាងលើ (Top Row): សន្លឹកធំៗរួមមាន F1, Cape Fear, MLS */}
        <div
          className="flex gap-4 sm:gap-4 transition-transform duration-1000 ease-out pl-[10%] pr-[10%]"
          style={{ transform: getTopRowTransform() }}
        >
          {topRowItems.map((item, idx) => {
            const isActive = (currentIndex % topRowItems.length) === idx;
            return (
              <div
                key={item.id}
                className="flex-shrink-0 transition-all duration-1000 ease-out"
                style={{
                  width: item.isMain ? "72vw" : "32vw",
                  maxWidth: item.isMain ? "930px" : "410px",
                  minWidth: item.isMain ? "290px" : "150px"
                }}
              >
                <div
                  className={`relative w-full md:rounded-0xl overflow-hidden transition-all duration-1000 ease-out
                    ${item.isMain
                      ? "h-[280px] sm:h-[360px] md:h-[460px] lg:h-[523px]"
                      : "h-[220px] sm:h-[360px] md:h-[460px] lg:h-[523px]"
                    }
                    ${isActive ? "opacity-100 scale-100" : "opacity-100 scale-100"}
                  `}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover select-none pointer-events-none"
                    draggable={false}
                  />            
                  {/* ស្រមោលបាតខាងក្រោម */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent pointer-events-none" />

                  {/* ព័ត៌មាន និងប៊ូតុងសកម្មភាព */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4 z-10">
                    <button className="rounded-full bg-white px-5 py-2.5 text-xs md:text-sm font-semibold text-black hover:bg-neutral-200 transition-colors duration-200 shadow-md flex-shrink-0">
                      {item.button}
                    </button>

                    {!item.isLogoOnly && (
                      <p className="text-xs md:text-sm text-white font-medium truncate max-w-[80%]">
                        {item.genre && (
                          <span className="font-bold mr-2 text-white">
                            {item.genre}
                          </span>
                        )}
                        <span className="opacity-90">{item.title}</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ជួរខាងក្រោម (Bottom Row): សន្លឹកតូចៗ (Hello Kitty, Sabrina Carpenter, Fitness+, etc.) */}
        <div
  className="flex gap-4 sm:gap-5 transition-transform duration-1000 ease-out pl-[10%] pr-[10%]"
  style={{ transform: getBottomRowTransform() }}
>
  {bottomRowItems.map((item) => (
    <div
      key={item.id}
      className="flex-shrink-0 w-[470px] h-[264px]"
    >
      <div className="relative w-full h-full rounded-none overflow-hidden shadow-sm">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
          draggable={false}
        />

        {/* Logo */}
        <div className="absolute top-3 right-4 text-white text-[10px] sm:text-xs font-bold z-10">
          {item.logo}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

        {/* Content */}
        <div className="absolute bottom-3 left-4 right-4 flex flex-col gap-1 z-10">
          <p className="text-[10px] sm:text-xs text-white font-semibold truncate">
            {item.title}
          </p>

          <div className="flex justify-between items-center mt-1">
            <p className="text-[8px] sm:text-[10px] text-white/90 truncate max-w-[80%]">
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

<div className="relative flex items-center justify-center mt-10">
  {/* Pagination */}
  <div className="flex items-center gap-3">
    {items.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentIndex(index)}
        className={`relative overflow-hidden rounded-full transition-all duration-500 ${
          currentIndex === index
            ? "w-8 h-[8px] bg-[#cfcfcf]"
            : "w-[8px] h-[8px] bg-[#bdbdbd]"
        }`}
      >
        {currentIndex === index && (
          <div
            key={`${currentIndex}-${isPlaying}`}
            className="absolute left-0 top-0 h-full rounded-full bg-black"
            style={{
              animation: isPlaying
                ? "progress 5s linear forwards"
                : "none",
            }}
          />
        )}
      </button>
    ))}
  </div>

  {/* Play / Pause */}
  <button
    onClick={() => setIsPlaying(!isPlaying)}
    className="absolute right-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#d8d8d8] hover:bg-[#cfcfcf] transition"
  >
    {isPlaying ? (
      <Pause size={12} strokeWidth={2.5} />
    ) : (
      <Play
        size={12}
        strokeWidth={2.5}
        fill="currentColor"
        className="translate-x-[1px]"
      />
    )}
  </button>
</div>

      </div>
    </section>
  );
}