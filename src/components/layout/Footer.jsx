import React from "react";

export default function AppleFooter() {
  const columns = [
    [
      {
        title: "Shop and Learn",
        links: [
          "Store",
          "Mac",
          "iPad",
          "iPhone",
          "Watch",
          "Vision",
          "AirPods",
          "TV & Home",
          "AirTag",
          "Accessories",
          "Gift Cards",
        ],
      },
      {
        title: "Apple Wallet",
        links: ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"],
      },
    ],

    [
      {
        title: "Account",
        links: [
          "Manage Your Apple Account",
          "Apple Store Account",
          "iCloud.com",
        ],
      },
      {
        title: "Entertainment",
        links: [
          "Apple One",
          "Apple TV",
          "Apple Music",
          "Apple Arcade",
          "Apple Fitness +",
          "Apple News+",
          "Apple Podcasts",
          "Apple Book",
          "Apple Store",
        ],
      },
    ],

    [
      {
        title: "Apple Store",
        links: [
          "Find a Store",
          "Genius Bar",
          "Today at Apple",
          "Group Reservation",
          "Apple Camp",
          "Apple Store App",
          "Certified Refurbished",
          "Apple Trade In",
          "Financing",
          "Carrier Deals at Apple",
          "Order Status",
          "Shopping Help",
        ],
      },
    ],

    [
      {
        title: "For Business",
        links: ["Apple and Business", "Shop for Business"],
      },
      {
        title: "For Education",
        links: ["Apple and Education", "Shop for K-12", "Shop for College"],
      },
      {
        title: "For Healthcare",
        links: ["Apple and Healthcare"],
      },
      {
        title: "For Goverment",
        links: [
          "Apple and Government",
          "Shop for Federal Employees",
        ],
      },
    ],

    [
      {
        title: "Apple Values",
        links: [
          "Accessibility",
          "Education",
          "Environment",
          "Inclusion and Diversity",
          "Privacy",
          "Racial Equity and Justice",
          "Privacy",
          "Racial Equity and Justic",
          "Shop for Veterans and Military",
          "Carrier Deal at Apple",
          "Newsroom",
          "Investors",
          "Investors",
          "Ethics & Compliance",
          "Events",
          "Events",
          "Contact Apple",
        ],
      },
    ],
  ];

  return (
    <footer className="bg-[#f5f5f7] text-[12px] text-[#6e6e73] pt-5 pb-6">
      <div className="max-w-[980px] mx-auto px-4">

        {/* Disclaimer */}

        <div className="list-decimal pl-5 space-y-3 text-[12px] leading-5 text-[#6e6e73]">
          <p>
            1. Trade‑in values will vary based on the condition, year, and configuration of your eligible trade‑in sdevice. Not all devices are eligible for credit. You must be at least the age of majority to be eligible to trade in for credit or for an Apple Gift Card. Trade‑in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In‑store trade‑in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores and may vary between in‑store and online trade‑in. Some stores may have additional requirements. Apple or its trade‑in partners reserve the right to refuse, cancel, or limit quantity of any trade‑in transaction for any reason. More details are available from Apple’s trade-in partner for trade‑in and recycling of eligible devices. 
            <br></br>
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

  Learn more about how Apple Card applications are evaluated at{" "}
  <a
    href="https://support.apple.com/kb/HT209218"
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#06c] underline hover:no-underline"
  >
    support.apple.com/kb/HT209218
  </a>.
</p>

<p>
  A subscription is required for Apple Arcade, Apple Fitness+, Apple Music,
  and Apple TV+.
</p>

<p>
  Features are subject to change. Some features, applications, and services
  may not be available in all regions or all languages.
</p>
        </div>

        {/* Directory */}

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-5">

          {columns.map((column, i) => (
            <div key={i} className="space-y-6">

              {column.map((section, index) => (
                <div key={index}>

                  <h3 className="font-semibold text-[#1d1d1f] mb-2">
                    {section.title}
                  </h3>

                  <ul className="space-y-[6px]">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="hover:underline text-[#424245]"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>

                </div>
              ))}

            </div>
          ))}

        </div>

        {/* Bottom */}

        <div className="border-t border-[#d2d2d7] pt-4">
          <div className="mb-3 ml-1">
            More ways to shop:{" "}
            <a href="#" className="text-[#06c] hover:underline">
              Find an Apple Store
            </a>{" "}
            or{" "}
            <a href="#" className="text-[#06c] hover:underline">
              other retailer
            </a>{" "}
            near you. Or call{" "}
            <a href="#" className="text-[#06c] hover:underline">
              1-800-MY-APPLE
            </a>{" "}
            (1-800-692-7753).
          </div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 text-[#6e6e73]">

            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">

              <span>
                Copyright © 2026 Apple Inc. All rights reserved.
              </span>

              <div className="flex flex-wrap items-center gap-2">

                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>

                <span>|</span>

                <a href="#" className="hover:underline">
                  Terms of Use
                </a>

                <span>|</span>

                <a href="#" className="hover:underline">
                  Sales and Refunds
                </a>

                <span>|</span>

                <a href="#" className="hover:underline">
                  Legal
                </a>

                <span>|</span>

                <a href="#" className="hover:underline">
                  Site Map
                </a>

              </div>
            </div>

            <span>United States</span>

          </div>

        </div>

      </div>
    </footer>
  );
}