import React from "react";

import Navbar from "./navbar";
import LandingMessage from "./landingMessage";
import HowItWorks from "./howItWorks";
import Vision from "./vision";

const DesktopLayout = () => {
  return (
    <div className="sm:block hidden overflow-hidden">
      <Navbar />
      <div>
        <LandingMessage />
        <HowItWorks />
        <Vision />
      </div>
    </div>
  );
};

export default DesktopLayout;
