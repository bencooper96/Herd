import React from "react";
import EmailForm from "./components-mobile/emailForm.tsx";

const LandingMessage = () => {
  return (
    <div className="container primary-bg">
      <div className="relative z-20 h-screen w-5/6 mt-12 mx-auto ">
        <p className="w-48 mx-auto px-4 text-6xl font-bold text-center">Herd</p>
        <p className="w-full text-3xl font-regular text-center">
          Weave your values into your local politics.
        </p>
        <EmailForm />
      </div>
    </div>
  );
};

export default LandingMessage;
