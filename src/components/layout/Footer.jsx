import React, { useState } from "react";
import { FaApple } from "react-icons/fa";

export default function AppleFooter() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (title) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };


  const footerData = [
    {
      title: "Shop and Learn",
      links: ["Store", "Mac", "iPad", "iPhone", "Watch", "Vision", "AirPods", "TV & Home", "AirTag", "Accessories", "Gift Cards"],
      col: 1,
    },
    {
      title: "Apple Wallet",
      links: ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"],
      col: 1,
    },
    {
      title: "Account",
      links: ["Manage Your Apple Account", "Apple Store Account", "iCloud.com"],
      col: 2,
    },
    {
      title: "Entertainment",
      links: ["Apple One", "Apple TV", "Apple Music", "Apple Arcade", "Apple Fitness +", "Apple News+", "Apple Podcasts", "Apple Book", "Apple Store"],
      col: 2,
    },
    {
      title: "Apple Store",
      links: ["Find a Store", "Genius Bar", "Today at Apple", "Group Reservation", "Apple Camp", "Apple Store App", "Certified Refurbished", "Apple Trade In", "Financing", "Carrier Deals at Apple", "Order Status", "Shopping Help"],
      col: 3,
    },
    {
      title: "For Business",
      links: ["Apple and Business", "Shop for Business"],
      col: 4,
    },
    {
      title: "For Education",
      links: ["Apple and Education", "Shop for K-12", "Shop for College"],
      col: 4,
    },
    {
      title: "For Healthcare",
      links: ["Apple and Healthcare"],
      col: 4,
    },
    {
      title: "For Government",
      links: ["Apple and Government", "Shop for Federal Employees"],
      col: 4,
    },
    {
      title: "Apple Values",
      links: ["Accessibility", "Education", "Environment", "Inclusion and Diversity", "Privacy", "Racial Equity and Justice", "Shop for Veterans and Military"],
      col: 5,
    },
    {
      title: "About Apple",
      links: ["Newsroom", "Apple Leadership", "Career Opportunities", "Investors", "Ethics & Compliance", "Events", "Contact Apple"],
      col: 5,
    },
  ];

  // ជំនួយការក្រុមក្រឡាសម្រាប់ Desktop (1 ដល់ 5)
  const renderDesktopColumn = (colNum) => {
    return footerData
      .filter((section) => section.col === colNum)
      .map((section, idx) => (
        <div key={idx} className="mb-6">
          <h3 className="font-semibold text-[#1d1d1f] mb-2">{section.title}</h3>
          <ul className="space-y-[6px]">
            {section.links.map((link) => (
              <li key={link}>
                <a href="#" className="text-[#6e6e73] hover:text-[#1d1d1f] hover:underline block py-0.5">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ));
  };

  return (
    <footer className="bg-[#f5f5f7] text-[#6e6e73] text-[12px] leading-[1.33337] font-sans antialiased pt-8 pb-12 w-full">
      <div className="max-w-[980px] mx-auto px-5 sm:px-6 md:px-0">

        {/* ១. Disclaimer / Footnotes Area */}
        <div className="space-y-3 pb-6 border-b border-[#d2d2d7] text-[11px] leading-[1.6] text-[#86868b]">
          <p>
            1. Trade‑in values will vary based on the condition, year, and configuration of your eligible trade‑in device. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit or for an Apple Gift Card. Trade‑in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In‑store trade‑in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores and may vary between in‑store and online trade‑in. Some stores may have additional requirements. Apple or its trade‑in partners reserve the right to refuse, cancel, or limit quantity of any trade‑in transaction for any reason. More details are available from Apple’s trade-in partner for trade‑in and recycling of eligible devices.
            <br />
            Restrictions and limitations may apply.
          </p>
          <p>
            To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.
          </p>
          <p>
            Apple Payments Services LLC, a subsidiary of Apple Inc., is a service provider of Goldman Sachs Bank USA for Apple Card and Savings accounts. Neither Apple Inc. nor Apple Payments Services LLC is a bank.
          </p>
          <p>
            All communications from Apple and Goldman Sachs Bank USA about Apple Card (including transactional and marketing communications) and customer service support are available in English. Certain communications about Apple Card can be viewed in another language depending on your device language settings. If you reside in the U.S. Virgin Islands, American Samoa, Guam, Northern Mariana Islands, or U.S. Minor Outlying Islands, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.
            {" "}Learn more about how Apple Card applications are evaluated at{" "}
            <a href="https://support.apple.com/kb/HT209218" target="_blank" rel="noopener noreferrer" className="text-[#0066cc] underline hover:no-underline">
              support.apple.com/kb/HT209218
            </a>.
          </p>
          <p>A subscription is required for Apple Arcade, Apple Fitness+, Apple Music, and Apple TV+.</p>
          <p>Features are subject to change. Some features, applications, and services may not be available in all regions or all languages.</p>
        </div>


        <div className="flex items-center space-x-2 py-4 text-[#515154] text-[11px]">
          <FaApple className="text-[15px] text-[#1d1d1f]" />
          <span className="text-[#d2d2d7]">&gt;</span>
          <span>Apple Store Online</span>
        </div>


        <nav className="hidden md:grid grid-cols-5 gap-x-5 py-4" aria-label="Apple Directory Desktop">
          <div className="flex flex-col">{renderDesktopColumn(1)}</div>
          <div className="flex flex-col">{renderDesktopColumn(2)}</div>
          <div className="flex flex-col">{renderDesktopColumn(3)}</div>
          <div className="flex flex-col">{renderDesktopColumn(4)}</div>
          <div className="flex flex-col">{renderDesktopColumn(5)}</div>
        </nav>

        {/* បង្ហាញជា Mobile Accordion (ក្រោម MD) ដូចរូបភាពទី ៧ */}
        <nav className="block md:hidden py-2 border-b border-[#d2d2d7]" aria-label="Apple Directory Mobile">
          {footerData.map((section, idx) => {
            const isOpen = !!openSections[section.title];
            return (
              <div key={idx} className="border-t border-[#d2d2d7] first:border-t-0 py-3">
                <button
                  onClick={() => toggleSection(section.title)}
                  className="flex w-full items-center justify-between text-left text-[12px] text-[#1d1d1f] font-normal focus:outline-none"
                >
                  <span>{section.title}</span>
                  {/* សញ្ញាព្រួញបង្វិលចុះក្រោមពេល Open ដូចក្នុង UI រូបភាពទី ៣ និងទី ៧ */}
                  <svg
                    className={`w-3 h-3 text-[#6e6e73] transition-transform duration-250 ease-out ${isOpen ? "rotate-90" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100 mt-3 pl-2" : "max-h-0 opacity-0"
                    }`}
                >
                  <ul className="space-y-3 pb-1">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a href="#" className="text-[#6e6e73] hover:text-[#1d1d1f] block text-[12px]">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </nav>

        {/* ៣. Copyright & Legal Area */}
        <div className="pt-5 text-[#86868b] text-[11px]">
          <div className="mb-4 pb-4 border-b border-[#d2d2d7] md:border-none md:pb-0">
            More ways to shop:{" "}
            <a href="#" className="text-[#0066cc] underline hover:no-underline">Find an Apple Store</a>
            {" "}or{" "}
            <a href="#" className="text-[#0066cc] underline hover:no-underline">other retailer</a>
            {" "}near you. Or call 1-800-MY-APPLE (1-800-692-7753).
          </div>

          <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-center gap-3 pt-1">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
              <span>Copyright © 2026 Apple Inc. All rights reserved.</span>

              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[#6e6e73]">
                {["Privacy Policy", "Terms of Use", "Sales and Refunds", "Legal", "Site Map"].map((policy, idx) => (
                  <span key={idx} className="flex items-center gap-x-2">
                    <a href="#" className="hover:underline hover:text-[#1d1d1f]">
                      {policy}
                    </a>
                    {idx < 4 && <span className="text-[#d2d2d7] hidden md:inline">|</span>}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:ml-auto">
              <a href="#" className="hover:underline hover:text-[#1d1d1f]">
                United States
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}