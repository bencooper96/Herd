import React, { useState } from "react";

const HIWTemplate = (props) => {
  const [resultState, setResultState] = useState(false);

  return (
    <div className={"md:p-10 p-8 w-full md:w-2/3 sm:float-" + props.position}>
      <img
        src={props.mockupPath}
        className="-mb-16 -mt-6 w-5/6 sm:w-1/2 lg:w-1/3 mx-auto"
      />
      <div className="bg-blue-300 pb-5 pt-16 rounded-lg">
        {/* <img src="./how-it-works/ _voice.jpg" className="mt-12 w-20 h-20" /> */}
        <div className="text-center w-4/5 mx-auto">
          <p className="text-l md:text-2xl font-medium ">{props.mainText}</p>
          <p className="text-l font-regular">{props.actionText}</p>
        </div>
      </div>
      <div className="w-5/6 md:flex-1 bg-blue-200 text-center mx-auto rounded-b-md">
        <div
          className={!resultState && "hidden w-full mx-auto p-2 text-center"}
        >
          <p className="w-5/6 mx-auto">{props.resultText}</p>
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
  );
};

export default HIWTemplate;
