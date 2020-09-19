import React, { Component } from "react";

class EmailForm extends Component {
  state = {};
  render() {
    return (
      <form action="POST" className="w-full px-2 mx-auto mt-20">
        <input
          className="w-full h-12 my-2 px-6 text-l font-thin italic rounded-full focus:outline-none border border-gray-800 appearance-none leading-normal"
          type="email"
          placeholder="Enter your email address"
        />
        <button className="h-16 w-full px-6 my-2 text-md font-regular call-to-action-btn">
          Sign up to start shaping your community.
        </button>
      </form>
    );
  }
}

export default EmailForm;
