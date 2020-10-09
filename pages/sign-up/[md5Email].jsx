// ** This page holds the secondary sign up page **
// The user's email address has already been sent to the mailchimp API and now we can
// edit their contact by pushing new data to ".../members/{md5-hash-of-email}"
// the push will be handled by /api/signUp.jsx
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [betaTester, setBetaTester] = useState(false);
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);
  const router = useRouter();
  const { md5Email } = router.query;

  const subscribe = async () => {
    setState("LOADING");
    setErrorMessage(null);

    try {
      const response = await axios.post("/api/signUp", {
        md5Email,
        firstName,
        lastName,
        zipCode,
        betaTester,
      });

      // ***Leaving this in just incase we want to add dynamic the success messages in the future
      // setErrorMessage(response.data.error);
      setState("SUCCESS");
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setState("ERROR");
    }
  };

  return (
    <div>
      <Link href="/">
        <button className="w-20 h-8 px-6 m-2 px-1 text-md font-regular bg-gray-400 shadow-lg rounded-lg">
          back
        </button>
      </Link>
      <div className="container bg-gray-200 w-full md:w-3/5 lg:w-1/2 mx-auto p-10 my-8">
        <label htmlFor="BackButton"></label>
        <label htmlFor="FirstNameInput">
          <input
            className="w-3/5 h-12 my-px px-6 text-l font-thin italic rounded-md focus:outline-none border border-gray-500 appearance-none leading-normal"
            type="name"
            name="firstName"
            value={firstName}
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label htmlFor="LastNameInput">
          <input
            className="w-3/5  h-12 my-px px-6 text-l font-thin italic rounded-md focus:outline-none border border-gray-500 appearance-none leading-normal"
            type="name"
            name="lastName"
            value={lastName}
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label htmlFor="zipCodeInput">
          <input
            className="w-3/5 h-12 my-px px-6 text-l font-thin italic rounded-md focus:outline-none border border-gray-500 appearance-none leading-normal"
            type="text"
            name="zipCode"
            value={zipCode}
            placeholder="Zip Code"
            onChange={(e) => setZipCode(e.target.value)}
          />
        </label>

        <label
          htmlFor="betaToggle"
          className="flex items-center cursor-pointer"
        >
          <div className="mr-3 text-gray-700 font-medium">
            I want early access
          </div>
          <div className="relative">
            <input
              id="betaToggle"
              type="checkbox"
              className="hidden"
              name="betaTester"
              checked={betaTester}
              onChange={() => setBetaTester(!betaTester)}
            />
            {/* Slider bg */}
            <div className="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
            {/* Slider dot */}
            <div className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"></div>
          </div>
        </label>

        <button
          className={
            "w-3/5 h-12 px-6 my-px px-1 text-md font-regular call-to-action-btn "
          }
          type="button"
          disabled={state === "Loading"}
          onClick={subscribe}
        >
          Submit
        </button>
        {state == "ERROR" && (
          <p className="w-full mx-auto mt-1 text-red-600">{errorMessage}</p>
        )}
        {state == "SUCCESS" && (
          <p className="w-full mx-auto mt-1 text-green-600">
            Great! We'll keep you updated
            {/* {"betaTest: " + errorMessage} */}
          </p>
        )}
      </div>
    </div>
  );
};

export default SignUp;
