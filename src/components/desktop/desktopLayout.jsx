import React from "react";

import Navbar from "../navbar";
import LandingMessage from "../landingMessage";
import HowItWorks from "../howItWorks";
import Vision from "../vision";
import Footer from "../footer";
import WhyHerd from "../whyHerd";

const DesktopLayout = () => {
  return (
    <div className="sm:block hidden overflow-hidden">
      <Navbar />
      <div>
        <div name="landing">
          <LandingMessage />
        </div>
        <div name="whyHerd">
          <WhyHerd />
        </div>
        <div name="howItWorks">
          <HowItWorks />
        </div>
        <div name="vision">
          <Vision />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DesktopLayout;
