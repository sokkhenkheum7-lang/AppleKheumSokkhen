import { motion } from "framer-motion";

// ==========================================
// 1. ANIMATION VARIANTS (pull out Component)
// ==========================================
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
    transition: { staggerChildren: 0.04 },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

// ==========================================
// 2. SUB-COMPONENT LINK (short code)
// ==========================================
const MenuLink = ({ item, isLarge }) => {
  const baseClass = "text-[#1d1d1f] hover:text-gray-500 transition-colors duration-200 inline-block";
  const sizeClass = isLarge ? "text-4xl font-semibold" : "text-lg";

  return (
    <motion.li variants={linkVariants}>
      <a href="/" className={`${baseClass} ${sizeClass}`}>
        {item}
      </a>
    </motion.li>
  );
};

// ==========================================
// 3. MAIN COMPONENT
// ==========================================
function MegaMenu({ menu }) {
  if (!menu) return null;

  return (
    <motion.div
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      className="absolute left-0 top-full w-full bg-[#f5f5f7] border-t border-gray-200 shadow-xl z-50"
    >
      <div className="mx-auto flex max-w-7xl gap-20 px-8 py-10 lg:px-32">
        {menu.columns.map((column) => (
         
          <motion.div variants={columnVariants} key={column.heading}>
            <p className="mb-4 text-xs text-gray-500">{column.heading}</p>

            <ul className="space-y-3">
              {column.links.map((item) => (
                <MenuLink 
                  key={item} 
                  item={item} 
                  isLarge={column.large} 
                />
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default MegaMenu;