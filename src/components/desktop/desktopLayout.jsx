import React from "react";

import Navbar from "../navbar";
import LandingMessage from "../landingMessage";
import HowItWorks from "../howItWorks";
import Vision from "../vision";
import Footer from "../footer";

const DesktopLayout = () => {
  return (
    <div className="sm:block hidden overflow-hidden">
      <Navbar />
      <div>
        <LandingMessage />
        <Vision />
        <HowItWorks />
        <Footer />
      </div>
    </div>
  );
};

export default DesktopLayout;
