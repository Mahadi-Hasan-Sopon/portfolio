import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import ResumePDF from "../assets/Resume/Resume of Mahadi Hasan.pdf";

import { useState } from "react";

const navLinks = [
  {
    name: "About",
    url: "#about",
  },
  {
    name: "Experience",
    url: "#jobs",
  },
  {
    name: "Work",
    url: "#projects",
  },
  {
    name: "Contact",
    url: "#contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar flex justify-between items-center gap-6 py-3 max-h-20 fixed top-0 w-[calc(100%-35px)] max-w-7xl bg-bgNavy shadow-lg z-50 mx-auto">
      <div className="logo w-10">
        <Link to="/">
          <div className="w-12">
            <svg
              id="logo"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 84 96"
            >
              <title>Logo</title>
              <g transform="translate(-8.000000, -2.000000)">
                <g transform="translate(11.000000, 5.000000)">
                  <polygon
                    id="Shape"
                    stroke="#64ffda"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points="39 0 0 22 0 67 39 90 78 68 78 23"
                  ></polygon>
                  <path
                    d="M30,50 L30,30 L35,30 L40,42 L45,30 L50,30 L50,50 L45,50 L45,35 L40,50 L40,50 L35,35 L35,50 Z"
                    fill="#64ffda"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
        </Link>
      </div>
      <div className="mobileNav md:hidden relative max-w-xs w-full flex justify-end transition-all duration-500">
        {isOpen ? (
          <RxCross2
            className="text-primaryLiteSlate text-3xl transition-all duration-500"
            onClick={() => setIsOpen(!isOpen)}
          />
        ) : (
          <FaBarsStaggered
            className="text-primaryLiteSlate text-2xl transition-all duration-500"
            onClick={() => setIsOpen(!isOpen)}
          />
        )}
        <div
          className={`navItems flex md:hidden flex-col gap-8 absolute top-10 min-h-screen w-full bg-bgNavy ps-10 transition-all duration-500 ${
            isOpen ? "-right-5" : "-right-full"
          }`}
        >
          {navLinks &&
            navLinks.map(({ url, name }, idx) => (
              <a
                className="text-sm flex items-center font-openSans text-primaryLiteSlate/90 font-semibold cursor-pointer"
                key={name}
                href={url}
              >
                <span className="mr-1.5 text-primaryGreen">
                  {(idx + 1).toLocaleString("en-US", {
                    minimumIntegerDigits: 2,
                  })}
                  .
                </span>
                {name}
              </a>
            ))}
          <li className="list-none flex">
            <Link
              to={ResumePDF}
              download={true}
              target="_blank"
              className="text-primaryGreen flex justify-center items-center outline outline-1 outline-primaryGreen rounded-sm py-2.5 px-7 text-sm font-openSans cursor-pointer"
            >
              Resume
            </Link>
          </li>
        </div>
      </div>
      <div className="navItems hidden md:flex flex-row gap-6">
        {navLinks &&
          navLinks.map(({ url, name }, idx) => (
            <a
              className="text-sm flex items-center font-openSans text-primaryLiteSlate/90 font-semibold cursor-pointer"
              key={name}
              href={url}
            >
              <span className="mr-1.5 text-primaryGreen">
                {(idx + 1).toLocaleString("en-US", {
                  minimumIntegerDigits: 2,
                })}
                .
              </span>
              {name}
            </a>
          ))}
        <li className="list-none">
          <Link
            to={ResumePDF}
            target="_blank"
            className="text-primaryGreen flex justify-center items-center outline outline-1 outline-primaryGreen rounded-sm py-2 px-4 text-sm font-openSans"
            download={true}
          >
            Resume
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
