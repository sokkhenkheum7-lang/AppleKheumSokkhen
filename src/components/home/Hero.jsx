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


      {/* Changed pt-[30%] to flex items-center and justify-center for better centering */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">

        <h1 className="text-5xl font-semibold tracking-tight md:text-7xl lg:text-8xl">
          AirPods Pro 3
        </h1>
        <p className="mt-4 text-lg font-normal md:text-2xl">
          The world’s best in-ear
          <br className="block md:hidden" />
          Active Noise Cancellation.
        </p>

        <div className="mt-8 flex flex-row gap-4 justify-center">
          <button className="rounded-full bg-white px-6 py-2.5 text-[15px] md:text-[17px] font-medium text-black transition-transform hover:scale-105">
            Learn more
          </button>
          <button className="rounded-full bg-white/20 px-6 py-2.5 text-[15px] md:text-[17px] font-medium text-white backdrop-blur-md transition-all hover:bg-white hover:text-black">
            Buy
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;