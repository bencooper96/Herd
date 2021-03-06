import Head from "next/head";
import { server } from "../utils/server";
import NavigationBar from "../src/components/navigationBar";
import LandingSection from "../src/components/landing";
import AboutTheAppSection from "../src/components/aboutHerd";
import MissionSection from "../src/components/mission";
import AboutUsSection from "../src/components/aboutUs";
import Footer from "../src/components/footer";
import { Box, Divider } from "@chakra-ui/react";

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
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Local politics made easy, effective, and engaging"
        />
        <meta
          name="keywords"
          content="Politics, Local, Voting, Bills, Legislation, Vote, Herd, Democracy, Voice, Heard"
        />
        <meta name="author" content="Herd" />
      </Head>
      <main>
        <NavigationBar />
        <LandingSection />
        <AboutTheAppSection posts={examplePosts} />
        <MissionSection />
        <Divider />
        <AboutUsSection />
        <Footer />
      </main>
    </>
  );
}

// This function gets called at build time
Home.getInitialProps = async (ctx) => {
  // Call an API endpoint to get data from mongoDB database

  const res = await fetch(`${server}/api/post`);
  const { data } = await res.json();

  // will receive `posts` as a prop at build time
  return {
    data,
  };
};

export default Home;
