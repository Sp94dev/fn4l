import { Box, Container, Flex } from "@chakra-ui/react";
import Link from "next/link";

import Logo from "./Logo";
import NavigationWrapper from "./navigation/NavigationWrapper";

const Header = () => (
  <Flex alignItems="center" width="full">
    <Container maxWidth="full">
      <Flex
        as="header"
        justifyContent="space-between"
        alignItems="top"
        height="min-content"
        position="relative"
        overflow="hidden"
      >
        <Box
          flexShrink={2}
          maxW={{ base: 40, lg: 80 }}
          marginTop={4}
          marginStart={17}
        >
          <Link href="/">
            <Logo />
          </Link>
        </Box>

        <NavigationWrapper />
      </Flex>
    </Container>
  </Flex>
);

export default Header;
