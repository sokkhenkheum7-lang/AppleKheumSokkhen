import { motion } from "framer-motion";
import { Bookmark, LogIn, Package, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

const PROFILE_LINKS = [
  {
    label: "Orders",
    icon: Package,
    path: "/account/orders",
  },
  {
    label: "Your Saves",
    icon: Bookmark,
    path: "/account/saves",
  },
  {
    label: "Account",
    icon: User,
    path: "/account",
  },
  {
    label: "Sign in",
    icon: LogIn,
    path: "/signin",
  },
];

export default function BagOverlay({ onClose }) {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    onClose?.();
    navigate(path);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-0 top-full z-50 w-full min-h-[380px] border-t border-gray-100 bg-white pt-10 pb-14 font-sans text-[#1d1d1f] shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-35">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-[#1d1d1f] lg:text-4xl">
            Your Bag is empty.
          </h1>

          <p className="mt-3 text-[14px] text-[#1d1d1f] lg:text-[16px]">
            <button
              onClick={() => navigateTo("/signin")}
              className="text-[#0066cc] hover:underline"
            >
              Sign in
            </button>{" "}
            to see if you have any saved items.
          </p>
        </div>

        <section>
          <h2 className="mb-3 text-[12px] font-normal tracking-wide text-[#86868b]">
            My Profile
          </h2>

          <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-1"
          >
            {PROFILE_LINKS.map(({ label, icon: Icon, path }) => (
              <motion.li key={label} variants={itemVariants}>
                <button
                  onClick={() => navigateTo(path)}
                  className="group -ml-3 flex w-full max-w-xs items-center gap-3 rounded-md px-3 py-1.5 text-left transition-colors duration-150 hover:bg-[#f5f5f7]"
                >
                  <Icon
                    strokeWidth={1.8}
                    className="h-4 w-4 text-[#86868b] transition-colors duration-200 group-hover:text-[#0066cc]"
                  />

                  <span className="text-[14px] font-medium text-[#333336] transition-colors duration-200 group-hover:text-[#0066cc]">
                    {label}
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