import { Flex } from "@chakra-ui/react";

import Logo from "../Logo";
import NavigationWrapper from "../navigation/NavigationWrapper";

export const Header = () => (
  <Flex
    as="header"
    justifyContent={"space-between"}
    gap={4}
    height={"fit-content"}
  >
    <Logo />
    <NavigationWrapper />
  </Flex>
);
