import React from "react";
import HIWTemplate from "./howItWorksContent/hiwTemplate";
import Send from "./howItWorksContent/send";

const HowItWorks = () => {
  return (
    <div className="w-full px-10 mt-20 bg-district bg-cover bg-no-repeat bg-fixed">
      <p className="text-4xl md:text-5xl font-bold">How it works</p>
      {/* <p className="text-xl md:text-2xl font-regular mb-20 md:mb-10 ">
        Your ideas, contributing to the collective voice.
        <br />
        Synthesized for maximum impact.
        <br /> Sent to all the right people.
      </p> */}
      <div className="overflow-hidden w-full mx-auto ">
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
          actionText="Read, vote, and comment on your peers feedback."
          resultText="You’re more informed on local conversations, contextualizing feedback for reps, and generating new data to evaluate reps’ decision making."
          position="right"
        />
        {/* CONNECT */}
        <HIWTemplate
          mockupPath="./how-it-works/mockups/data.png"
          mainText="We connect the dots."
          actionText="We harness comunity sentiment to generate open source, crystal clear,and ultra actionable reports."
          resultText="A community generated, shared pool of knowledge to measure politicians against and highlight a path forward."
          position="left"
        />
        {/* SEND */}
        <HIWTemplate
          mockupPath="./how-it-works/mockups/mail.png"
          mainText="Then send your collective voice to the right place."
          actionText="We send reports to your specific representatives, relevant house committees and state departments, and to our users."
          resultText="Ensuring transparent, targeted information flow for mutual understanding and maximum impact."
          position="right block "
        />
      </div>
      {/* <Send /> */}
    </div>
  );
};

export default HowItWorks;
