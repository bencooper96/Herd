import React, { useState } from "react";

const HIWTemplate = (props) => {
  const [resultState, setResultState] = useState(false);

  return (
    <div
      className={
        " mx-auto py-4 w-full md:w-2/3 sm:p-10 sm:float-" + props.position
      }
    >
      <img
        src={props.mockupPath}
        className="-mb-16 -mt-2 sm:-mt-6 w-5/6 sm:w-1/2 lg:w-1/3 mx-auto"
      />
      <div className="bg-primary border pb-5 pt-16 rounded-lg">
        {/* <img src="./how-it-works/ _voice.jpg" className="mt-12 w-20 h-20" /> */}
        <div className="text-center w-4/5 mx-auto">
          <p className="text-l sm:text-2xl font-semibold ">{props.mainText}</p>
          <p className="text-md sm:text-xl font-regular">{props.actionText}</p>
        </div>
      </div>
      <div className="w-5/6 md:flex-1 bg-primary text-center mx-auto rounded-b-md border">
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
