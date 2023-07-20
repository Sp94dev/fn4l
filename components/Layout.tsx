import { Container } from "@chakra-ui/react";
import Head from "next/head";
import { ReactNode } from "react";

import Header from "./header/Header";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = "Fundacja terapeuta na czterech łapach",
}: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <Header />
    <Container px="8" maxW="full">
      <main>{children}</main>
    </Container>
  </>
);

export default Layout;
