import React from "react";

import StickyNav from "./stickyNavbar";
import LandingMessage from "../landingMessage";
import HowItWorks from "../howItWorks";
import Vision from "../vision";
import Footer from "../footer";

const Layout = () => {
  return (
    <div className="sm:hidden w-full">
      <div className="">
        <img
          src="/bg-mobile-light.png"
          className="absolute w-full top-0 z-0 "
          style={{ minHeight: "550px", maxHeight: "800px" }}
        />
      </div>

      <div className="relative z-10 h-full w-full">
        <div>
          <LandingMessage />
          <StickyNav />
          <Vision />
          <HowItWorks />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
