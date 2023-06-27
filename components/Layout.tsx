import { Container } from "@chakra-ui/react";
import Head from "next/head";
import { ReactNode } from "react";

import { HeaderWrapper } from "./header/HeaderWrapper";

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
    <HeaderWrapper />
    <Container px={6} maxW={"container.xl"}>
      <main>{children}</main>
    </Container>
  </>
);

export default Layout;
