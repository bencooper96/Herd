import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { theme } from "../styles/theme";

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
