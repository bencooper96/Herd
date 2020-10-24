import React from "react";
import HIWDesktop from "./howItWorksContent/hiwDesktopLayout"
import HIWMobile from "./howItWorksContent/hiwMobileLayout"

const HowItWorks = () => {
  return (
    <div className="w-full sm:px-10 mt-20 bg-district bg-cover bg-no-repeat bg-fixed">
      <p className="text-4xl md:text-5xl font-bold">How it works</p>
      <HIWDesktop/>
      <HIWMobile/>

    </div>
  );
};

export default HowItWorks;
