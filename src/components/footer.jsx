import React from "react";

import {
  Box,
  Center,
  Stack,
  Text,
  Circle,
  Image,
  Avatar,
  Link,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { Logo } from "../svg/logos";
import { Facebook, Twitter } from "../svg/socialMedia";

export default function Footer() {
  const socials = [
    {
      name: "twitter",
      link: "https://twitter.com/heardbyherd",
      logo: <Twitter color="light" boxSize={6} />,
    },
    {
      name: "facebook",
      link: "https://www.facebook.com/HeardByHerd",
      logo: <Facebook color="light" boxSize={6} />,
    },
  ];

  const socialElements = socials.map(function (social) {
    return (
      <Link isExternal href={social.link} key={social.name}>
        <Circle border="1px" borderColor="light" p={2} mx={2}>
          {social.logo}
        </Circle>
      </Link>
    );
  });

  return (
    <Box bg="dark" id="footer" p={2}>
      <Stack direction="column" align="center" py={10}>
        <Logo color="light" boxSize={12} />
        <Text color="light" textStyle="bold">
          hello@joinherd.us
        </Text>
        <Flex>{socialElements}</Flex>
      </Stack>

      <Flex>
        <Text color="light" textStyle="small">
          Copyright © 2021 Herd
        </Text>
        <Spacer />
        <Link href="/privacy">
          <Text color="light" textStyle="small">
            Privacy Policy
          </Text>
        </Link>
      </Flex>
    </Box>
  );
}
