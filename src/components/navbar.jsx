import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-10 w-full sm:flex items-baseline justify-between hidden px-4">
      <div className="flex items-baseline">
        <p className="text-5xl font-bold ">Herd</p>
        <p className="text-2xl font-thin italic mx-2">The digital town hall.</p>
      </div>
      {/* <Link href="/sign-up">
        <button className="w-1/6 text-xl call-to-action-btn self-end">
          Sign up
        </button>
      </Link> */}
    </div>
  );
};

export default Navbar;
