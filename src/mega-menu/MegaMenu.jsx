import { motion } from "framer-motion";

const menuVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.05,
    },
  },
};

const columnVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

const ROUTES = {
  "Shop the Latest": "/store",
  "Shop Store": "/store",
  Mac: "/mac",
  iPad: "/ipad",
  iPhone: "/iphone",
  "Apple Watch": "/apple-watch",
  "Apple Vision Pro": "/apple-vision-pro",
  AirPods: "/airpods",
  Accessories: "/accessories",
};

function getRoute(label) {
  if (ROUTES[label]) {
    return ROUTES[label];
  }

  return `/${label
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}`;
}

function MenuItem({ label, large, onClick }) {
  return (
    <motion.li variants={itemVariants}>
      <button
        onClick={onClick}
        className={`block w-full text-left font-sf transition-colors duration-200 ${
          large
            ? "text-[28px] leading-[1.15] font-semibold tracking-[-0.02em] text-[#1d1d1f] hover:text-[#6e6e73]"
            : "text-[13px] leading-5 font-medium tracking-[-0.01em] text-[#1d1d1f] hover:text-[#0066cc]"
        }`}
      >
        {label}
      </button>
    </motion.li>
  );
}

export default function MegaMenu({ menu, onNavigate }) {
  if (!menu) return null;

  return (
    <motion.nav
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      className="absolute left-0 top-full z-50 w-full border-t border-[#d2d2d7] bg-white shadow-2xl"
    >
      <div className="mx-auto flex max-w-7xl gap-32 px-8 py-14 lg:px-32">
        {menu.columns.map(({ heading, links, large }) => (
          <motion.section
            key={heading}
            variants={columnVariants}
            className="min-w-[200px]"
          >
            <p className="mb-5 font-sf text-[12px] leading-4 font-normal tracking-[-0.01em] text-[#6e6e73]">
              {heading}
            </p>

            <ul className="space-y-4">
              {links.map((link) => (
                <MenuItem
                  key={link}
                  label={link}
                  large={large}
                  onClick={() => onNavigate(getRoute(link))}
                />
              ))}
            </ul>
          </motion.section>
        ))}
      </div>
    </motion.nav>
  );
}