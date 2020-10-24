import React, { useState } from "react";

const HIWTemplateL = (props) => {
  const [resultState, setResultState] = useState(false);
  return (
    <div className="hidden sm:flex mx-auto w-full p-4 md:p-10">
      <img
        src={props.mockupPath}
        className="w-1/2 md:w-1/3 lg:p-8 mx-auto object-contain"
      />
      <div className="py-16 lg:m-20 mr-0 rounded">
        <div className="text-center w-11/12 mx-auto bg-primary border border-gray-600 py-8 px-2">
          <p className="text-l sm:text-2xl font-semibold ">{props.mainText}</p>
          <p className="text-md sm:text-xl font-regular">{props.actionText}</p>
        </div>
        <div>
          <img src="./downArrow.png" alt="" className="w-1/12 my-6 mx-auto" />
        </div>
        <div className="text-center w-11/12 mx-auto bg-primary border border-gray-600 py-8 px-2">
          <p className="text-md sm:text-xl font-regular">{props.resultText}</p>
        </div>
      </div>
    </div>
  );
};

const HIWTemplateR = (props) => {
  const [resultState, setResultState] = useState(false);
  return (
    <div className="sm:flex mx-auto w-full p-4 md:p-10">
      <div className="py-16 lg:m-20 ml-0 rounded">
        <div className="text-center w-11/12 mx-auto bg-primary border border-gray-600 py-8 px-2">
          <p className="text-l sm:text-2xl font-semibold ">{props.mainText}</p>
          <p className="text-md sm:text-xl font-regular">{props.actionText}</p>
        </div>
        <div>
          <img src="./downArrow.png" alt="" className="w-1/12 my-6 mx-auto" />
        </div>
        <div className="text-center w-11/12 mx-auto bg-primary border border-gray-600 py-8 px-2">
          <p className="text-md sm:text-xl font-regular">{props.resultText}</p>
        </div>
      </div>
      <img
        src={props.mockupPath}
        className="w-1/2 md:w-1/3 lg:p-8 mx-auto object-contain"
      />
    </div>
  );
};

const HIWTemplateMobile = (props) => {
  const [resultState, setResultState] = useState(false);
  return (
    <div className="mx-auto w-full">
      <img
        src={props.mockupPath}
        className="w-full px-8 mx-auto object-contain -mb-20"
      />
      <div className="py-16 rounded">
        <div className="text-center w-11/12 mx-auto bg-primary border border-gray-600 py-8 px-2">
          <p className="text-l sm:text-2xl font-semibold ">{props.mainText}</p>
          <p className="text-md sm:text-xl font-regular">{props.actionText}</p>
          <p className="text-md sm:text-xl font-regular mt-6">{props.resultText}</p>
        </div>

      </div>
    </div>
  );
};

export { HIWTemplateL, HIWTemplateR, HIWTemplateMobile };
