export default function PromoBanner({
  title,
  description,
  image,
  link1,
  link2,
  isDark = false,
  titleColor = "white",        // white | black
  descriptionColor = "gray",   // white | gray | black
}) {
  return (
    <section
      className={`relative w-full h-[692px] overflow-hidden ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center pt-12">
        {/* Title */}
        <h2
          className={`text-6xl font-semibold tracking-tight ${
            titleColor === "white" ? "text-black" : "text-black"
          }`}
        >
          {title}
        </h2>
 
        {/* Description */}
        <p
          className={`mt-3 text-[28px] leading-[1.25] ${
            descriptionColor === "black"
              ? "text-white"
              : descriptionColor === "black"
              ? "text-gray-300"
              : "text-black"
          }`}
        >
          {description}
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          {link1 && (
            <button className="rounded-full bg-[#0071e3] px-7 py-3 text-[17px] text-white hover:bg-[#0077ed] transition">
              {link1}
            </button>
          )}

          {link2 && (
            <button className="rounded-full border border-[#0071e3] px-7 py-3 text-[17px] text-[#0071e3] hover:bg-[#0071e3] hover:text-white transition">
              {link2}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}