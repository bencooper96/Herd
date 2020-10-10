import React, { useState } from "react";
import HIWTemplate from "./hiwTemplate";

const Send = () => {
  const [resultState, setResultState] = useState(false);

  return (
    <div className="mt-20 relative hidden md:block">
      <img src="./how-it-works/envelope-back.png" className="bottom-0" />
      <div className="absolute inset-0 lg:m-20 m-5 primary-bg border-2 border-black lg:pt-10 pt-0">
        <div className="static w-full text-center">
          <div className={"mx-auto p-10 w-full md:w-5/6 lg:w-2/3"}>
            <div className="bg-purple-gradient pb-5 pt-4 rounded-lg">
              <div className="text-center w-4/5 mx-auto">
                <p className="text-xl lg:text-2xl font-semibold ">
                  Then send your collective voice to the right place.
                </p>
                <p className="text-lg lg:text-xl font-regular">
                  We send reports to your specific representatives, relevant
                  house committees and state departments, and to our users.
                </p>
              </div>
            </div>
            <div className="w-5/6 md:flex-1 bg-red-gradient text-center mx-auto rounded-b-md">
              <div
                className={
                  !resultState && "hidden w-full mx-auto p-2 text-center"
                }
              >
                <p className="w-5/6 mx-auto">
                  Ensuring transparent, targeted information flow for mutual
                  understanding and maximum impact.
                </p>
              </div>
              <a
                onClick={() => setResultState(!resultState)}
                className="cursor-pointer "
              >
                <p className="pt-px underline">
                  {!resultState && "Result"}
                  {resultState && "Close"}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        src="./how-it-works/envelope-front.png"
        className="absolute bottom-0 pointer-events-none"
      />
    </div>
  );
};

export default Send;
