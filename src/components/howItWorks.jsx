import React from "react";
import HIWTemplate from "./howItWorksContent/hiwTemplate";

import Voice from "./howItWorksContent/voice";
import Amplify from "./howItWorksContent/amplify";
import Connect from "./howItWorksContent/connect";
import Send from "./howItWorksContent/send";

const HowItWorks = () => {
  return (
    <div className="w-full px-4 pr-10 mb-20 mt-20">
      <p className="text-4xl md:text-5xl font-bold">How it works</p>
      <p className="text-xl md:text-2xl font-regular mb-20 md:mb-10 ">
        Your ideas, contributing to the collective voice.
        <br />
        Synthesized for maximum impact.
        <br /> Sent to all the right people.
      </p>
      <div className="overflow-hidden">
        {/* VOICE */}
        <HIWTemplate
          mockupPath="./how-it-works/mockups/newPost.png"
          mainText="Make your voice heard."
          actionText="Write in your ideas, concerns, and questions for local politicians, using this form."
          resultText="You’re providing fresh, community-inspired ideas for reps and your peers."
          position="left"
        />
        {/* AMPLIFY */}
        <HIWTemplate
          mockupPath="./how-it-works/mockups/feed.png"
          mainText="Amplify other voices."
          actionText="Read, vote, and comment on your peers feedback on your feed."
          resultText="You’re more informed on local conversations, contextualizing feedback for reps, and generating new data to evaluate reps’ decision making."
          position="right"
        />
        {/* CONNECT */}
        <HIWTemplate
          mockupPath="./how-it-works/mockups/data.png"
          mainText="We connect the dots."
          actionText="We display community beliefs-- by issue, by demographic, by party."
          resultText="Crystal clear and ultra actionable reports."
          position="left"
        />

        {/* <Send /> */}
      </div>
    </div>
  );
};

export default HowItWorks;
