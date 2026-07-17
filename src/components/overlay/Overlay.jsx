import MegaMenu from "../../mega-menu/MegaMenu";
import { menuData } from "../../mega-menu/menuData";
import SearchOverlay from "./SearchOverlay";
import BagOverlay from "./BagOverlay";

export default function Overlay({ active, onNavigate }) {
  if (!active) return null;

  
  const handleMouseEnter = (e) => e.stopPropagation();

  if (active === "search") {
    return (
      <div className="absolute left-0 top-full z-50 w-full" onMouseEnter={handleMouseEnter}>
        <SearchOverlay />
      </div>
    );
  }

  if (active === "bag") {
    return (
      <div className="absolute left-0 top-full z-50 w-full" onMouseEnter={handleMouseEnter}>
        <BagOverlay />
      </div>
    );
  }

  const menu = menuData[active];
  if (!menu) return null;

  return (
    <div className="absolute left-0 top-full z-50 w-full" onMouseEnter={handleMouseEnter}>
      <MegaMenu menu={menu} onNavigate={onNavigate} />
    </div>
  );
}