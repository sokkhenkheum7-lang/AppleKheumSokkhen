import { motion } from "framer-motion";
import { Package, Bookmark, User, LogIn } from "lucide-react";

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

const BAG_LINKS = [
  { label: "Orders", icon: Package },
  { label: "Your Saves", icon: Bookmark },
  { label: "Account", icon: User },
  { label: "Sign in", icon: LogIn },
];

export default function BagOverlay() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="w-screen bg-white text-[#1d1d1f] min-h-[400px] font-sans pt-14 pb-16 border-t border-gray-200 shadow-xl absolute left-1/2 -translate-x-1/2 top-full cursor-default"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="mx-auto max-w-7xl px-7">
        
        {/* Main Heading and Sign-in message */}
        <div className="mb-10 max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-[#1d1d1f]">
            Your Bag is empty.
          </h1>
          <p className="mt-4 text-[17px] font-normal text-[#1d1d1f]">
            <a href="/signin" className="text-[#0066cc] hover:underline">
              Sign in
            </a>{" "}
            to see if you have any saved items.
          </p>
        </div>

        {/* Profile Links Section */}
        <div className="max-w-3xl">
          <h2 className="text-[#86868b] text-xs font-normal tracking-wider mb-4">
            My Profile
          </h2>

          <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-[16px]"
          >
            {BAG_LINKS.map((item) => {
              const IconComponent = item.icon;
              return (
                <motion.li
                  key={item.label}
                  variants={itemVariants}
                  className="group flex items-center gap-3 cursor-pointer w-fit"
                >
                  <IconComponent 
                    className="w-[18px] h-[18px] text-[#86868b] group-hover:text-[#0066cc] transition-colors duration-200" 
                    strokeWidth={1.5}
                  />
                  <span className="text-[14px] font-normal text-[#1d1d1f] group-hover:text-[#0066cc] transition-colors duration-200">
                    {item.label}
                  </span>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>

      </div>
    </motion.div>
  );
}