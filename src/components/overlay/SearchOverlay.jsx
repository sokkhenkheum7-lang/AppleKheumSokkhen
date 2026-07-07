import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const QUICK_LINKS = [
  { label: "Find a Store", path: "/store" }, // កែប្រែជា Object ដើម្បីងាយស្រួល Route ទៅតាមទំព័រនីមួយៗ
  { label: "Apple Vision Pro", path: "/vision" },
  { label: "AirPods", path: "/airpods" },
  { label: "Apple Intelligence", path: "/" },
  { label: "Apple Trade In", path: "/" },
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

export default function SearchOverlay({ onClose }) {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    if (onClose) onClose(); // បិទ overlay បន្ទាប់ពីចុចរួច
    navigate(path);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute left-0 top-full z-50 w-full min-h-[380px] bg-white border-t border-gray-100 pt-10 pb-14 font-sans text-[#1d1d1f] shadow-2xl"
    >
      {/* 💡 ប្រើប្រាស់ max-w-7xl និង px-4 / lg:px-35 ដើម្បីឱ្យស្មើគ្នាជួរជើងជាមួយនឹង Logo របស់ Navbar */}
      <div className="mx-auto max-w-7xl px-4 lg:px-35">
        
        {/* Search Input Box */}
        <div className="relative mb-6 flex max-w-3xl items-center">
          <Search
            className="absolute left-0 h-5 w-5 text-[#86868b]"
            strokeWidth={2}
          />
          <input
            type="text"
            placeholder="Search apple.com"
            autoFocus
            className="w-full bg-transparent py-2 pl-9 pr-4 text-[22px] font-semibold text-[#1d1d1f] placeholder:text-[#86868b] focus:outline-none"
          />
        </div>

        {/* Quick Links Section */}
        <section className="max-w-3xl">
          <h2 className="mb-3 text-[12px] font-normal tracking-wide text-[#86868b]">
            Quick Links
          </h2>

          <motion.ul
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-1"
          >
            {QUICK_LINKS.map((link) => (
              <motion.li
                key={link.label}
                variants={itemVariants}
              >
                <button
                  onClick={() => handleLinkClick(link.path)}
                  className="group flex w-full cursor-pointer items-center gap-3 rounded-md py-1.5 px-3 -ml-3 transition-colors duration-150 hover:bg-[#f5f5f7] text-left"
                >
                  <ArrowRight
                    strokeWidth={2}
                    className="h-3.5 w-3.5 text-[#86868b] opacity-0 -ml-2 transition-all duration-200 group-hover:opacity-100 group-hover:ml-0"
                  />
                  <span className="text-[14px] font-medium text-[#333336] transition-colors duration-200 group-hover:text-[#1d1d1f]">
                    {link.label}
                  </span>
                </button>
              </motion.li>
            ))}
          </motion.ul>
        </section>

      </div>
    </motion.div>
  );
}