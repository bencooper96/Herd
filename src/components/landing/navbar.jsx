import React from "react";

import { Link, animateScroll as scroll, scrollSpy } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="w-full sm:flex justify-between hidden items-baseline px-4 bg-primary border-b fixed z-10 -mt-3">
      <div className="flex items-baseline ">
        <p className="text-5xl font-bold ">Herd</p>
        <p className="text-2xl font-thin italic mx-2">The digital town hall.</p>
      </div>
      <div className="flex ">
        <Link
          to="landing"
          className="text-xl font-thin mx-3 p-1 cursor-pointer hover:bg-gray-100 nav-item"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Home
        </Link>
        <Link
          to="whyHerd"
          className="text-xl font-thin mx-3 p-1 cursor-pointer hover:bg-gray-100 nav-item"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Why Herd
        </Link>
        <Link
          to="howItWorks"
          className="text-xl font-thin mx-3 p-1 cursor-pointer hover:bg-gray-100 nav-item"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          How it works
        </Link>
        <Link
          to="vision"
          className="text-xl font-thin mx-3 p-1 cursor-pointer hover:bg-gray-100 nav-item"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Vision
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
