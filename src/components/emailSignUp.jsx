import { useState } from "react";
import axios from "axios";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);
  const subscribe = async () => {
    setState("LOADING");
    setErrorMessage(null);
    try {
      const response = await axios.post("/api/emailSignUp", { email });
      setState("SUCCESS");
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setState("ERROR");
    }
  };
  return (
    <React.Fragment>
      <div className="">
        <input
          className="md:w-3/5 w-full h-12 my-px px-6 text-l font-thin italic rounded-md focus:outline-none border border-gray-500 appearance-none leading-normal"
          type="email"
          name="email"
          value={email}
          placeholder="Enter your email address"
          onChange={(e) => setEmail(e.target.value)}
          // ref={register({ required: true })}
        />

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
      {state == "SUCCESS" && (
        <p className="w-full mx-auto mt-1 text-red-600">
          Great! We'll keep you updated!
        </p>
      )}
    </React.Fragment>
  );
}
