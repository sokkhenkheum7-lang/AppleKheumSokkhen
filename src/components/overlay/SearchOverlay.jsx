import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";

const QUICK_LINKS = [
  "Find a Store",
  "Apple Vision Pro",
  "AirPods",
  "Apple Intelligence",
  "Apple Trade In",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

export default function SearchOverlay() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      /* UPDATED: Changed background to white, added subtle bottom shadow, and changed base text to dark */
      className="absolute left-0 top-full z-50 w-full min-h-[400px] bg-white border-t border-gray-100 pt-14 pb-16 font-sans text-[#1d1d1f] shadow-xl"
    >
      <div className="mx-auto max-w-8xl px-10 pl-190">
        {/* Search Input */}
        <div className="relative mb-8 flex max-w-3xl items-center">
          <Search
            className="absolute left-0 h-6 w-6 text-[#86868b]"
            strokeWidth={1.8}
          />

          <input
            type="text"
            placeholder="Search apple.com"
            autoFocus
            /* Text adjusted to match the dark color requirements over white */
            className="w-full bg-transparent py-1 pl-11 pr-4 text-[24px] font-semibold text-[#1d1d1f] placeholder:text-[#86868b] focus:outline-none"
          />
        </div>

        {/* Quick Links */}
        <section className="max-w-3xl">
          <h2 className="mb-4 text-xs font-normal tracking-wide text-[#86868b]">
            Quick Links
          </h2>

          <motion.ul
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-1.5"
          >
            {QUICK_LINKS.map((link) => (
              <motion.li
                key={link}
                variants={itemVariants}
                /* Hover creates a clean light-gray selection pill structure */
                className="group flex w-full cursor-pointer items-center gap-3 rounded-md py-2 px-7 -ml-8 transition-colors duration-150 hover:bg-[#f5f5f7]"
              >
                <ArrowRight
                  strokeWidth={2}
                  /* Icon stays gray normally and goes dark black on hover */
                  className="h-4 w-4 text-[#86868b] opacity-60 transition-all duration-200 group-hover:text-[#1d1d1f] group-hover:opacity-100"
                />

                {/* Text turns dark black (#1d1d1f) on hover instead of blue */}
                <span className="text-[14px] font-medium text-[#333336] transition-colors duration-200 group-hover:text-[#1d1d1f]">
                  {link}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </section>
      </div>
    </motion.div>
  );
}