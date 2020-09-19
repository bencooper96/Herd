import React from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function EmailForm() {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const onSubmit = (data) => console.log(data);

  watch("email"); // watch input value by passing the name of it

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full px-2 mx-auto mt-20"
    >
      <input
        className="w-full h-12 my-2 px-6 text-l font-thin italic rounded-full focus:outline-none border border-gray-800 appearance-none leading-normal"
        type="email"
        name="email"
        placeholder="Enter your email address"
        ref={register({ required: true })}
      />
      {/* {errors.exampleRequired && <span>This field is required</span>} */}

      <button
        type="submit"
        className="h-16 w-full px-6 my-2 text-md font-regular call-to-action-btn"
      >
        Sign up to start shaping your community.
      </button>
    </form>
  );
}
