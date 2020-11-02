import React from "react";
import PeopleGallery from "./peopleGallery";

const WhyHerd = () => {
  return (
    <div className="bg-secondary bg-cover secondary-text w-full py-16 px-5 sm:px-16">
      <p className="text-4xl font-bold text-center sm:text-left">
        Why we're here
      </p>

      {/* <PeopleGallery /> */}

      <div>
        <p className="text-xl font-semibold pt-10">Because local matters</p>
        <p className="text-l font-regular pt-2">
          Federal politicians make headlines. Local politicians make decisions
          that shape our lives and livelihoods. Herd focuses on our city, our
          people.
        </p>

        <p className="text-xl font-semibold pt-10">
          Because we’re stronger as a Herd
        </p>
        <p className="text-l font-regular pt-2">
          One person standing up is powerful. One-thousand people standing is
          transformational. Herd connects people to collective ideas.
        </p>

        <p className="text-xl font-semibold pt-10">
          Because we’re more alike than different
        </p>
        <p className="text-l font-regular pt-2">
          We want better schools, better jobs, safer neighborhoods. Herd
          highlights our shared ideas as much as divergent ones, unlike social
          media and news outlets.
        </p>
      </div>
    </div>
  );
};

export default WhyHerd;
