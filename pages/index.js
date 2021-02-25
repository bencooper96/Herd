import Head from "next/head";
import { server } from "../utils/server";
import NavigationBar from "../src/components/navigationBar";
import LandingSection from "../src/components/landing";
import AboutTheAppSection from "../src/components/aboutHerd";
import MissionSection from "../src/components/mission";
import AboutUsSection from "../src/components/aboutUs";
import Footer from "../src/components/footer";
import { Box } from "@chakra-ui/react";

function Home({ data }) {
  const examplePosts = data.filter(
    (post) =>
      (post.type == "brainstorm" || post.type == "crowdtest") && post.isShown
  );

  return (
    <>
      <Head>
        <title>Herd</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavigationBar />
      <LandingSection />
      <AboutTheAppSection posts={examplePosts} />
      <MissionSection />
      {/* <AboutUsSection /> */}
      <Footer />
    </>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an API endpoint to get data from mongoDB database
  const res = await fetch(`${server}/api/post`);
  const { data } = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data,
    },
  };
}

export default Home;
