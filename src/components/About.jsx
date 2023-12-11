import { FaCaretRight } from "react-icons/fa6";
import SectionTitle from "../utils/SectionTitle";

const skills = [
  "JavaScript (ES6+)",
  "React",
  "Express js",
  "MongoDB",
  "Nextjs",
  "TypeScript",
];

const About = () => {
  return (
    <div className="max-w-5xl mx-auto font-openSans mb-20 ps-12 pr-4">
      <SectionTitle number={1} title="About Me" />
      <div className="grid md:grid-cols-3 gap-12 items-center">
        <div className="left-content text-base font-openSans md:col-span-2 text-secondarySlate font-semibold mt-10">
          <p className="text-base">
            Hello! My name is Mahadi and I enjoy creating things that live on
            the internet. My interest in web development started back in 2019
            when I discovered my interest in website and how they works taught
            me a lot about HTML, CSS & Javascript!
          </p>
          <p className="text-base my-4">
            Back then, I have had the privilege of learning at{" "}
            <span className="text-primaryGreen">
              SDF (Social Development Foundation)
            </span>{" "}
            and finished{" "}
            <span className="text-primaryGreen">
              Web Design and Development course{" "}
            </span>{" "}
            at 28 january 2022 (200 hours course)
          </p>
          <p className="text-base">
            Fast-forward to today, now I have successfully completed{" "}
            <span className="text-primaryGreen">
              {`"Complete Web Development Course with Jhankar Mahbub"`}
            </span>{" "}
            (6 Month). Currently, I am open to work and willing to contribute in
            any projects.
          </p>

          <p className="text-base mt-10">
            Here are a few technologies I have been working with recently:
          </p>
          <ul className="list-none grid grid-cols-2 my-6 max-w-md">
            {skills.map((skill) => (
              <li key={skill} className="flex gap-2 items-center">
                <FaCaretRight className="text-primaryGreen text-xs" />
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="right-image relative z-10 flex justify-center">
          <div className="relative">
            <img
              className="rounded-lg z-10 relative hover:-translate-x-1.5 hover:-translate-y-1.5 transition-all duration-200 max-w-xs"
              src="../../public/01641819262.JPG"
              alt="Mahadi Hasan's Image"
            />
            <div className="after:content-[''] after:border-[2px] after:border-primaryGreen after:w-full after:h-full after:absolute after:top-4 after:left-4 -z-10 after:rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
