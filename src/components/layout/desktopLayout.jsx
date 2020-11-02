import React from "react";

import Navbar from "../landing/navbar";
import LandingMessage from "../landing/landingMessage";
import HowItWorks from "../howItWorks/howItWorks";
import Vision from "../vision";
import Footer from "../footer";
import WhyHerd from "../whyHerd/whyHerd";

const DesktopLayout = () => {
  return (
    <div className="sm:block hidden overflow-hidden">
      <Navbar />
      <div>
        <div name="home">
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
