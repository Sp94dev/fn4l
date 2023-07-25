"use client";
import "@fontsource/roboto/400.css";
import "@fontsource/open-sans-condensed";

import { ChakraBaseProvider } from "@chakra-ui/react";

import theme from "../theme";

const App = ({ Component, pageProps }) => (
  <>
    <ChakraBaseProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraBaseProvider>
  </>
);

export default App;
