import { Box, Container, Flex, useColorMode } from "@chakra-ui/react";
import Link from "next/link";

import Logo from "../Logo";
import NavigationWrapper from "../navigation/NavigationWrapper";

const Header = () => {
  const colorMode = useColorMode();
  return (
    <Box display={"flex"} alignItems={"center"} width={"full"}>
      <Container maxWidth={"container.xl"}>
        <Flex
          as="header"
          justifyContent={"space-between"}
          alignItems={"top"}
          height="min-content"
          gap={8}
          position={"relative"}
          overflow={"hidden"}
        >
          <Box flexShrink={2} maxW={{ base: 40, lg: 80 }}>
            <Link href="/">
              <Logo />
            </Link>
          </Box>

          <NavigationWrapper />
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
