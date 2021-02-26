import { extendTheme } from "@chakra-ui/react";

const colors = {
  fig: {
    500: "#9764C7",
    600: "#B586E1",
    700: "#C89AF2",
    800: "#D2AAF6",
    900: "#E3C6FF",
  },
  broccoli: {
    500: "#099A97",
    600: "#16A7A4",
    700: "#21B7B4",
    800: "#31C7C4",
    900: "#4FD3D1",
  },
  mushroom: "#F1E4E4",
  lime: "#15CDA8",
  dark: "#372448",
  text: "#514160",
  oyster: "#83778C",
  miso: "#E8E5E5",
  light: "#FCFCFC",
  white: "#FFFFFF",
};

const textStyles = {
  h1: {
    fontFamily: "Montserrat, Roboto, sans-serif",
    fontWeight: "bold",
    fontSize: "64px",
    letterSpacing: "-1.5%",
  },
  h2: {
    fontFamily: "Montserrat, Roboto, sans-serif",
    fontWeight: "bold",
    fontSize: "40px",
    letterSpacing: "-1.5%",
  },
  h3: {
    fontFamily: "Montserrat, Roboto, sans-serif",
    fontWeight: "bold",
    fontSize: "24px",
  },
  subtitle: {
    fontFamily: "Montserrat, Roboto, sans-serif",
    fontWeight: "regular",
    fontSize: "24px",
  },
  bold: {
    fontFamily: "Montserrat, Roboto, sans-serif",
    fontWeight: "bold",
    fontSize: "16px",
    lineheight: "125%",
    letterSpacing: "-1.5%",
  },
  body: {
    fontFamily: "Montserrat, Roboto, sans-serif",
    fontWeight: "regular",
    fontSize: "16px",
    lineheight: "140%",
  },
  small: {
    fontFamily: "Montserrat, Roboto, sans-serif",
    fontWeight: "regular",
    fontSize: "12px",
    lineheight: "140%",
    letterSpacing: "1.2%",
  },
  button: {
    fontFamily: "Montserrat, Roboto, sans-serif",
    fontWeight: "regular",
    fontSize: "12px",
    letterSpacing: "2.5%",
    textTransform: "uppercase",
  },
  pretitle: {
    fontFamily: "Montserrat, Roboto, sans-serif",
    fontWeight: "semibold",
    fontSize: "12px",
    letterSpacing: "4%",
    textTransform: "uppercase",
  },
};

const layerStyles = {
  post: {
    bg: "gray.50",
    border: "2px solid",
    borderColor: "gray.500",
  },
  selected: {
    bg: "teal.500",
    color: "teal.700",
    borderColor: "orange.500",
  },
};

const styles = {
  global: (props) => ({
    "html, body": {
      color: colors.text,
      bg: colors.light,
    },
    a: {
      color: "secondary.100",
    },
  }),
};

const theme = extendTheme({ colors, textStyles, layerStyles, styles });

export { theme };
