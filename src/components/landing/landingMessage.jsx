import React from "react";
import EmailForm from "./emailSignUp";

const LandingMessage = () => {
  return (
    <div
      className="z-20 sm:h-full h-screen px-6 pt-5 sm:bg-primary"
      id="landing"
    >
      <div className="w-full table mx-auto mt-6 sm:hidden ">
        <p className="w-full text-5xl font-bold text-center">Herd</p>
        <p className="w-full text-2xl font-thin italic text-center -mt-4">
          Your digital town hall.
        </p>
      </div>

      <div className="sm:hidden text-center block ">
        <p className="w-full mt-10 mb-5 text-4xl font-medium text-center ">
          Local politics made easy, effective, & engaging.
        </p>
        <EmailForm />
      </div>

      <div className=" md:p-8 p-1 mt-3 sm:mt-10 hidden sm:flex">
        <div className="lg:p-2">
          <p className="w-full lg:text-6xl text-5xl font-medium text-left">
            Local politics made easy, effective, & engaging.
          </p>

          <EmailForm />
        </div>
        <img
          className="hidden sm:block w-1/2 object-contain"
          src="/landing-img.png"
        />
      </div>
    </div>
  );
};

export default LandingMessage;
