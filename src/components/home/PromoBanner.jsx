export default function PromoBanner({
  title,
  description,
  image,
  link1,
  link2,
  isDark = false,
}) {
  return (
    <section
      className={`relative h-[620px] overflow-hidden flex flex-col items-center pt-14 text-center ${
        isDark ? "bg-black text-white" : "bg-white text-[#1d1d1f]"
      }`}
    >
      <div className="z-10 max-w-2xl px-5">
        <h2 className="text-6xl font-semibold tracking-tight">
          {title}
        </h2>

        <p
          className={`mt-3 text-2xl ${
            isDark ? "text-gray-300" : "text-[#6e6e73]"
          }`}
        >
          {description}
        </p>

        <div className="mt-6 flex justify-center gap-4">
          {link1 && (
            <button className="rounded-full bg-[#0071e3] px-6 py-3 text-white hover:bg-[#0077ed] transition">
              {link1}
            </button>
          )}

          {link2 && (
            <button className="rounded-full border border-[#0071e3] px-6 py-3 text-[#0071e3] hover:bg-[#0071e3] hover:text-white transition">
              {link2}
            </button>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center">
        <img
          src={image}
          alt={title}
          className="max-w-[800px] w-[90%] object-contain select-none"
        />
      </div>
    </section>
  );
}