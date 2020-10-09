import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
var md5 = require("md5");

const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);
  const router = useRouter();

  //Subscribe function calls emailSignUp.jsx api and sets state based on response
  //emailSignUp.jsx returns error messages to be displayed
  //if response is successful, redirectToSignUpPage() is called
  const subscribe = async () => {
    setState("LOADING");
    setErrorMessage(null);
    try {
      const response = await axios.post("/api/emailSignUp", { email });
      setState("SUCCESS");
      redirectToSignUpPage();
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setState("ERROR");
    }
  };

  //on successful responses, user is directed to a signup page
  //.....................
  //md5 hash of their email address is passed as the slug, so
  //that it can be used as a variable for the Mailchimp API call
  const url = "/sign-up/" + md5(email);
  const redirectToSignUpPage = () => {
    router.push(url);
  };

  return (
    <React.Fragment>
      <div className="md:flex">
        <label htmlFor="EmailAddressInput" className="md:w-3/5 w-full ">
          <input
            className="w-full h-12 my-px  px-6 text-l font-thin italic rounded-md focus:outline-none border border-gray-500 appearance-none leading-normal"
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <button
          className={
            "md:w-2/5 w-full h-12 px-6 my-px px-1 text-md font-regular call-to-action-btn "
          }
          type="button"
          disabled={state === "Loading"}
          onClick={subscribe}
        >
          Join the Herd.
        </button>
      </div>
      {state == "ERROR" && (
        <p className="w-full mx-auto mt-1 text-red-600">{errorMessage}</p>
      )}
    </React.Fragment>
  );
};

export default EmailForm;
