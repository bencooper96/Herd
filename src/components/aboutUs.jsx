import React from "react";

import { Box, Center, Text, Image, Stack, Wrap } from "@chakra-ui/react";

export default function AboutUsSection() {
  return (
    <Box bg="light" p={{ md: 20, base: 4 }} py={40} id="about-us">
      <Text textStyle="h2">Our Team</Text>
      <Wrap justify="space-around" mt={10}>
        <AboutBenCard />
        <AboutSebCard />
      </Wrap>
    </Box>
  );
}

function AboutBenCard() {
  return (
    <Stack
      direction="column"
      spacing={2}
      mx={2}
      py={10}
      align="center"
      maxW="450px"
      minW="350px"
    >
      <Image
        src="/img/headshots/ben.jpg"
        boxSize="200px"
        borderRadius="full"
        alt="Ben Cooper"
      />
      <Box>
        <Text align="center" textStyle="h3">
          Ben Cooper
        </Text>
        <Text align="center" textStyle="subtitle">
          Product
        </Text>
      </Box>
      <Text textStyle="body">
        I am a designer and developer with a habit of reading too much news. I
        came to Oklahoma for school in 2015 and gained a deep admiration for the
        state. I earned a degree in Chemical Engineering but found that product
        development was better suited to my interests. I have worked in the
        product management, design, and analytics fields. I hope to use this
        background to build Herd into an approachable way for citizens to speak
        up and their representatives to hear them.
      </Text>
    </Stack>
  );
}

function AboutSebCard() {
  return (
    <Stack
      direction="column"
      spacing={2}
      py={10}
      align="center"
      maxW="450px"
      minW="350px"
    >
      <Image
        src="/img/headshots/seb.jpg"
        boxSize="200px"
        borderRadius="full"
        alt="Sebastian Tippett"
      />
      <Box>
        <Text align="center" textStyle="h3">
          Sebastian Tippett
        </Text>
        <Text align="center" textStyle="subtitle">
          Community
        </Text>
      </Box>
      <Text textStyle="body">
        I’m from Minnesota with deep family roots in Oklahoma - my Mom’s side of
        the family comes from Shawnee and now lives in OKC. In 2016, I came home
        to Oklahoma for University (boomer) and graduated with a degree in
        Economics. My working background is in consulting and startup marketing,
        and Herd is an opportunity to use those skills to benefit better policy
        conversations - because social media isn’t serving constituents or
        policymakers.
      </Text>
    </Stack>
  );
}
