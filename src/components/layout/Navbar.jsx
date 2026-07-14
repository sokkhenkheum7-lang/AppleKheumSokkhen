import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import hero from "../../assets/images/hero.png";
import chart from "../../assets/images/chart.png";
import search from "../../assets/images/search.png";

import Overlay from "../overlay/Overlay";
import Backdrop from "../overlay/Backdrop";

import { menuData } from "../../mega-menu/menuData";

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
  const [activeMobileSub, setActiveMobileSub] = useState(null);
  const [activeOverlay, setActiveOverlay] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const menuKeys = [...navItems.map((item) => item.key), "search", "bag"];


  const logoClass =
    activeOverlay || !isHomePage || isOpen
      ? "brightness-0 opacity-80 hover:opacity-100"
      : "brightness-0 invert opacity-80 hover:opacity-100";

  const iconClass = isOpen ? "brightness-0" : logoClass;

  
  useEffect(() => {
    if (isOpen) {
      setActiveOverlay(null);
    }
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const handleMenuClose = () => {
    setIsOpen(false);
    setActiveMobileSub(null);
  };

  const handleNavigation = (path) => {
    setActiveOverlay(null);
    setIsOpen(false);
    setActiveMobileSub(null);
    navigate(path);
  };

  const handleSubLinkClick = (linkName) => {
    const formattedLink = linkName.toLowerCase().replace(/\s+/g, "");
    if (formattedLink === "shopthelatest") {
      handleNavigation("/store");
    } else if (formattedLink === "exploreallmac" || formattedLink === "mac") {
      handleNavigation("/mac");
    } else if (formattedLink === "exploreallipad" || formattedLink === "ipad") {
      handleNavigation("/ipad");
    } else {
      handleNavigation("/");
    }
  };

  return (
    <>
    
      <Backdrop open={activeOverlay !== null && !isOpen} onClose={() => setActiveOverlay(null)} />

      <header
        className={`fixed top-0 left-0 z-50 w-full font-sans antialiased transition-all duration-300 
          ${activeOverlay || isOpen
            ? "bg-white"
            : isHomePage
              ? "bg-gray/80 backdrop-blur-xl border-transparent"
              : "bg-gray/80 backdrop-blur-xl border-[#e8e8ed]"
          }`}
        onMouseLeave={() => { if (menuKeys.includes(activeOverlay)) setActiveOverlay(null); }}
      >

        {isOpen && <div className="absolute inset-0 bg-white z-0 md:hidden" />}

        <nav className="relative mx-auto flex h-11 max-w-[1038px] items-center justify-between px-4 lg:px-0 z-10">

          <button
            onClick={() => handleNavigation("/")}
            className={`z-10 flex items-center justify-center transition-all duration-300 ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
          >
            <img src={hero} alt="Apple" className={`h-4.5 transition duration-300 ${logoClass}`} />
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
          <div className="z-10 flex items-center gap-5 sm:gap-6">

            <button
              onClick={() => setActiveOverlay("search")}
              aria-label="Search"
              className={`py-2 flex items-center hover:opacity-70 transition-all duration-300 ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
            >
              <img
                src={search}
                alt="Search"
                className={`h-[15px] w-[15px] transition duration-300 ${iconClass}`}
              />
            </button>

            <button
              onClick={() => setActiveOverlay("bag")}
              aria-label="Bag"
              className={`py-2 flex items-center hover:opacity-70 transition-all duration-300 ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
            >
              <img
                src={chart}
                alt="Bag"
                className={`h-[17px] w-[15px] transition duration-300 ${iconClass}`}
              />
            </button>

            {/* Custom 2-Line Mobile Menu Button */}
            <button
              className="md:hidden flex flex-col justify-center items-end w-4 h-4 gap-[5px] group z-50 transition-all duration-300"
              onClick={isOpen ? handleMenuClose : () => setIsOpen(true)}
              aria-label="Toggle Menu"
            >
              <span
                className={`h-[1.5px] w-4 transition-transform duration-300 transform-gpu will-change-transform origin-center ${isOpen
                  ? "bg-zinc-800 rotate-45 translate-y-[3.25px]"
                  : (isHomePage && !activeOverlay ? "bg-gray-400" : "bg-gray-500")
                  }`}
              />
              <span
                className={`h-[1.5px] w-4 transition-transform duration-300 transform-gpu will-change-transform origin-center ${isOpen
                  ? "bg-zinc-800 -rotate-45 -translate-y-[3.25px]"
                  : (isHomePage && !activeOverlay ? "bg-gray-400" : "bg-gray-500")
                  }`}
              />
            </button>
          </div>
        </nav>

        <Overlay active={activeOverlay} onNavigate={handleNavigation} />
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-white transition-all duration-500 md:hidden ${isOpen ? "visible opacity-100" : "pointer-events-none invisible opacity-0"}`}>
        
        <div className="flex h-full flex-col overflow-y-auto px-10 pt-1 pb-10 antialiased">
          
          {!activeMobileSub ? (
            <ul className="space-y-2.5 pt-16">
              {navItems.map((item, index) => (
                <li
                  key={item.key}
                  className={`transition-all duration-500 ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"}`}
                  style={{ transitionDelay: `${index * 30}ms` }}
                >
                  <button
                    onClick={() => {
                      if (menuData[item.key]) {
                        setActiveMobileSub(item.key);
                      } else {
                        handleNavigation("/");
                      }
                    }}
                    className="text-3xl font-semibold px text-zinc-800 hover:text-zinc-500 text-left w-full flex justify-between items-center"
                  >
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="space-y-8 animate-fadeIn">
              {/* Inner Submenu Alignment Wrapper */}
              <div className="flex justify-between items-center h-26 ">
                <button
                  onClick={() => setActiveMobileSub(null)}
                  className=" hover:text-black flex items-center gap-2 text-sm transition-colors"
                >
                  <span>&lt;</span>
                </button>
              </div>

              {menuData[activeMobileSub].columns.map((column, colIdx) => (
                <div key={colIdx} className="space-y-3">
                  <h3 className="text-xs uppercase tracking-wider text-zinc-400">
                    {column.heading}
                  </h3>
                  <ul className="space-y-4">
                    {column.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <button
                          onClick={() => handleSubLinkClick(link)}
                          className={`text-left w-full transition-colors font-semibold ${column.large
                              ? "text-2xl text-zinc-800 hover:text-zinc-500"
                              : "text-zinc-500 hover:text-black text-base"
                            }`}
                        >
                          {link}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;