import React from "react";
import Voice from "./howItWorksContent/voice";
import Amplify from "./howItWorksContent/amplify";
import Connect from "./howItWorksContent/connect";
import Send from "./howItWorksContent/send";

const HowItWorks = () => {
  return (
    <div className="w-full px-4 pr-10 mb-20 mt-20 primary-bg">
      <p className="text-4xl md:text-5xl font-bold">How it works</p>
      <p className="text-xl md:text-2xl font-regular mb-20 md:mb-10 ">
        You vocalize & vote; <br /> we pass it on.
      </p>
      <div className="md:flex">
        <Voice />
        <Amplify />
        <Connect />
        <Send />
      </div>
    </div>
  );
};

export default HowItWorks;
