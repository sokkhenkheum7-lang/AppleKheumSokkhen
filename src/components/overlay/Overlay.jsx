import MegaMenu from "../../mega-menu/MegaMenu";
import { menuData } from "../../mega-menu/MenuData";

import SearchOverlay from "./SearchOverlay";
import BagOverlay from "./BagOverlay";

// Accept onNavigate down from Navbar
export default function Overlay({ active, onNavigate }) {
  if (!active) return null;

  return (
    <div className="absolute left-0 top-full w-full z-50">
      {active === "search" ? (
        <SearchOverlay />
      ) : active === "bag" ? (
        <BagOverlay />
      ) : (
        /* Forward onNavigate down to MegaMenu */
        <MegaMenu menu={menuData[active]} onNavigate={onNavigate} />
      )}
    </div>
  );
}