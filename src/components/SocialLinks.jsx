import { Link } from "react-router-dom";
import { SlSocialFacebook } from "react-icons/sl";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const socialLinks = [
  {
    name: "github",
    Icon: FiGithub,
    url: "https://github.com/Mahadi-Hasan-Sopon",
  },
  {
    name: "linkedin",
    Icon: FiLinkedin,
    url: "https://www.linkedin.com/in/mahadi-hasan-sopon",
  },
  {
    name: "twitter",
    Icon: FiTwitter,
    url: "https://twitter.com/MahadiSopon",
  },
  {
    name: "facebook",
    Icon: SlSocialFacebook,
    url: "https://www.facebook.com/D.Eng.Mahadi.Hasan",
  },
  {
    name: "leetCode",
    Icon: SiLeetcode,
    url: "https://leetcode.com/Mahadi-Hasan-Sopon",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 fixed bottom-0">
      {socialLinks.map(({ Icon, name, url }) => (
        <Link key={name} to={url} target="_blank">
          <div className="w-6 h-6">
            <Icon className="w-full h-full text-[#a8b2d1]" />
          </div>
        </Link>
      ))}
      <span className="w-px h-24 bg-primaryLiteSlate"></span>
    </div>
  );
};

export default SocialLinks;
