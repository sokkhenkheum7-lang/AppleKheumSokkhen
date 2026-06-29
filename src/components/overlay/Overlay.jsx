import MegaMenu from "../../mega-menu/MegaMenu";
import { menuData } from "../../mega-menu/MenuData";

import SearchOverlay from "./SearchOverlay";
import BagOverlay from "./BagOverlay";

export default function Overlay({ active }) {
  if (!active) return null;

  return (
    <div className="absolute left-0 top-full w-full z-50">
      {active === "search" ? (
        <SearchOverlay />
      ) : active === "bag" ? (
        <BagOverlay />
      ) : (
        <MegaMenu menu={menuData[active]} />
      )}
    </div>
  );
}