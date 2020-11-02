import React from "react";
import HIWTabs from "./hiwTabs";

const HowItWorks = () => {
  return (
    <div className="w-full sm:px-10  bg-secondary pt-2 sm:pt-10">
      <p className="text-4xl md:text-5xl font-bold sm:text-left text-center">
        How it works
      </p>

      <HIWTabs />
    </div>
  );
};

export default HowItWorks;
