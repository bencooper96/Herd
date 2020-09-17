// pages/index.jsx
import Head from "next/head";

import StickyNav from "../src/components-mobile/stickyNav-mobile";
import LandingMessage from "../src/landingMessage";
import HowItWorks from "../src/components-mobile/howItWorks-mobile";
import Vision from "../src/components-mobile/vision";

const Home = () => (
  <div>
    <Head>
      <title>Herd</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,400;0,500;0,600;0,700;1,100;1,400;1,700&display=swap"
        rel="stylesheet"
      />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
      ></meta>
    </Head>
    <div className="container mx-auto" style={{ minHeight: "550px" }}>
      <img
        src="/Districts-Mobile-v1@2x.jpg"
        className="h-full w-full absolute inset-0 z-10"
        style={{ minHeight: "550px" }}
      />
      <StickyNav />
      <LandingMessage />
      <HowItWorks />
      <Vision />
    </div>
  </div>
);

export default Home;
