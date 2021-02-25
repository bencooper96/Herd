import React from "react";
import * as Scroll from "react-scroll";
import {
  Box,
  HStack,
  Divider,
  Link,
  Flex,
  Spacer,
  useBreakpointValue,
  IconButton,
  List,
  Button,
  ListItem,
} from "@chakra-ui/react";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { ExternalLinkIcon, HamburgerIcon } from "@chakra-ui/icons";

import { TextLogo } from "../svg/logos";

function Links() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  if (isMobile) {
    return (
      <>
        <IconButton variant="ghost" ref={btnRef} onClick={onOpen}>
          <HamburgerIcon />
        </IconButton>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader
                textStyle="h3"
                borderBottom="1px"
                borderColor="fig.500"
              >
                Navigation
              </DrawerHeader>

              <DrawerBody>
                <List textStyle="subtitle" spacing={6}>
                  <ListItem>
                    <Scroll.Link
                      smooth={true}
                      to="about-herd"
                      onClick={() => onClose()}
                    >
                      About the App
                    </Scroll.Link>
                    {/* <Link href="#how-it-works">About the App</Link> */}
                  </ListItem>
                  <ListItem>
                    <Scroll.Link
                      smooth={true}
                      to="mission"
                      onClick={() => onClose()}
                    >
                      Mission
                    </Scroll.Link>
                  </ListItem>
                  {/* <ListItem>
                    <Scroll.Link
                      smooth={true}
                      to="about-us"
                      onClick={() => onClose()}
                    >
                      About Us
                    </Scroll.Link>
                  </ListItem> */}
                  <ListItem>
                    <Link href="https://herd-oklahoma.app" isExternal>
                      We're live in Oklahoma! <ExternalLinkIcon mx="2px" />
                    </Link>
                  </ListItem>
                </List>
              </DrawerBody>

              <DrawerFooter></DrawerFooter>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>
    );
  }
  return (
    <HStack spacing={4} textStyle="body">
      <Box _hover={{ textDecoration: "underline", cursor: "pointer" }}>
        <Scroll.Link smooth={true} to="about-herd">
          About Herd
        </Scroll.Link>
      </Box>
      <Box _hover={{ textDecoration: "underline", cursor: "pointer" }}>
        <Scroll.Link smooth={true} to="mission">
          Mission
        </Scroll.Link>
      </Box>
      {/* <Box _hover={{ textDecoration: "underline", cursor: "pointer" }}>
        <Scroll.Link smooth={true} to="about-us">
          About Us
        </Scroll.Link>
      </Box> */}
      <Divider orientation="vertical" />
      <Link href="https://herd-oklahoma.app" isExternal>
        App <ExternalLinkIcon mx="2px" />
      </Link>
    </HStack>
  );
}

function NavigationBar() {
  return (
    <Box w="100%" p={3} bg="light" boxShadow="md" position="fixed" zIndex={40}>
      <Flex alignItems="center">
        <Box _hover={{ cursor: "pointer" }}>
          <Scroll.Link smooth={true} to="home">
            <TextLogo />
          </Scroll.Link>
        </Box>
        <Spacer />
        <Links />
      </Flex>
    </Box>
  );
}

export default NavigationBar;
