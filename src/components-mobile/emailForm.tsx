import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  email: string;
}

export default function EmailForm() {
  const { register, handleSubmit, watch, errors } = useForm<FormData>();
  //   const onSubmit = (data) => console.log(data);
  //   watch("email"); // watch input value by passing the name of it

  const [submitting, setSubmitting] = useState<boolean>(false);
  const [serverErrors, setServerErrors] = useState<Array<string>>([]);
  return (
    <form
      onSubmit={handleSubmit(async (formData) => {
        setSubmitting(true);
        setServerErrors([]);

        const response = await fetch("/api/auth", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: formData.email }),
        });
        const data = await response.json();
        if (data.errors) {
          setServerErrors(data.errors);
        } else {
          console.log("success, redirect to next page");
        }
        console.log(data, "server data");
        data;
        setSubmitting(false);
      })}
      className="w-full px-2 mx-auto mt-20"
    >
      <input
        className="w-full h-12 my-2 px-6 text-l font-thin italic rounded-full focus:outline-none border border-gray-800 appearance-none leading-normal"
        type="email"
        name="email"
        placeholder="Enter your email address"
        ref={register({ required: true })}
      />
      {/* Handles server error response from /api/auth & displays it under email */}
      {serverErrors ? (
        <ul className="text-red-600 px-5">
          {serverErrors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="h-16 w-full px-6 my-2 text-md font-regular call-to-action-btn"
      >
        Sign up to start shaping your community.
      </button>
    </form>
  );
}
