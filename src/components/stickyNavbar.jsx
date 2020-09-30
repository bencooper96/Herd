import React from "react";
import Link from "next/link";

function StickyNav() {
  return (
    <div className="sticky top-0 z-0 h-10 w-full">
      <Link href="/sign-up">
        <button className=" float-right mx-5 my-2 w-1/4 md:w-1/6 text-xl call-to-action-btn">
          Sign up
        </button>
      </Link>
    </div>
  );
}

export default StickyNav;
