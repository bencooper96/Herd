import React from "react";

import StickyNav from "../landing/stickyNavbar";
import LandingMessage from "../landing/landingMessage";
import HowItWorks from "../howItWorks/howItWorks";
import Vision from "../vision";
import WhyHerd from "../whyHerd/whyHerd";
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
          <WhyHerd />
          <HowItWorks />
          <Vision />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
