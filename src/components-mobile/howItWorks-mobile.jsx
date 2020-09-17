import React from "react";
import Voice from "./howItWorksContent/voice";
import Amplify from "./howItWorksContent/amplify";
import Connect from "./howItWorksContent/connect";
import Send from "./howItWorksContent/send";

const HowItWorks = () => {
  return (
    <div className="container primary-bg primary-text w-full px-4 pr-10 mb-20 ">
      <p className="text-4xl font-bold">How it works</p>
      <p className="text-xl font-regular">You vent & vote. We pass it on. </p>
      <Voice />
      <Amplify />
      <Connect />
      <Send />
    </div>
  );
};

export default HowItWorks;
