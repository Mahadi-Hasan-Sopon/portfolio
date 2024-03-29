import { Link } from "react-router-dom";
import ResumePDF from "../assets/Resume/Resume of Mahadi Hasan.pdf";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center gap-6 sm:gap-8 max-w-5xl mx-auto min-h-screen px-12 py-28">
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
        <Link
          to={ResumePDF}
          target="_blank"
          className="px-8 py-3 font-interFont text-primaryGreen inline-block outline outline-1 outline-primaryGreen rounded-sm "
          download={true}
        >
          Download Resume
        </Link>
      </div>
    </div>
  );
};

export default Hero;
