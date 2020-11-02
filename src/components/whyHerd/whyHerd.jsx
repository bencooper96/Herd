import React from "react";
import PeopleGallery from "./peopleGallery";

const WhyHerd = () => {
  return (
    <div className="bg-primary bg-cover bg-no-repeat bg-fixed w-full py-16 sm:px-20">
      <p className="text-4xl font-bold text-center sm:text-left">
        Why we're here
      </p>

      {/* <PeopleGallery /> */}

      <div className="bg-primary rounded-lg p-5">
        <p className="text-2xl font-semibold">Because local matters</p>
        <p className="text-xl font-regular pt-2">
          Federal politicians make headlines. Local politicians make decisions
          that shape our lives and livelihoods. Herd focuses on our city, our
          people.
        </p>

        <p className="text-2xl font-semibold pt-10">
          Because we’re stronger as a Herd
        </p>
        <p className="text-xl font-regular pt-2">
          One person standing up is powerful. One-thousand people standing is
          transformational. Herd connects people to collective ideas.
        </p>

        <p className="text-2xl font-semibold pt-10">
          Because we’re more alike than different
        </p>
        <p className="text-xl font-regular pt-2">
          We want better schools, better jobs, safer neighborhoods. Herd
          highlights our shared ideas as much as divergent ones, unlike social
          media and news outlets.
        </p>
      </div>
    </div>
  );
};

export default WhyHerd;
