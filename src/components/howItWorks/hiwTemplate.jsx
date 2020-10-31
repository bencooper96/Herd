import React, { useState } from "react";

const HIWTemplateL = (props) => {
  const [resultState, setResultState] = useState(false);
  return (
    <div className="hidden sm:flex mx-auto w-full lg:w-11/12 p-4 md:p-10">
      <img
        src={props.mockupPath}
        className="w-1/2 md:w-1/3 lg:p-8 mx-auto object-contain"
      />
      <div className="py-16 lg:mx-10 mr-0 rounded">
        <p className="text-2xl sm:text-4xl font-semibold text-center mb-4">
          {props.mainText}
        </p>
        <div className="text-center w-11/12 mx-auto bg-primary border border-gray-600 pt-4 pb-8 px-2">
          <p className="text-left text-xl italic underline m-2 mt-0">Action:</p>
          <p className="text-md sm:text-xl font-regular">{props.actionText}</p>
        </div>
        <div>
          <img src="./downArrow.png" alt="" className="w-1/12 my-6 mx-auto" />
        </div>
        <div className="text-center w-11/12 mx-auto bg-primary border border-gray-600 pt-4 pb-8 px-2">
          <p className="text-left text-xl italic underline m-2 mt-0">Result:</p>
          <p className="text-md sm:text-xl font-regular">{props.resultText}</p>
        </div>
      </div>
    </div>
  );
};

const HIWTemplateMobile = (props) => {
  const [resultState, setResultState] = useState(false);
  return (
    <div className="mx-auto w-full">
      <img
        src={props.mockupPath}
        className="w-11/12 px-8 mx-auto object-contain -mb-20"
      />
      <div className="py-16 rounded">
        <div className="text-center w-11/12 mx-auto bg-primary border border-gray-600 py-8 px-2">
          <p className="text-l sm:text-2xl font-semibold ">{props.mainText}</p>
          <p className="text-md sm:text-xl font-regular">{props.actionText}</p>
          <p className="text-md sm:text-xl font-regular mt-6">
            {props.resultText}
          </p>
        </div>
      </div>
    </div>
  );
};

export { HIWTemplateL, HIWTemplateMobile };
