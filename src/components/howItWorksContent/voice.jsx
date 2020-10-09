import React, { useState } from "react";

const Voice = () => {
  const [resultState, setResultState] = useState(false);

  return (
    <div>
      <div className="p-10 w-full md:w-2/3 lg:w-1/2">
        <img
          src="./how-it-works/mockups/newPost.png"
          className="-mb-16 w-1/2 mx-auto"
        />
        <div className="bg-blue-300 pb-5 pt-16 rounded-lg">
          {/* <img src="./how-it-works/ _voice.jpg" className="mt-12 w-20 h-20" /> */}
          <div className="text-center w-4/5 mx-auto">
            <p className="text-l md:text-2xl font-medium ">
              Make your voice heard.
            </p>
            <p className="text-l font-regular">
              Write in your ideas, concerns, and questions for local
              politicians, using this form.
            </p>
          </div>
        </div>
        <div className="w-5/6 md:flex-1 bg-blue-200 text-center mx-auto rounded-b-md">
          <div
            className={!resultState && "hidden w-full mx-auto p-2 text-center"}
          >
            <p className="w-5/6 mx-auto">
              You’re providing fresh, community-inspired ideas for reps and your
              peers.
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
  );
};

export default Voice;
