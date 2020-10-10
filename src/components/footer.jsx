import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-secondary w-full h-full px-2 pb-10">
      <div className="mx-auto text-center pt-10">
        <p className="sm:text-3xl text-2xl my-3">Like what you see?</p>
        <p className="sm:text-xl text-l">
          Don't be a stranger, we'd love to chat
        </p>
        <p className="sm:text-xl text-l">HeardByHerd@gmail.com</p>
        {/* <div className="flex mx-auto w-1/3 mt-5 pb-10">
          <Link href="/">
            <img
              className="h-12 object-contain mx-auto cursor-pointer"
              src="./social-media-icons/instagram-w.png"
            />
          </Link>
          <Link href="/">
            <img
              className="h-12 object-contain mx-auto cursor-pointer"
              src="./social-media-icons/twitter-w.png"
            />
          </Link>
          <Link href="/">
            <img
              className="h-12 object-contain mx-auto cursor-pointer"
              src="./social-media-icons/medium-w.png"
            />
          </Link>
          <Link href="/">
            <img
              className="h-12 object-contain mx-auto cursor-pointer"
              src="./social-media-icons/reddit-w.png"
            />
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
