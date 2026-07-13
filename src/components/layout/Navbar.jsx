import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

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
  { label: "TV&Home", key: "tvhome" },
  { label: "Entertainment", key: "entertainment" },
  { label: "Accessories", key: "accessories" },
  { label: "Support", key: "support" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeOverlay, setActiveOverlay] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const menuKeys = [...navItems.map((item) => item.key), "search", "bag"];


  const logoClass =
    activeOverlay || !isHomePage
      ? "brightness-0 opacity-80 hover:opacity-100"
      : "brightness-0 invert opacity-80 hover:opacity-100";

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const handleNavigation = (path) => {
    setActiveOverlay(null);
    setIsOpen(false);
    navigate(path);
  };

  return (
    <>
      <Backdrop open={activeOverlay !== null} onClose={() => setActiveOverlay(null)} />


      <header
        className={`fixed top-0 left-0 z-50 w-full font-sans antialiased transition-all duration-300 
          ${activeOverlay
            ? "bg-white"
            : isHomePage
              ? "bg-[#1d1d1f]/80 backdrop-blur-xl border-b border-transparent"
              : "bg-[#f5f5f7]/80 backdrop-blur-xl border-b border-[#e8e8ed]"
          }`}
        onMouseLeave={() => { if (menuKeys.includes(activeOverlay)) setActiveOverlay(null); }}
      >
        <nav className="relative mx-auto flex h-11 max-w-[1024px] items-center justify-between px-4 lg:px-0">
          {/* Logo */}
          <button onClick={() => handleNavigation("/")} className="z-10 flex items-center justify-center">
            <img src={hero} alt="Apple" className={`h-4 transition duration-300 ${logoClass}`} />
          </button>


          {/* Centered Menu Items */}
          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 md:flex">
            {navItems.map((item) => (
              <li
                key={item.key}
                onMouseEnter={() => setActiveOverlay(item.key)}
              >
                <button
                  onClick={() => item.key === "store" && handleNavigation("/store")}
                  className={`text-[12px] font-normal tracking-wide transition-colors duration-200 ${activeOverlay || !isHomePage
                    ? "text-[#1d1d1f]/80 hover:text-black"
                    : "text-white/80 hover:text-white"
                    }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right side icons */}
          <div className="z-10 flex items-center gap-6">
            <button onClick={() => setActiveOverlay("search")} aria-label="Search" className="py-2 flex items-center">
              <img src={search} alt="Search" className={`h-3.5 w-3.5 transition duration-300 ${logoClass}`} />
            </button>
            <button onClick={() => setActiveOverlay("bag")} aria-label="Bag" className="py-2 flex items-center">
              <img src={chart} alt="Bag" className={`h-4 transition duration-300 ${logoClass}`} />
            </button>
            <button
              className={`md:hidden ${isHomePage && !activeOverlay ? "text-white" : "text-black"}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* Pass down the navigation function to the overlay panel */}
        <Overlay active={activeOverlay} onNavigate={handleNavigation} />
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-2xl transition-all duration-500 md:hidden ${isOpen ? "visible opacity-100" : "pointer-events-none invisible opacity-0"}`}>
        <div className="flex h-full flex-col overflow-y-auto px-8 pt-20">
          <ul className="space-y-6">
            {navItems.map((item, index) => (
              <li
                key={item.key}
                className={`transition-all duration-500 ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"}`}
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                <button
                  onClick={() => {
                  
                    if (item.key === "store") {
                      handleNavigation("/store");
                    } else if (item.key === "mac") {
                      handleNavigation("/mac");
                    } else if (item.key === "ipad") {
                      handleNavigation("/ipad"); // Added routing logic for iPad
                    } else {
                      handleNavigation("/");
                    }
                  }}
                  className="text-3xl font-medium text-white hover:text-gray-400 text-left w-full"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;