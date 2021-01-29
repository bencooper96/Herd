import React from "react";

import { ChakraProvider } from "@chakra-ui/react";

// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#9764C7",
  },
  secondary: {
    100: "#099A97",
  },
  // terciary: {
  //   100: "#F1E4E4",
  // },
  quaternary: {
    100: "#15CDA8",
  },
  dark: {
    100: "#372448",
  },
  text: {
    100: "#514160",
  },
  subtleText: {
    100: "#83778C",
  },
  accent: {
    // 100: "#E8E5E5",
    100: "#F1E4E4",
  },
  light: {
    100: "#FCFCFC",
  },
  white: {
    100: "#FFFFFF",
  },
};

const textStyles = {
  h1: {
    fontFamily: "Montserrat",
    fontWeight: "bold",
    fontSize: "64px",
    letterSpacing: "-1.5%",
  },
  h2: {
    fontFamily: "Montserrat",
    fontWeight: "bold",
    fontSize: "40px",
    letterSpacing: "-1.5%",
  },
  h3: {
    fontFamily: "Montserrat",
    fontWeight: "bold",
    fontSize: "24px",
  },
  subtitle: {
    fontFamily: "Montserrat",
    fontWeight: "regular",
    fontSize: "24px",
  },
  bold: {
    fontFamily: "Montserrat",
    fontWeight: "bold",
    fontSize: "16px",
    lineheight: "125%",
    letterSpacing: "-1.5%",
  },
  body: {
    fontFamily: "Montserrat",
    fontWeight: "regular",
    fontSize: "16px",
    lineheight: "140%",
  },
  small: {
    fontFamily: "Montserrat",
    fontWeight: "regular",
    fontSize: "12px",
    lineheight: "140%",
    letterSpacing: "1.2%",
  },
  button: {
    fontFamily: "Montserrat",
    fontWeight: "regular",
    fontSize: "12px",
    letterSpacing: "2.5%",
    textTransform: "uppercase",
  },
  pretitle: {
    fontFamily: "Montserrat",
    fontWeight: "semibold",
    fontSize: "12px",
    letterSpacing: "4%",
    textTransform: "uppercase",
  },
};

const theme = extendTheme({ colors, textStyles });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
