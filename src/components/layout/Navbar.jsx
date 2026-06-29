import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import hero from "../../assets/images/hero.png";
import chart from "../../assets/images/chart.png";
import search from "../../assets/images/search.png";

import Overlay from "../overlay/Overlay";
import Backdrop from "../overlay/Backdrop";

const navItems = [
  { label: "Store", key: "store" },
  { label: "Mac", key: "mac" },
  { label: "iPad", key: "ipad" },
  { label: "iPhone", key: "iphone" },
  { label: "Watch", key: "watch" },
  { label: "Vision", key: "vision" },
  { label: "AirPods", key: "airpods" },
  { label: "TV & Home", key: "tvhome" },
  { label: "Entertainment", key: "entertainment" },
  { label: "Accessories", key: "accessories" },
  { label: "Support", key: "support" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeOverlay, setActiveOverlay] = useState(null);

  const menuKeys = [...navItems.map((item) => item.key), "search", "bag"];

  const logoClass = activeOverlay
    ? "brightness-0"
    : "brightness-0 invert";

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <Backdrop
        open={activeOverlay !== null}
        onClose={() => setActiveOverlay(null)}
      />

      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          activeOverlay
            ? "bg-white"
            : isOpen
            ? "bg-[#1d1d1f]"
            : "bg-[#1d1d1f]/80 backdrop-blur-xl"
        }`}
        onMouseLeave={() => {
          if (menuKeys.includes(activeOverlay)) {
            setActiveOverlay(null);
          }
        }}
      >
        <nav className="mx-auto flex h-11 max-w-7xl items-center justify-between px-4 lg:px-8">
          <a href="/">
            <img
              src={hero}
              alt="Apple"
              className={`h-4 transition duration-300 ${logoClass}`}
            />
          </a>

          <ul className="hidden flex-1 items-center justify-center gap-8 md:flex">
            {navItems.map((item) => (
              <li
                key={item.key}
                onMouseEnter={() => setActiveOverlay(item.key)}
              >
                <button
                  className={`text-xs transition-colors duration-200 ${
                    activeOverlay === item.key
                      ? "text-black"
                      : activeOverlay
                      ? "text-gray-500 hover:text-black"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveOverlay("search")}
              aria-label="Search"
              className="py-2"
            >
              <img
                src={search}
                alt="Search"
                className={`h-4 w-4 transition duration-300 ${logoClass}`}
              />
            </button>

            <button
              onClick={() => setActiveOverlay("bag")}
              aria-label="Bag"
              className="py-2"
            >
              <img
                src={chart}
                alt="Bag"
                className={`transition duration-300 ${logoClass}`}
              />
            </button>

            <button
              className="text-white md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        <Overlay active={activeOverlay} />
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-2xl transition-all duration-500 md:hidden ${
          isOpen
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto px-8 pt-20">
          <ul className="space-y-6">
            {navItems.map((item, index) => (
              <li
                key={item.key}
                className={`transition-all duration-500 ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-6 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 40}ms`,
                }}
              >
                <a
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-semibold text-white hover:text-gray-400"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;