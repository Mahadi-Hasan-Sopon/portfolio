const Hero = () => {
  return (
    <div className="flex flex-col justify-center gap-6 sm:gap-8 max-w-5xl mx-auto min-h-screen ps-12 pb-20">
      <h2 className="text-lg font-notoSerif text-primaryGreen font-normal ms-2">
        Hi, my name is
      </h2>
      <h1 className="text-5xl md:text-7xl font-bold text-primaryLiteSlate font-interFont">
        Mahadi Hasan.
      </h1>
      <h1 className="text-5xl md:text-7xl font-bold text-secondarySlate font-interFont">
        I build things for the web.
      </h1>
      <p className="text-base font-medium tracking-wide leading-relaxed font-openSans text-secondarySlate max-w-lg">
        {` I'm a frontend focused MERN Stack developer specializing in building
        (and occasionally designing) exceptional digital experiences. Currently,
        I'm exploring Nextjs and Typescript.`}
      </p>

      <div>
        <button className="px-8 py-3 font-interFont text-primaryGreen flex justify-center items-center outline outline-1 outline-primaryGreen rounded-sm">
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
