import { Box, Container, Flex } from "@chakra-ui/react";
import Link from "next/link";

import { colors } from "../../theme/colors";
import Logo from "../Logo";
import NavigationWrapper from "../navigation/NavigationWrapper";

export const Header = () => (
  <>
    <Container
      backgroundColor={{ base: colors.accent, lg: "transparent" }}
      maxWidth={"container.xl"}
      position={"fixed"}
    >
      <Flex
        as="header"
        justifyContent={"space-between"}
        alignItems={"center"}
        height={{ base: 14, lg: "min-content" }}
        minHeight={{ lg: 48 }}
        gap={8}
      >
        <Link href="/">
          <Logo />
        </Link>

        <NavigationWrapper />
      </Flex>
    </Container>
    <Box height={{ base: 14, lg: "min-content" }} minHeight={{ lg: 48 }}></Box>
  </>
);
