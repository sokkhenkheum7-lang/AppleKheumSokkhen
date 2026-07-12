import Footer from "../components/layout/Footer";

import StoreHeader from "./Storeheader";

const Mac = () => {
  return (
    <div className="pt-11 min-h-screen bg-white">
      {/* Container wrapper to maintain the Apple-style content width alignment */}
      <div className="max-w-[1060px] mx-auto px-6">
        <StoreHeader />
      </div>

      <Footer />
    </div>
  );
};

export default Mac;