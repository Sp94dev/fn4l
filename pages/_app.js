"use client";
import "../styles/global.css";

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
