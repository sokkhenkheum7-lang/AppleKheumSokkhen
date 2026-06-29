import heroVideo from "../../assets/videos/large.mp4";

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-start pt-[30%] text-white">
        
        <h1 className="text-4xl md:text-7xl font-semibold tracking-tight">
          AirPods Pro 3
        </h1>
        <p className="text-xl md:text-2xl font-normal">
          The world’s best in-ear <br />Active Noise Cancellation.
        </p>
        <div className="mt-4 flex gap-4">
          <button className="rounded-full bg-white px-6 py-2.5 text-[17px] font-medium text-black">
          Learn more
        </button>

        {/*button*/}
          <button className="rounded-full bg-white/20 px-6 py-2.5 text-[17px] font-medium text-white backdrop-blur-md transition-all hover:bg-white hover:text-black">
            Buy
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;