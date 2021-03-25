import React from "react";
import Image from "next/image";
import {
  Box,
  Flex,
  Spacer,
  Text,
  Center,
  VStack,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";

import { HubSpotForm } from "./inputs/signUpForm";

export default function LandingSection() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  if (isMobile) {
    return <MobileLayout />;
  } else {
    return <DesktopLayout />;
  }
}

const DesktopLayout = () => {
  return (
    <Box px={0} minH="100vh" id="home">
      <HStack>
        <LandingCopy />
        <LandingImage />
      </HStack>
    </Box>
  );
};

const MobileLayout = () => {
  return (
    <Center h="100vh" p={10} textAlign="center" id="home">
      <LandingCopy />
    </Center>
  );
};

function LandingImage() {
  return (
    <Box width={{ lg: "43%", md: "40%" }} pt={{ lg: 10, md: 18 }}>
      <Image
        src="/img/landing.png"
        alt="Picture of animal characters in discussion"
        width="710px"
        height="815px"
      />
    </Box>
  );
}

function LandingCopy() {
  return (
    <Center
      width={{ lg: "57%", md: "60%" }}
      px={{ lg: 20, md: 8 }}
      mt={{ lg: 0, md: 20 }}
    >
      <VStack>
        <Box mb={8}>
          <Text textStyle="h1">Your digital townhall</Text>
          <Text textStyle="subtitle">
            Local politics made easy, effective, & engaging
          </Text>
        </Box>
        <HubSpotForm />
      </VStack>
    </Center>
  );
}
