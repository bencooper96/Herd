// pages/index.jsx
import MobileLayout from "../src/components/mobileLayout";
import Head from "next/head";
import DesktopLayout from "../src/components/desktopLayout";

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
        content="width=device-width, initial-scale=1, minimum-scale=1"
      ></meta>
    </Head>
    <MobileLayout />
    <DesktopLayout />
  </div>
);

export default Home;
